export function validateBooking(d: Record<string, string>) {
  const e: Record<string, string> = {};
  if (d.checkin && d.checkout && d.checkout <= d.checkin) e.checkout = "Check-out date must be later than the check-in date.";
  const adults = Number(d.adults), children = Number(d.children), guests = Number(d.guests), rooms = Number(d.rooms);
  if (guests !== adults + children) e.guests = "Number of guests should equal adults plus children.";
  if (rooms > guests) e.rooms = "Rooms cannot exceed the number of guests.";
  return e;
}
