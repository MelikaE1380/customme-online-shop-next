import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



const vazirFont = localFont({
  src: [
    {
      path: "./fonts/vazir/Vazir-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/vazir/Vazir-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/vazir/Vazir-Medium.woff2",
      weight: "500",
      style: "normal",
    }
  ],
  variable: "--font-vazir",
});

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
    <html lang="en" dir="rtl">
      
      <body
        className={` ${vazirFont.variable}   antialiased`}
      >
        {/* <p className="bg-[#BBCBCB]">this is from main layout</p> */}
        {children}

      
      </body>
    </html>
  );
}
