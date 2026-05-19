import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://griffinleblanc.ca"),
  title: {
    default: "Griffin LeBlanc | Full-stack Product Engineer",
    template: "%s | Griffin LeBlanc",
  },
  description:
    "Full-stack product engineer building production web applications, regulatory logic, internal tooling, QA automation, and rollout workflows for operationally complex teams.",
  openGraph: {
    title: "Griffin LeBlanc | Full-stack Product Engineer",
    description:
      "Product-minded full-stack engineering across fintech, regulatory logic, internal tools, QA automation, and product delivery.",
    url: "https://griffinleblanc.ca",
    siteName: "Griffin LeBlanc",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
