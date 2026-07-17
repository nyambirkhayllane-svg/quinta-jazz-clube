import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-brand",
});

export const metadata: Metadata = {
  title: "Quinta Jazz Clube | Eventos Premium na Matola",
  description:
    "Quinta Jazz Clube é um espaço premium para casamentos, eventos corporativos, festas privadas e decoração exclusiva na Matola, Moçambique.",
  keywords: [
    "Quinta Jazz Clube",
    "eventos premium",
    "casamentos",
    "eventos corporativos",
    "decoração eventos",
  ],
  openGraph: {
    title: "Quinta Jazz Clube | Eventos Premium na Matola",
    description:
      "Um espaço exclusivo para casamentos, aniversários, eventos corporativos e celebrações especiais.",
    type: "website",
    locale: "pt_MZ",
    url: "https://quintajazzclube.pt",
  },
  alternates: {
    canonical: "https://quintajazzclube.pt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`h-full antialiased ${playfair.variable} ${manrope.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
