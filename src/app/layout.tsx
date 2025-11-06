import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anton QA Portfolio",
  description: "QA Automation projects & CV",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body>{children}</body>
    </html>
  );
}
