import RiskManagement from "@/components/risk-management";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Management",
  description: "Capital Investment Anza",
};

export default function Serve() {
  return (
    <>
      <RiskManagement />
    </>
  );
}
