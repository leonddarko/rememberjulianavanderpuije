import { geistSans } from "./ui/fonts";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Remembering Juliana Vanderpuije",
  description: "Remembering Juliana Vanderpuije - Memorial website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-zinc-50">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
        <Script src="https://kit.fontawesome.com/dcd356c426.js" />
      </body>
    </html>
  );
}
