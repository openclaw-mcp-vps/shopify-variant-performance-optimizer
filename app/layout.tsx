import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Variant Performance Optimizer",
  description: "Find your worst-performing product variants. Analyze conversion rate, profit margin, and inventory turnover to decide what to cut or promote."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="addc3565-8547-4409-a745-19c5dd2f30cd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
