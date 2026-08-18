import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/PageBlocks";
export const metadata: Metadata = { title: "Projects", description: "Ntonyxai delivery examples for AI operators, orchestration, reporting, and product systems.", openGraph: { title: "Ntonyxai Projects" } };
export default function Page() {
  return <ProjectsPage />;
}
