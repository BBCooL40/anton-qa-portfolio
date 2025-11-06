export const metadata = {
  title: "Anton QA Portfolio",
  description: "QA Automation projects & CV",
  icons: {
    icon: [
      { url: "/icon.png?v=12", type: "image/png" },
      { url: "/favicon-32x32.png?v=12", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico?v=12", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png?v=12",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <head>
        <link rel="icon" href="/icon.png?v=12" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
