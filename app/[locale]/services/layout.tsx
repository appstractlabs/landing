"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/layout/Footer";

export default function BusinessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTranslations();
  const pathName = usePathname();

  const mvp_development = pathName.split("/").includes("mvp-development");
  const business_websites_platforms = pathName.split("/").includes("business-websites-platforms");
  const custom_web_applications = pathName.split("/").includes("custom-web-applications");

  return (
    <div className="min-h-screen bg-background font-inter">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="hidden size-8 rounded-lg sm:flex items-center justify-center">
                        <Image src="https://res.cloudinary.com/dmy3s8j5w/image/upload/v1757141556/appstract-icon-white-transparent-48x48_qkchcv.svg" alt="Appstract Labs" width={48} height={48}/>
                    </div>

                    <h3 className="text-3xl font-bold text-foreground whitespace-nowrap font-poppins">{ t("Navbar.heading") } <span className={`text-${ mvp_development ? "green" : business_websites_platforms ? "orange" : custom_web_applications ? "blue" : "" }-400`}>{ t("Navbar.heading_highlighted") }</span></h3>
                </Link>
                <Link href={{ pathname: "/", hash: "services" }}>
                    <Button variant="outline" size="sm" className={`hover:cursor-pointer hover:bg-${ mvp_development ? "green" : business_websites_platforms ? "orange" : custom_web_applications ? "blue" : "" }-400`}>
                        <ArrowLeftIcon className="size-4 mr-2" />
                        { t("Service_CustomWeb.header.back") }
                    </Button>
                </Link>
            </div>
        </div>
      </header>
        {children}
      <Footer />
    </div>
  );
}
