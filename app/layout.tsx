import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trinnov — Le son dans toute sa dimension",
  description: "Découvrez les univers et les technologies audio immersives Trinnov.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
