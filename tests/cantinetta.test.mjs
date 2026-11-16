import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

const museum = JSON.parse(readFileSync(new URL("../src/data/cantinetta.json", import.meta.url), "utf8"));
const credits = JSON.parse(readFileSync(new URL("../public/assets/cantinetta/credits.json", import.meta.url), "utf8"));

function bilingual(value, label) {
  for (const lang of ["it", "en"]) assert.ok(value?.[lang]?.trim(), `${label}.${lang} is missing`);
}

test("museum entries have stable identifiers, valid galleries and unique display positions", () => {
  const rooms = new Set(museum.rooms.map((room) => room.id));
  assert.equal(rooms.size, museum.rooms.length);
  assert.equal(new Set(museum.devices.map((device) => device.id)).size, museum.devices.length);
  assert.equal(new Set(museum.devices.map((device) => device.order)).size, museum.devices.length);
  for (const room of museum.rooms) bilingual(room.name, room.id);
  for (const device of museum.devices) {
    assert.match(device.id, /^[a-z0-9-]+$/);
    assert.ok(rooms.has(device.room), `${device.id}: unknown gallery`);
    assert.ok(Number.isInteger(device.order) && device.order > 0);
    assert.ok(device.introduced === null || /^\d{4}(?:-(?:0[1-9]|1[0-2]))?$/.test(device.introduced));
  }
});

test("every device has bilingual content, historical sources and an explicit photo state", () => {
  for (const device of museum.devices) {
    for (const key of ["name", "highlights", "description"]) bilingual(device[key], `${device.id}.${key}`);
    if (device.confirmation) bilingual(device.confirmation, `${device.id}.confirmation`);
    assert.ok(device.sources.length > 0, `${device.id}: missing historical source`);
    for (const source of device.sources) {
      assert.ok(source.label.trim());
      assert.equal(new URL(source.url).protocol, "https:");
    }
    assert.ok(Object.hasOwn(device, "photo"));
    if (device.photo === null) bilingual(device.photoNote, `${device.id}.photoNote`);
  }
});

test("each displayed photograph is local, optimized and accompanied by matching license credits", () => {
  const photographed = museum.devices.filter((device) => device.photo);
  assert.equal(credits.photos.length, photographed.length);
  for (const device of photographed) {
    const photo = device.photo;
    assert.match(photo.src, /^\/assets\/cantinetta\/[a-z0-9-]+\.webp$/);
    const file = new URL(`../public${photo.src}`, import.meta.url);
    assert.ok(statSync(file).size < 180_000, `${device.id}: image exceeds the card image budget`);
    const bytes = readFileSync(file);
    assert.equal(bytes.toString("ascii", 0, 4), "RIFF");
    assert.equal(bytes.toString("ascii", 8, 12), "WEBP");
    assert.ok(photo.width > 0 && photo.width <= 800 && photo.height > 0 && photo.height <= 800);
    bilingual(photo.alt, `${device.id}.alt`);
    bilingual(photo.changes, `${device.id}.changes`);
    for (const key of ["author", "title", "license", "source", "original", "licenseUrl"]) assert.ok(photo[key]?.trim());
    assert.equal(new URL(photo.source).hostname, "commons.wikimedia.org");
    const credit = credits.photos.find((entry) => entry.deviceId === device.id);
    assert.ok(credit, `${device.id}: missing attribution record`);
    for (const [key, value] of Object.entries(photo)) assert.deepEqual(credit[key], value, `${device.id}: stale ${key} credit`);
  }
});
