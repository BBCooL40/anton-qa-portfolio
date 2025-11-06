import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anton QA Portfolio",
  description: "QA Automation projects & CV",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <head>
        {/* Фавикон + Apple touch, сервирани от /public */}
        <link rel="icon" href="/icon.png?v=3" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
      </head>
      <body>{children}</body>
    </html>
  );
}
