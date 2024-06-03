import OurService from "@/components/our-services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Capital Investment Anza",
};

export default function Services() {
  return (
    <>
      <OurService />
    </>
  );
}
