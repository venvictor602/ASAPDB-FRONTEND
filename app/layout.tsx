import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ASAP DBA - Database Management Services",
  description:
    "The smarter way to manage your databases 24/7. We ensure your databases stay fast, secure, and always available.",
  icons: {
    icon: "/Asap-favico.svg",
    shortcut: "/Asap-favico.svg",
    apple: "/Asap-favico.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
