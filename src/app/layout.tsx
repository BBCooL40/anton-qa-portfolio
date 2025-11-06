import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Anton QA Portfolio",
  description: "QA Automation • Playwright • API • CI/CD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
