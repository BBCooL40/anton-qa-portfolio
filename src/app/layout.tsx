import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Anton QA Portfolio",
  description: "QA Automation projects & CV",
  icons: {
    icon: [
      { url: "/favicon.ico?v=7" },
      { url: "/favicon-32x32.png?v=7", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=7", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=7",
  },
};




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
