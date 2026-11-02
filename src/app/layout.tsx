import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Kaleeshwari Aqua Farm | Leading Sustainable Aquaculture & Fish Farming",
  description:
    "Sri Kaleeshwari Aqua Farm - Pioneer in sustainable aquaculture, freshwater fish farming, Vannamei shrimp culture, hatchery services, and biofloc consultancy in India.",
  keywords: [
    "aquaculture India",
    "fish farming Tamil Nadu",
    "shrimp farming hatchery",
    "Sri Kaleeshwari Aqua Farm",
    "sustainable fish feed",
    "biofloc pond management",
    "fish seed supplier"
  ],
  authors: [{ name: "Sri Kaleeshwari Aqua Farm" }],
  openGraph: {
    title: "Sri Kaleeshwari Aqua Farm | Sustainable Aquaculture for a Better Tomorrow",
    description:
      "Modern infrastructure, biosecure hatcheries, and eco-friendly aquaculture solutions empowering Indian fish and shrimp farmers.",
    type: "website",
    locale: "en_IN",
    siteName: "Sri Kaleeshwari Aqua Farm",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#04131d] text-slate-100 antialiased selection:bg-teal-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
