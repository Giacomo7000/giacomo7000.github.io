const root = document.querySelector<HTMLElement>("[data-museum]");

if (root) {
  const dialog = root.querySelector<HTMLDialogElement>("[data-museum-dialog]")!;
  const body = root.querySelector<HTMLElement>("[data-drawer-body]")!;
  const closeButton = root.querySelector<HTMLButtonElement>("[data-drawer-close]")!;
  const number = root.querySelector<HTMLElement>("[data-drawer-number]")!;
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-device-id]"));
  const filters = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-room]"));
  const count = root.querySelector<HTMLElement>("[data-visible-count]")!;
  const empty = root.querySelector<HTMLElement>("[data-museum-empty]")!;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
  let visible = [...items];
  let selected = "";
  let lastFocus: HTMLElement | null = null;
  let dialogMotion: Animation | null = null;
  let operation = 0;
  let savedOverflow = "";

  const reveal = (item: HTMLElement, index: number, keyboard = false) => {
    item.removeAttribute("data-pending");
    if (!reduced.matches && !keyboard) {
      item.animate([{ opacity: 0, transform: "translateY(14px)" }, { opacity: 1, transform: "translateY(0)" }], {
        duration: 350, delay: (index % 4) * 35, easing: "cubic-bezier(.23,1,.32,1)", fill: "backwards"
      });
    }
  };

  const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.filter((entry) => entry.isIntersecting).forEach((entry, index) => {
      reveal(entry.target as HTMLElement, index);
      observer?.unobserve(entry.target);
    });
  }, { threshold: 0.06, rootMargin: "0px 0px 30px 0px" }) : null;

  const openDevice = (id: string, trigger?: HTMLElement, keyboard = false) => {
    const record = root.querySelector<HTMLElement>(`[data-device-record="${CSS.escape(id)}"] .record-content`);
    if (!record) return;
    selected = id;
    const content = record.cloneNode(true) as HTMLElement;
    content.querySelector("[data-record-title]")!.id = "museum-dialog-title";
    const image = content.querySelector("img");
    if (image) image.loading = "eager";
    body.replaceChildren(content);
    body.scrollTop = 0;
    number.textContent = String(items.findIndex((item) => item.dataset.deviceId === id) + 1).padStart(2, "0");
    operation++;
    dialogMotion?.cancel();
    if (!dialog.open) {
      lastFocus = trigger || document.activeElement as HTMLElement;
      savedOverflow = document.body.style.overflow;
      dialog.showModal();
      document.body.style.overflow = "hidden";
      if (!reduced.matches && !keyboard) {
        dialogMotion = dialog.animate([{ transform: "translateX(100%)" }, { transform: "translateX(0)" }], {
          duration: 280, easing: "cubic-bezier(.32,.72,0,1)"
        });
      }
      closeButton.focus({ preventScroll: true });
    }
  };

  const closeDevice = (keyboard = false) => {
    if (!dialog.open) return;
    const token = ++operation;
    const current = getComputedStyle(dialog).transform;
    dialogMotion?.cancel();
    const finish = () => {
      if (token !== operation) return;
      dialog.close();
      document.body.style.overflow = savedOverflow;
      if (lastFocus?.isConnected) lastFocus.focus({ preventScroll: true });
    };
    if (reduced.matches || keyboard) { finish(); return; }
    dialogMotion = dialog.animate([{ transform: current === "none" ? "translateX(0)" : current }, { transform: "translateX(100%)" }], {
      duration: 180, easing: "cubic-bezier(.32,.72,0,1)", fill: "forwards"
    });
    dialogMotion.finished.then(finish, () => {});
  };

  root.addEventListener("click", (event) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>("[data-open-device]");
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    openDevice(link.dataset.openDevice!, link, event.detail === 0);
  });

  filters.forEach((button) => button.addEventListener("click", (event) => {
    const room = button.dataset.room;
    filters.forEach((filter) => filter.setAttribute("aria-pressed", String(filter === button)));
    visible = items.filter((item) => room === "all" || item.dataset.deviceRoom === room);
    items.forEach((item) => {
      item.hidden = !visible.includes(item);
      observer?.unobserve(item);
      item.removeAttribute("data-pending");
      item.getAnimations().forEach((animation) => animation.cancel());
    });
    count.textContent = String(visible.length);
    empty.hidden = visible.length !== 0;
    visible.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < innerHeight && rect.bottom > 0) reveal(item, index, event.detail === 0);
      else if (observer) { item.dataset.pending = ""; observer.observe(item); }
    });
  }));

  closeButton.addEventListener("click", (event) => closeDevice(event.detail === 0));
  dialog.addEventListener("cancel", (event) => { event.preventDefault(); closeDevice(true); });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDevice();
  });
  root.querySelector("[data-drawer-next]")!.addEventListener("click", (event) => {
    const index = visible.findIndex((item) => item.dataset.deviceId === selected);
    const next = visible[(index + 1) % visible.length];
    if (next) openDevice(next.dataset.deviceId!, undefined, (event as MouseEvent).detail === 0);
  });

  const cards = Array.from(root.querySelectorAll<HTMLAnchorElement>(".museum-card"));
  cards.forEach((card) => {
    let frame = 0;
    let rect: DOMRect;
    card.addEventListener("pointerenter", () => { rect = card.getBoundingClientRect(); });
    card.addEventListener("pointermove", (event) => {
      if (!finePointer.matches || reduced.matches || event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = Math.max(-0.5, Math.min(0.5, (event.clientX - rect.left) / rect.width - 0.5));
        const y = Math.max(-0.5, Math.min(0.5, (event.clientY - rect.top) / rect.height - 0.5));
        card.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-5px)`;
      });
    });
    const reset = () => { cancelAnimationFrame(frame); card.style.transform = ""; };
    card.addEventListener("pointerleave", reset);
    card.addEventListener("blur", reset);
  });

  if ("IntersectionObserver" in window) {
    const heroObserver = new IntersectionObserver(([entry]) => root.toggleAttribute("data-hero-paused", !entry.isIntersecting));
    heroObserver.observe(root.querySelector(".hero-exhibit")!);
  }

  reduced.addEventListener("change", () => {
    if (reduced.matches) {
      dialogMotion?.finish();
      cards.forEach((card) => card.style.transform = "");
      items.forEach((item) => { item.removeAttribute("data-pending"); item.getAnimations().forEach((animation) => animation.cancel()); });
    }
  });

  // Enhance only after controls are wired: without JS, each card opens its inline record.
  root.dataset.enhanced = "";
  cards.forEach((card) => card.setAttribute("aria-haspopup", "dialog"));
  if (observer && !reduced.matches) items.forEach((item) => { item.dataset.pending = ""; observer.observe(item); });
  const linked = items.find((item) => `#object-${item.dataset.deviceId}` === location.hash);
  if (linked) openDevice(linked.dataset.deviceId!, linked.querySelector("a")!, true);
}

export {};
