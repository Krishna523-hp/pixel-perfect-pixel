import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Destination } from "@/data/destinations";
import { Photo } from "./Photo";

export function DestinationCard({ d, tall }: { d: Destination; tall?: boolean }) {
  return (
    <Link
      to={`/heritage/${d.slug}` as "/heritage/curzon-gate"}
      className="group block overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg"
    >
      <Photo
        photo={d.image}
        alt={d.name}
        className={tall ? "aspect-[4/5]" : "aspect-[4/3]"}
        imgClassName="transition-transform duration-700 group-hover:scale-105"
      />
      <div className="p-6">
        <p className="eyebrow">{d.category}</p>
        <h3 className="mt-2 text-2xl">{d.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.short}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
