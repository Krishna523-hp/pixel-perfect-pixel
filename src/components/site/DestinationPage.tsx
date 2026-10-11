import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { destinations, type Destination } from "@/data/destinations";
import { Credit, Photo } from "./Photo";
import { DestinationCard } from "./DestinationCard";

export function destinationHead(d: Destination) {
  const title = `${d.name} — Explore Bardhaman`;
  const meta = [
    { title },
    { name: "description", content: d.short },
    { property: "og:title", content: title },
    { property: "og:description", content: d.short },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
  if (d.image) meta.push({ property: "og:image", content: d.image.src }, { name: "twitter:image", content: d.image.src });
  return { meta };
}

export function DestinationPage({ d }: { d: Destination }) {
  const others = destinations.filter((x) => x.slug !== d.slug).slice(0, 3);
  const lowRes = d.slug === "bardhaman-palace";
  return (
    <article>
      <div className="container-site pt-8">
        <Link to="/heritage" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Heritage
        </Link>
      </div>

      <header className="container-site mt-6 grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">{d.category}</p>
          <h1 className="mt-3 text-5xl leading-[1.05] md:text-6xl">{d.name}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{d.intro}</p>
        </div>
        <div className="lg:col-span-7">
          <Photo
            photo={d.image}
            alt={d.name}
            eager
            credit
            className={lowRes ? "mx-auto aspect-[2/3] max-w-sm rounded-lg" : "aspect-[4/3] rounded-lg"}
          />
        </div>
      </header>

      <div className="container-site mt-20 grid gap-14 lg:grid-cols-12">
        <div className="space-y-14 lg:col-span-7">
          <section>
            <h2 className="text-3xl md:text-4xl">About the Place</h2>
            {d.about.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-foreground/85">{p}</p>
            ))}
          </section>
          <section>
            <h2 className="text-3xl md:text-4xl">History and Background</h2>
            {d.history.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-foreground/85">{p}</p>
            ))}
          </section>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-lg border-l-2 border-gold bg-secondary p-8">
            <p className="eyebrow">Significance</p>
            <p className="mt-3 font-serif text-2xl leading-snug">{d.significance}</p>
          </div>
          {d.image2 && (
            <div className="mt-8">
              <Photo photo={d.image2} alt={`Another view of ${d.name}`} className="aspect-[4/3] rounded-lg" />
              <div className="mt-2"><Credit photo={d.image2} /></div>
            </div>
          )}
        </aside>
      </div>

      <section className="container-site mt-24">
        <h2 className="text-3xl">Continue exploring</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {others.map((o) => <DestinationCard key={o.slug} d={o} />)}
        </div>
      </section>
    </article>
  );
}
