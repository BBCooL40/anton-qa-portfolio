import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anton QA Portfolio",
  description: "QA Automation projects & CV",
  icons: {
    icon: [{ url: "/favicon.ico?v=2", type: "image/x-icon" }],
    apple: "/apple-touch-icon.png?v=2",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body className="min-h-screen w-full text-white bg-[#0b132b]">
        {children}
      </body>
    </html>
  );
}
