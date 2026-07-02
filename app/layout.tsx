import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nakulkumar.dev/"),
  title: "Nakul Kumar - Full Stack Developer | React Native | Node.js Developer Portfolio",
  description:
    "Developer Portfolio of Nakul Kumar, a Full Stack Developer and React Native Developer with 1.5+ years of experience building scalable web and mobile applications.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portfolio",
    "Nakul Kumar",
    "Nakul",
    "NakulKumar",
    "Nakul_Kumar",
    "Next.js",
    "ReactNative",
    "Android",
    "Node.js",
    "PostgreSQL",
  ],
  openGraph: {
    title: "Nakul Kumar - Full Stack Developer | React Native | Node.js",
    description:
      "Developer Portfolio of Nakul Kumar, a Full Stack Developer and React Native Developer with 1.5+ years of experience building scalable web and mobile applications.",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "https://nakulkumar.dev/",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Nakul Kumar",
              jobTitle: "Full Stack Developer",
              url: "https://github.com/NakulKumar409",
              sameAs: [
                "https://www.linkedin.com/in/nakul-kumar-727b65233/",
                "https://github.com/NakulKumar409",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
