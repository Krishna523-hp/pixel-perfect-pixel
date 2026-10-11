import { describe, expect, it } from "vitest";
import { validateBooking } from "@/lib/booking";

const ok = { checkin: "2026-11-01", checkout: "2026-11-03", adults: "2", children: "1", guests: "3", rooms: "1" };

describe("booking validation", () => {
  it("accepts a valid booking", () => expect(validateBooking(ok)).toEqual({}));
  it("rejects check-out on the same day as check-in", () =>
    expect(validateBooking({ ...ok, checkout: "2026-11-01" }).checkout).toBeDefined());
  it("rejects check-out before check-in", () =>
    expect(validateBooking({ ...ok, checkout: "2026-10-30" }).checkout).toBeDefined());
});
