import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anton QA Portfolio",
  description: "QA Automation projects & CV",
  icons: {
    icon: [
      { url: "/icon.png?v=11", type: "image/png" },
      { url: "/favicon-32x32.png?v=11", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico?v=11", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png?v=11",
    other: {
      rel: "android-chrome",
      url: "/android-chrome-512x512.png?v=11",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <head>
        {/* За всеки случай добавяме ръчно, за да влезе със сигурност */}
        <link rel="icon" href="/icon.png?v=11" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
