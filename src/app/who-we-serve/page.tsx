import WhoWeServe from "@/components/who-we-serve";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Serve",
  description: "Capital Investment Anza",
};

export default function Serve() {
  return (
    <>
      <WhoWeServe />
    </>
  );
}
