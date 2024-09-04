import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // You can choose the weights you need
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
