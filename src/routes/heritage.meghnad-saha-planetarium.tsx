import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage, destinationHead } from "@/components/site/DestinationPage";
import { getDestination } from "@/data/destinations";

const d = getDestination("meghnad-saha-planetarium");

export const Route = createFileRoute("/heritage/meghnad-saha-planetarium")({
  head: () => destinationHead(d),
  component: Page,
});

function Page() {
  return <DestinationPage d={d} />;
}
