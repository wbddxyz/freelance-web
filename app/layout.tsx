import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://colinwebdesign.com"),

  title: "Web Design & Development in Livingston | Colin Anderson",

  description:
    "Freelance web designer and developer based in Livingston, West Lothian. I build modern business websites and custom web applications across Scotland.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Colin Anderson | Web Design & Development in Livingston",
    description:
      "Modern business websites and web applications, built by an independent freelance developer in Livingston, West Lothian.",
    url: "https://colinwebdesign.com",
    siteName: "Colin Anderson Web Design",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Colin Anderson | Web Design & Development",
    description:
      "Freelance web designer and developer based in Livingston, West Lothian.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
