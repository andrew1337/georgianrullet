import "./globals.css";
import React from "react";

export const metadata = {
  title: "Rulette",
  description: "Rulette with numbers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
