import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import CustomHeader from "@/components/default/CustomHeader";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "애프터 페스티벌",
  description: "음악 페스티벌들의 후기들을 모아봤어요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansKr.className} bg-background-light dark:bg-background-dark`}
      >
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col">
          <CustomHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
