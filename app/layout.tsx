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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Colin Anderson Web Design",
    url: "https://colinwebdesign.com",
    description:
      "Freelance web design and development services based in Livingston, West Lothian, serving businesses across Scotland.",
    areaServed: [
      { "@type": "City", name: "Livingston" },
      { "@type": "AdministrativeArea", name: "West Lothian" },
      { "@type": "Country", name: "Scotland" },
    ],
    serviceType: [
      "Web Design",
      "Website Development",
      "Web Application Development",
      "Website Redesign",
      "Website Support",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
