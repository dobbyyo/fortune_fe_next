import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import MainLayout from "./layouts/MainLayout";
import ClientProviders from "./provider/ClientProviders";

// Noto Sans KR 설정
const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "700"], // 굵기 선택
  subsets: ["latin"], // 한국어와 영어 포함
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
    <html lang="en">
      <body className={`${notoSansKR.variable} antialiased`}>
        <ClientProviders>
          <MainLayout>{children}</MainLayout>
        </ClientProviders>
      </body>
    </html>
  );
}
