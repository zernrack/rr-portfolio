import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Lora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Renz Rackhold | Software Engineer",
    template: "%s | Renz Rackhold",
  },
  description:
    "Renz Rackhold is a software engineer building scalable web applications, automation workflows, and performance-focused digital products.",
  keywords: [
    "Renz Rackhold",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Web Development",
    "Philippines",
  ],
  authors: [{ name: "Renz Rackhold" }],
  creator: "Renz Rackhold",
  publisher: "Renz Rackhold",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Renz Rackhold | Software Engineer",
    description:
      "Portfolio of Renz Rackhold featuring software engineering work, scalable solutions, and measurable delivery impact.",
    siteName: "Renz Rackhold Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renz Rackhold | Software Engineer",
    description:
      "Software engineer portfolio focused on full-stack development, automation, and performance.",
  },
  icons: {
    icon: "/favicon_rar.png",
    shortcut: "/favicon_rar.png",
    apple: "/favicon_rar.png",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${dmSans.variable} ${lora.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
