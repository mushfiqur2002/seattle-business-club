import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import NavBar from "@/ui/components/NavBar"
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seattle Business Club",
  description: "Seattle Business Club is a media and community platform that helps Seattle businesses get discovered, connected, and grow.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
