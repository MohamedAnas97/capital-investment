import Homepage from "@/components/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Capital Investment Anza",
};

export default function Home() {
  return (
    <>
      <Homepage />
    </>
  );
}
