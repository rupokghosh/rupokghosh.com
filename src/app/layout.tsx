import type { Metadata } from "next";

import { Crimson_Text } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "rupokghosh",
  description: "This is the personal website of Rupok Ghosh",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "rupokghosh",
    description:
      "Personal website of Rupok Ghosh",
    url: "https://rupokghosh.com",
    images: [
      {
        url: "https://rupokghosh.com/image.png",
        width: 1200,
        height: 630,
        alt: "website preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rupokghosh",
    description:
      "Personal website of Rupok Ghosh",
    images: [{ url: "https://rupokghosh.com/image.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={crimsonText.className}>{children}</body>
    </html>
  );
}
