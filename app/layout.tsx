import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Direct Digital Democracy",
  description:
    "Build a citizen owned app to better instruct our elected political leaders.",
  openGraph: {
    title: "Direct Digital Democracy",
    description:
      "Democratic power in your hands. Support the development of a citizen-owned app for direct democracy.",
    url: "https://directdigitaldemocracy.org",
    siteName: "Direct Digital Democracy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
