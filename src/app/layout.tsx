import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TubelightTravelNavbar } from "@/components/tubelight-travel-navbar";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chat/chat-bot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TravelAI - Your AI-Powered Travel Advisor",
  description: "Discover destinations, plan trips, and get personalized travel recommendations with our AI travel advisor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className} antialiased bg-white`}>
        <TubelightTravelNavbar />
        <main className="min-h-screen pt-4 sm:pt-20 pb-4">
          {children}
        </main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
