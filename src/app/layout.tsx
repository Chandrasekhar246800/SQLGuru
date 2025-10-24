import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SQLGuru - Revolutionary Database Learning Platform",
  description: "AI-powered interactive SQL education platform revolutionizing database learning in India. Master SQL with real-time feedback, personalized learning paths, and hands-on practice.",
  keywords: ["SQL learning", "database education", "interactive coding", "AI-powered learning", "India education technology", "SQLGuru"],
  authors: [{ name: "SQLGuru Team" }],
  creator: "SQLGuru",
  publisher: "SQLGuru",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sql-guru.vercel.app/",
    siteName: "SQLGuru",
    title: "SQLGuru - Revolutionary Database Learning Platform",
    description: "AI-powered interactive SQL education platform revolutionizing database learning in India.",
    images: [
      {
        url: "/og-image.jpg", // You can add this image later
        width: 1200,
        height: 630,
        alt: "SQLGuru - Database Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SQLGuru - Revolutionary Database Learning Platform",
    description: "AI-powered interactive SQL education platform revolutionizing database learning in India.",
    creator: "@SQLGuruIndia",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
