import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/site/Layout";
import { validateBooking, type BookingErrors, type BookingInput } from "@/lib/booking";

export const Route = createFileRoute("/hotel-booking")({
  head: () => ({
    meta: [
      { title: "Hotel Booking — Stay in Bardhaman" },
      { name: "description", content: "Plan your visit and send a hotel booking request for your stay in Bardhaman." },
      { property: "og:title", content: "Hotel Booking — Stay in Bardhaman" },
      { property: "og:description", content: "Plan your visit and find a comfortable place to stay." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Booking,
});

const field = "mt-2 w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20";
const label = "text-sm font-medium";

function F({ id, text, children, error }: { id: string; text: string; children: React.ReactNode; error?: string }) {
  return (
    <div>
      <label htmlFor={id} className={label}>{text}</label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Booking() {
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<BookingErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const today = new Date().toISOString().slice(0, 10);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const data = Object.fromEntries(new FormData(form)) as BookingInput;
    const errs = validateBooking(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function again() {
    formRef.current?.reset();
    setErrors({});
    setDone(false);
  }

  return (
    <>
      <PageHeading eyebrow="Hotel Booking" title="Stay in Bardhaman" subtitle="Plan your visit and find a comfortable place to stay." />
      <div className="container-site max-w-3xl">
        {done ? (
          <div role="status" className="animate-pop-in rounded-2xl border-2 border-success bg-success-soft px-8 py-14 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-success">
              <svg viewBox="0 0 24 24" className="h-12 w-12 text-success-foreground" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path className="animate-draw" d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </div>
            <h2 className="mt-6 font-sans text-3xl font-bold tracking-wide text-success md:text-4xl">BOOKING CONFIRMED</h2>
            <p className="mt-4 text-lg">Your booking request has been successfully submitted.</p>
            <p className="mt-2 text-muted-foreground">Thank you for choosing Explore Bardhaman. We look forward to welcoming you.</p>
            <Button size="lg" variant="success" className="mt-8" onClick={again}>Make Another Booking</Button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={onSubmit} onReset={() => setErrors({})} noValidate={false} className="rounded-xl border bg-card p-6 md:p-10">
            <fieldset className="grid gap-6 md:grid-cols-2">
              <legend className="mb-2 font-serif text-2xl">Guest details</legend>
              <F id="name" text="Full Name *"><input id="name" name="name" required minLength={2} className={field} autoComplete="name" /></F>
              <F id="email" text="Email Address *"><input id="email" name="email" type="email" required className={field} autoComplete="email" /></F>
              <F id="phone" text="Phone Number *"><input id="phone" name="phone" type="tel" required pattern="[0-9+\s\-]{10,15}" title="10–15 digits" className={field} autoComplete="tel" /></F>
              <F id="address" text="Address *"><input id="address" name="address" required className={field} autoComplete="street-address" /></F>
            </fieldset>
            <fieldset className="mt-10 grid gap-6 md:grid-cols-2">
              <legend className="mb-2 font-serif text-2xl">Your stay</legend>
              <F id="checkin" text="Check-in Date *"><input id="checkin" name="checkin" type="date" min={today} required className={field} /></F>
              <F id="checkout" text="Check-out Date *" error={errors.checkout}><input id="checkout" name="checkout" type="date" min={today} required className={field} /></F>
              <F id="adults" text="Number of Adults *"><input id="adults" name="adults" type="number" min={1} max={20} defaultValue={1} required className={field} /></F>
              <F id="children" text="Number of Children *"><input id="children" name="children" type="number" min={0} max={20} defaultValue={0} required className={field} /></F>
              <F id="guests" text="Number of Guests *" error={errors.guests}><input id="guests" name="guests" type="number" min={1} max={40} defaultValue={1} required className={field} /></F>
              <F id="rooms" text="Number of Rooms *" error={errors.rooms}><input id="rooms" name="rooms" type="number" min={1} max={10} defaultValue={1} required className={field} /></F>
              <div className="md:col-span-2">
                <F id="roomType" text="Room Type *">
                  <select id="roomType" name="roomType" required defaultValue="" className={field}>
                    <option value="" disabled>Select a room type</option>
                    <option>Single Room</option>
                    <option>Double Room</option>
                    <option>Deluxe Room</option>
                    <option>Family Room</option>
                  </select>
                </F>
              </div>
              <div className="md:col-span-2">
                <F id="requests" text="Special Requests"><textarea id="requests" name="requests" rows={4} className={field} /></F>
              </div>
            </fieldset>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button type="submit" size="lg">Submit Booking</Button>
              <Button type="reset" size="lg" variant="outline">Reset</Button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
