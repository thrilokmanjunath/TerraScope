import type { Metadata } from "next";
import LivingEarthShell from "@/components/living/LivingEarthShell";

export const metadata: Metadata = {
  title: "Living Earth · TerraScope",
  description:
    "The human layer of the TerraScope digital twin: 1,200 real cities glowing along the actual day/night terminator, with live weather and a clearly-labeled activity simulation.",
};

export default function LivingEarthPage() {
  return <LivingEarthShell />;
}
