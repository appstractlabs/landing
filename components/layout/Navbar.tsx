"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { getNavItems } from "@/content/data";
import LanguageSwitcher from "../atoms/LanguageSwitcher";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations();
    const navItems = getNavItems(t);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href={"/"} className="flex items-center space-x-2">
                        <div className="hidden size-8 rounded-lg sm:flex items-center justify-center">
                            <Image src="https://res.cloudinary.com/dmy3s8j5w/image/upload/v1757141556/appstract-icon-white-transparent-48x48_qkchcv.svg" alt="Appstract Labs" width={48} height={48}/>
                        </div>
                                
                        <h3 className="text-3xl font-bold text-foreground whitespace-nowrap">{ t("Navbar.heading") } <span className="text-primary">{ t("Navbar.heading_highlighted") }</span></h3>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <div className="flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium whitespace-nowrap"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <LanguageSwitcher />
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover:cursor-pointer">
                            <a href="#contact">{ t("Navbar.cta") }</a>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-card-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex items-center justify-between pt-2 border-t border-border">
                                <LanguageSwitcher />
                                <Link href={{ pathname: "/", hash: "contact" }} className="bg-primary hover:bg-primary/90 text-primary-foreground hover:cursor-pointer">{ t("Navbar.cta") }</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
