import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALAB Football Club | Los Baños, Laguna",
  description: "Alab FC — Est. 2015. Developing excellence in youth football and character. Los Baños, Laguna.",
  icons: {
    icon: [
      {
        url: "/alab.png",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#050810",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/alab.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-[#050810]`}
      >
        {children}
      </body>
    </html>
  );
}
