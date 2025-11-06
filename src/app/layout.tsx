import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anton QA Portfolio",
  description: "QA Automation projects & CV",
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=4", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico?v=4", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png?v=4",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <head>
        {/* Ясно и еднозначно казваме кой е фавиконът */}
        <link rel="icon" href="/favicon-32x32.png?v=4" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon.ico?v=4" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
      </head>
      <body className="min-h-screen w-full text-white bg-[#0b132b]">
        {children}
      </body>
    </html>
  );
}
