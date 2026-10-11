import { createFileRoute } from "@tanstack/react-router";
import { DestinationCard } from "@/components/site/DestinationCard";
import { PageHeading } from "@/components/site/Layout";
import { destinations } from "@/data/destinations";

export const Route = createFileRoute("/heritage/")({
  head: () => ({
    meta: [
      { title: "Heritage of Bardhaman — Explore Bardhaman" },
      { name: "description", content: "Explore the landmarks, stories and traditions of this historic Bengal city." },
      { property: "og:title", content: "Heritage of Bardhaman — Explore Bardhaman" },
      { property: "og:description", content: "Eleven landmarks, temples and gardens of historic Bardhaman." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Heritage,
});

function Heritage() {
  return (
    <>
      <PageHeading
        eyebrow="Destinations"
        title="Heritage of Bardhaman"
        subtitle="Explore the landmarks, stories and traditions of this historic Bengal city."
      />
      <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => <DestinationCard key={d.slug} d={d} />)}
      </div>
    </>
  );
}
