import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://Ntonyxai.ai"),
  title: { default: "Ntonyxai | Connected Intelligence for Modern Teams", template: "%s | Ntonyxai" },
  description: "Ntonyxai creates AI systems, automation layers, and digital workflows that connect data, teams, and decisions.",
  openGraph: { title: "Ntonyxai", description: "Connected intelligence for modern teams.", images: ["/images/ntonyxai-logo-clean.png"] },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
