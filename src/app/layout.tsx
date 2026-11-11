import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://srikaleeshwariaquafarm.com"),
  title: "Sri Kaleeshwari Aqua Farm | Premium Aquarium Livestock Breeding Studio",
  description:
    "Master-Bred Exotic Aquatic Lines with Superior Genetics. Specialized in high-kok Flowerhorn Fish, vibrant Neocaridina Shrimps, exquisite Angelfish strains, and Platinum Crystal White Mollies.",
  keywords: [
    "Flowerhorn Fish India",
    "Kamfa Flowerhorn",
    "Super Red Dragon Flowerhorn",
    "Neocaridina Shrimps India",
    "Blue Dream Shrimp",
    "Bloody Mary Shrimp",
    "Angelfish Breeders Chennai",
    "Platinum Crystal Molly",
    "Ornamental Fish Breeding Studio",
    "Sri Kaleeshwari Aqua Farm",
  ],
  authors: [{ name: "Sri Kaleeshwari Aqua Farm" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Sri Kaleeshwari Aqua Farm | Premium Aquarium Livestock Breeding Studio",
    description:
      "Master-Bred Exotic Aquatic Lines with Superior Genetics. Specialized in high-kok Flowerhorn Fish, vibrant Neocaridina Shrimps, exquisite Angelfish strains, and show-grade Platinum Crystal White Mollies.",
    type: "website",
    locale: "en_IN",
    siteName: "Sri Kaleeshwari Aqua Farm",
    images: [
      {
        url: "/logo.png",
        width: 240,
        height: 240,
        alt: "Sri Kaleeshwari Aqua Farm Logo - Quality Aquatic Life",
      },
    ],
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
