import { geistSans } from "./ui/fonts";
import "./globals.css";
import Script from "next/script";
import NavigationBar from "./ui/navbar";
import Footer from "./ui/footer";

export const metadata = {
  title: "Remembering Juliana Vanderpuije",
  description: "Remembering Juliana Vanderpuije - Memorial website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-zinc-100">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <NavigationBar />
        {children}
        <Footer />
        <Script src="https://kit.fontawesome.com/dcd356c426.js" />
      </body>
    </html>
  );
}
