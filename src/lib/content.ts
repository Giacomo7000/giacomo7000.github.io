import { getCollection } from "astro:content";

export async function getProjects() {
  const projects = await getCollection("projects");
  return projects.sort((a, b) => b.data.order - a.data.order);
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((project) => project.data.featured).slice(0, 3);
}

export async function getArchiveEntries() {
  const entries = await getCollection("archive");
  return entries.sort((a, b) => b.data.order - a.data.order);
}

export function buildSearchItems(projects: Awaited<ReturnType<typeof getProjects>>, archive: Awaited<ReturnType<typeof getArchiveEntries>>) {
  return [
    ...projects.map((entry) => ({
      type: "Project",
      title: entry.data.title,
      summary: entry.data.summary,
      href: `/projects/${entry.slug}`,
      order: entry.data.order,
      tags: entry.data.technologies
    })),
    ...archive.map((entry) => ({
      type: "Archive",
      title: entry.data.title,
      summary: entry.data.summary,
      href: `/archive/${entry.slug}`,
      order: entry.data.order,
      tags: entry.data.tags
    }))
  ].sort((a, b) => b.order - a.order);
}
