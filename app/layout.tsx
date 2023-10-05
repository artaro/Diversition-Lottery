import "./globals.css";
import type { Metadata } from "next";
import { ResultContextProvider } from "@/context/store";

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
      <body>
        <ResultContextProvider>{children}</ResultContextProvider>
      </body>
    </html>
  );
}
