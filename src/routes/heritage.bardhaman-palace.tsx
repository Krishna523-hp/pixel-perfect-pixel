import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage, destinationHead } from "@/components/site/DestinationPage";
import { getDestination } from "@/data/destinations";

const d = getDestination("bardhaman-palace");

export const Route = createFileRoute("/heritage/bardhaman-palace")({
  head: () => destinationHead(d),
  component: Page,
});

function Page() {
  return <DestinationPage d={d} />;
}
