import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/themeProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Profile - @taiyaki256",
  description: "taiyaki's profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <link rel="icon" type="image/png" href="favicon.ico" />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased p-10 w-full h-full p-auto",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
