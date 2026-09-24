import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Fiskerikandidat Gunnar Davidsson",
  description:
    "Strategisk rådgivning innen fiskeri, havbruk og kystforvaltning ved Fiskerikandidat Gunnar Davidsson.",
  icons: {
    icon: `${basePath}/images/logo-gunnar-symbol.webp`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${dmSans.variable} ${sourceSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
