export const metadata = {
  title: "Anton QA Portfolio",
  description: "QA Automation projects & CV",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <head>
        <link rel="icon" href="/icon.png?v=99" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
