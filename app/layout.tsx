import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoiceFlow — Predict Freelancer Cash Flow",
  description: "Analyze invoice payment patterns to predict cash flow gaps and optimize your project timing."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="41207cc0-7d27-476c-ba3a-04febf767e3b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
