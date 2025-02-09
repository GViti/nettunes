// src/app/layout.tsx
import type { Metadata } from "next";
import "../globals.css"; // File CSS globale
import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";

// Metadata per SEO
export const metadata: Metadata = {
  title: "Country Explorer",
  description: "Explore countries by continent, subregion, and more.",
};

export default function RootLayout({
  children, // I figli delle pagine verranno renderizzati qui
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Header />

        <main className="mt-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
