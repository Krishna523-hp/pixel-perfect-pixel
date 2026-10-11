export type BookingInput = { checkin?: string; checkout?: string; adults?: string; children?: string; guests?: string; rooms?: string };
export type BookingErrors = { checkout?: string; guests?: string; rooms?: string };

export function validateBooking(d: BookingInput): BookingErrors {
  const e: BookingErrors = {};
  if (d.checkin && d.checkout && d.checkout <= d.checkin) e.checkout = "Check-out date must be later than the check-in date.";
  const adults = Number(d.adults), children = Number(d.children), guests = Number(d.guests), rooms = Number(d.rooms);
  if (guests !== adults + children) e.guests = "Number of guests should equal adults plus children.";
  if (rooms > guests) e.rooms = "Rooms cannot exceed the number of guests.";
  return e;
}
