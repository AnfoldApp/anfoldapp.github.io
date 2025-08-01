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
    icon: "/assets/favicon/favicon.ico",
    apple: "/assets/favicon/apple-touch-icon.png",
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
