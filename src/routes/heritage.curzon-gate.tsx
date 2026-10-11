import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage, destinationHead } from "@/components/site/DestinationPage";
import { getDestination } from "@/data/destinations";

const d = getDestination("curzon-gate");

export const Route = createFileRoute("/heritage/curzon-gate")({
  head: () => destinationHead(d),
  component: Page,
});

function Page() {
  return <DestinationPage d={d} />;
}
