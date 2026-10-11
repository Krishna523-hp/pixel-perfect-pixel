import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage, destinationHead } from "@/components/site/DestinationPage";
import { getDestination } from "@/data/destinations";

const d = getDestination("krishnasayar-park");

export const Route = createFileRoute("/heritage/krishnasayar-park")({
  head: () => destinationHead(d),
  component: Page,
});

function Page() {
  return <DestinationPage d={d} />;
}
