import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Toaster } from "sonner";

import "./globals.css";


export async function generateMetadata({ params }: { params: Promise<{locale: string}> }): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const rawKeywords = t.raw("default.keywords");

  return {
    title: t("default.title"),
    description: t("default.description"),
    keywords: rawKeywords
  };
}

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "700", "800", "900"], variable: "--font-poppins" });

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function RootLayout({ children, params }: Props) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth hide-scrollbar">
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dmy3s8j5w/image/upload/v1757141556/appstract-icon-white-transparent-256x256_xzhe6q.png" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="https://res.cloudinary.com/dmy3s8j5w/image/upload/v1757141550/appstract-icon-black-transparent-256x256_roqrbu.png" media="(prefers-color-scheme: light)" />
      </head>
      <body className={`antialiased ${inter.variable} ${poppins.variable} scroll-smooth`}>
        <NextIntlClientProvider>
          {children}
          <Toaster position="top-right"/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
