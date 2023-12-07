import "./globals.css";
import React from "react";

export const metadata = {
  title: "Rulette",
  description: "Rulette with numbers",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body suppressHydrationWarning>{children}</body>
  </html>
);

export default RootLayout;
