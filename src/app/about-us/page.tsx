import AboutUs from "@/components/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Capital Investment Anza",
};

export default function About() {
  return (
    <>
      <AboutUs />
    </>
  );
}
