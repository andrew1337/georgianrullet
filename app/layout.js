import "./globals.css";

export const metadata = {
  title: "Rulette",
  description: "Rulette with numbers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
