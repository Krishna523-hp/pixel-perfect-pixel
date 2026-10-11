import type { Photo as PhotoT } from "@/data/photos";
import { cn } from "@/lib/utils";

type Props = {
  photo: PhotoT | null | undefined;
  alt: string;
  className?: string;
  imgClassName?: string;
  credit?: boolean;
  eager?: boolean;
};

export function Photo({ photo, alt, className, imgClassName, credit = false, eager = false }: Props) {
  if (!photo) {
    return (
      <div
        className={cn("flex items-center justify-center bg-muted text-center text-muted-foreground", className)}
        role="img"
        aria-label={`${alt} — photograph not available`}
      >
        <div className="px-6">
          <p className="font-serif text-xl text-foreground/70">{alt}</p>
          <p className="mt-1 text-xs uppercase tracking-widest">Authentic photograph coming soon</p>
        </div>
      </div>
    );
  }
  return (
    <figure className={cn("relative overflow-hidden bg-muted", className)}>
      <img
        src={photo.src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
      />
      {credit && <Credit photo={photo} className="absolute bottom-2 right-2" />}
    </figure>
  );
}

export function Credit({ photo, className }: { photo: PhotoT; className?: string }) {
  return (
    <a
      href={photo.page}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "rounded bg-ink/60 px-2 py-0.5 text-[10px] text-ink-foreground/90 backdrop-blur-sm transition hover:bg-ink/80",
        className,
      )}
    >
      Photo: {photo.author} · {photo.license} · Wikimedia Commons
    </a>
  );
}
