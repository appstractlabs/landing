"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { getFooterLinks } from "@/content/data";
import PrivacyPolicy from "../molecules/PrivacyPolicy";
import TermsService from "../molecules/TermsService";
import Cookies from "../molecules/CookiesPolicy";


export default function Footer() {
    const t = useTranslations();
    const footerLinks = getFooterLinks(t);
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    const is_custom_web_applications = pathname.split("/").includes("custom-web-applications");
    const is_mvp_development = pathname.split("/").includes("mvp-development");
    const is_business_websites_platforms = pathname.split("/").includes("business-websites-platforms");

    return (
        <footer className="bg-card border-t border-border font-inter">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-card-foreground mb-4 font-poppins">
                                    {t("Footer.brand.heading")} <span className={` ${ is_custom_web_applications ? "text-blue-400" : is_mvp_development ? "text-green-400" : is_business_websites_platforms ? "text-orange-400" : "text-primary" } `}>{ t("Footer.brand.heading_highlighted") }</span>
                                </h3>
                                <p className="text-muted-foreground max-w-md">
                                    { t("Footer.brand.tagline") }
                                </p>
                            </div>

                            <div className="flex space-x-4">
                                <a href={"https://github.com/appstractlabs"} target="_blank" className="hover:cursor-pointer bg-transparent hover:bg-transparent p-0">
                                    <Image src="/github_dark.svg" alt="GitHub" className="size-7" width={1024} height={1024}/>
                                </a>
                                <a href={"mailto:info@appstractlabs.com"} className="hover:cursor-pointer bg-transparent hover:bg-transparent p-0">
                                    <Mail className="size-7" />
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category}>
                                    <h4 className="text-sm font-semibold text-card-foreground mb-4 capitalize font-poppins">
                                        { category === "company" ? t("Footer.category.company") : t("Footer.category.services") }
                                    </h4>
                                    <ul className="space-y-2">
                                        {links.map((link) => (
                                            <li key={link.name}>
                                                { category === "company" ? (

                                                    <a
                                                        href={link.href}
                                                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                                                    >
                                                        {link.name}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        href={{ pathname: "/services/[slug]", params: { slug: link.href} }}
                                                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ) }
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="py-6 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-muted-foreground mb-4 md:mb-0 text-center md:text-left">
                        &copy; {currentYear} { t("Footer.bottom.rights") }
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6">
                            <PrivacyPolicy />
                            <TermsService />
                            <Cookies />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
