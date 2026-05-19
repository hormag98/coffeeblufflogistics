import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coffee Bluff Logistics LLC | Savannah, Georgia",
  description:
    "Savannah, Georgia's premier logistics partner. Port drayage, over-the-road freight, expedited shipping, and more. 24/7 dispatch. Port of Savannah partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased bg-site-black text-site-white">
        {children}
      </body>
    </html>
  );
}
