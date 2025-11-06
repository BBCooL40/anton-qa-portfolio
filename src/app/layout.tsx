import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Anton QA Portfolio",
  description: "QA Automation projects & CV",
  icons: {
    icon: [
      { url: "/icon.png?v=1" },               // ИЗПОЛЗВА app/icon.png
      { url: "/android-chrome-512x512.png?v=1", sizes: "512x512", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png?v=1",
  },
};





export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
