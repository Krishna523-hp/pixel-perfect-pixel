import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Crown, Landmark, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DestinationCard } from "@/components/site/DestinationCard";
import { Credit, Photo } from "@/components/site/Photo";
import { destinations, getDestination } from "@/data/destinations";
import { photos } from "@/data/photos";

const hero = photos.curzon1;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Explore Bardhaman — Discover the Royal Heritage of Bengal" },
      { name: "description", content: "Explore historic landmarks, temples, royal architecture and gardens in Bardhaman, West Bengal." },
      { property: "og:title", content: "Explore Bardhaman — Discover the Royal Heritage of Bengal" },
      { property: "og:description", content: "Historic landmarks, temples, royal architecture and gardens in Bardhaman, West Bengal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: hero.src },
      { name: "twitter:image", content: hero.src },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Crown, title: "Royal Heritage", text: "Explore architecture and stories associated with Bardhaman's royal past." },
  { icon: Landmark, title: "Sacred Landmarks", text: "Discover temples and religious places important to the local community." },
  { icon: Trees, title: "Gardens and Nature", text: "Visit gardens, parks and nearby natural landscapes." },
  { icon: BookOpen, title: "Culture and Learning", text: "Explore cultural institutions and attractions that contribute to Bardhaman's identity." },
];

function Home() {
  const featured = ["curzon-gate", "bardhaman-palace", "108-shiva-temple"].map(getDestination);
  return (
    <>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img src={hero.src} alt="Curzon Gate (Bijoy Toran), Bardhaman" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-site relative pb-20 pt-32 text-ink-foreground md:pb-28">
          <p className="eyebrow">West Bengal · India</p>
          <h1 className="mt-4 text-7xl font-bold tracking-tight md:text-[9rem] md:leading-[0.9]">BARDHAMAN</h1>
          <p className="mt-4 font-serif text-2xl italic md:text-4xl">Discover the Royal Heritage of Bengal</p>
          <p className="mt-6 max-w-xl text-ink-foreground/85">
            Explore historic landmarks, magnificent temples, royal architecture, gardens and cultural attractions in Bardhaman, West Bengal.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="gold"><Link to="/heritage">Explore Heritage</Link></Button>
            <Button asChild size="lg" variant="outlineLight"><Link to="/hotel-booking">Plan Your Visit</Link></Button>
          </div>
        </div>
        <Credit photo={hero} className="absolute bottom-3 right-3" />
      </section>

      <section className="container-site py-24">
        <div className="text-center">
          <p className="eyebrow">Why visit</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Why visit Bardhaman?</h2>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="border-t border-gold pt-6">
              <f.icon className="h-7 w-7 text-primary" strokeWidth={1.4} />
              <h3 className="mt-4 text-2xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Featured</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Featured destinations</h2>
          </div>
          <Link to="/heritage" className="hidden text-sm font-semibold text-primary hover:underline md:block">View all →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((d) => <DestinationCard key={d.slug} d={d} tall />)}
        </div>
      </section>

      <section className="mt-28 bg-secondary py-24">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Photo photo={photos.shiva2} alt="108 Shiva Temple complex at Nawabhat" credit className="aspect-[4/3] rounded-lg" />
          <div>
            <p className="eyebrow">History & culture</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Where Royal History Meets Bengali Culture</h2>
            <p className="mt-6 leading-relaxed text-foreground/85">
              For centuries Bardhaman was the seat of the Burdwan Raj, one of the richest estates of Bengal. The Maharajas left behind palaces, ceremonial gates, gardens and lakes that still define the town.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/85">
              Alongside them stand nine-spired temples, a remarkable ring of 108 Shiva shrines and colonial-era churches — while the fertile plains of the Damodar have made the region a heartland of Bengali rural life and culture.
            </p>
            <Button asChild size="lg" className="mt-8"><Link to="/heritage">Discover the Heritage</Link></Button>
          </div>
        </div>
      </section>

      <section className="container-site pt-24">
        <p className="eyebrow">All destinations</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Discover more places</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => <DestinationCard key={d.slug} d={d} />)}
        </div>
      </section>
    </>
  );
}
