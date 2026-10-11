import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/site/Layout";
import { Credit, Photo } from "@/components/site/Photo";
import { destinations } from "@/data/destinations";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Bardhaman in Pictures — Explore Bardhaman" },
      { name: "description", content: "Photographs of Bardhaman's landmarks, architecture, gardens and cultural heritage." },
      { property: "og:title", content: "Bardhaman in Pictures — Explore Bardhaman" },
      { property: "og:description", content: "A photo gallery of Bardhaman's landmarks and heritage." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

const items = destinations.flatMap((d) =>
  [d.image, d.image2]
    .filter((p, i) => p || i === 0)
    .map((p, i) => ({ photo: p ?? null, caption: i ? `${d.name} — another view` : d.name, key: `${d.slug}-${i}` })),
);

function Gallery() {
  return (
    <>
      <PageHeading
        eyebrow="Gallery"
        title="Bardhaman in Pictures"
        subtitle="Discover the city's landmarks, architecture, gardens and cultural heritage."
      />
      <div className="container-site columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((it) => (
          <figure key={it.key} className="mb-5 break-inside-avoid overflow-hidden rounded-lg border bg-card">
            {it.photo ? (
              <img src={it.photo.src} alt={it.caption} loading="lazy" className="w-full" />
            ) : (
              <Photo photo={null} alt={it.caption} className="aspect-[4/3]" />
            )}
            <figcaption className="flex flex-col gap-2 p-4">
              <span className="font-serif text-lg">{it.caption}</span>
              {it.photo && <Credit photo={it.photo} className="self-start" />}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
