"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
    const t = useTranslations("CookiesConsent");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem("cookie-consent");
        if (!cookieConsent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

            <div className="relative w-full max-w-md rounded-lg border border-neutral-800 bg-neutral-900 p-6 shadow-2xl">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Cookie className="size-6 text-accent" />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{ t("title") }</h3>
                        <p className="text-sm text-neutral-300 mb-4">
                            { t("description") }
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button onClick={handleAccept} className="flex-1 bg-accent hover:bg-accent/90 text-white font-medium hover:cursor-pointer">
                                { t("accept") }
                            </Button>
                            <Button
                                onClick={handleReject}
                                variant="outline"
                                className="flex-1 border-neutral-700 text-neutral-300 hover:bg-neutral-800 bg-transparent hover:cursor-pointer"
                            >
                                { t("reject") }
                            </Button>
                        </div>

                        <p className="text-xs text-neutral-400 mt-3">
                            { t("footer") }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
