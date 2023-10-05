import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diversition Lottery",
  description: "Lottery checking system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
