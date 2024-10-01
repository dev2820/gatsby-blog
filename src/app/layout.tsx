import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cx } from "@/utils/cx";

import "terra-design-system/react/style";
import { GlobalNavigationBar } from "@/components/GlobalNavigationBar";
import { ComponentProps } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";

const AUTHOR = process.env.author ?? "";
const NICKNAME = process.env.nickname ?? AUTHOR;

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const monospaceNeon = localFont({
  src: "../assets/fonts/MonaspaceNeonVarVF.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-monospace-neon",
});

export const metadata: Metadata = {
  title: `${NICKNAME}'s Devlog`,
  description: `${NICKNAME}'s tech blog`,
  alternates: {
    types: {
      "application/rss+xml": process.env.siteURL + "/rss.xml",
      "application/atom+xml": process.env.siteURL + "/atom.xml",
      "application/json": process.env.siteURL + "/feed.json",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={cx(pretendard.variable, monospaceNeon.variable)}>
      <body className={cx(pretendard.className, "flex flex-col")}>
        <Header className="self-center w-full max-w-screen-md px-4"></Header>
        <main className="self-center w-full max-w-screen-md p-4 text-gray-800">
          {children}
        </main>
        <footer className="self-center w-full max-w-screen-md px-4">
          {/**
           * TODO: Contact me 추가
           */}
          <p>
            &copy; 2024-{new Date().getFullYear()} {AUTHOR}. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}

type HeaderProps = ComponentProps<"header">;
function Header(props: HeaderProps) {
  const { className, ...rest } = props;
  return (
    <header
      className={cx("flex flex-row justify-center py-2", className)}
      {...rest}
    >
      <Link href="/">
        <BrandLogo height={48} />
      </Link>
      <div className="flex-1" />
      <GlobalNavigationBar />
    </header>
  );
}
