import AboutUs from "@/components/contact-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Capital Investment Anza",
};

export default function About() {
  return (
    <>
      <AboutUs />
    </>
  );
}
