// src/app/layout.tsx
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/organisms/header/Header.tsx";
import Footer from "./components/organisms/footer/Footer.tsx";
import CardList from "./components/organisms/cardList/CardList";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header/>
        <main className="mt-[95px]">
          <div className="flex flex-col gap-5">
            <CardList title="Models"/>  
            <CardList title="Athletes"/>  
            <CardList title="Singer & musicians"/>  
            <CardList title="Actor"/>  
            <CardList title="Photographer"/>
            <CardList title="Video maker"/>
            <CardList title="Travel blogger"/>
          </div>
        </main> 
        <Footer/>
      </body>
    </html>
  );
}