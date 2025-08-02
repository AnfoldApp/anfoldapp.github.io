import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your AI companion for healthier living | Anfold",
  description:
    "Anfold is a personal guide to wellness, designed to embrace the nuances of your lifestyle.",
  icons: {
    icon: [
      {
        url: "/assets/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/assets/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/assets/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/assets/favicon/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/assets/favicon/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/assets/favicon/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Anfold",
  },
  other: {
    "msapplication-TileColor": "#6BCB77",
    "theme-color": "#6BCB77",
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
        className={`${afacad.className} bg-primary-bg text-primary-text min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
