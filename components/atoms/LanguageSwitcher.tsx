import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { GlobeAltIcon } from "@heroicons/react/24/outline";import { Link } from "@/i18n/navigation";
;

export default function LanguageSwitcher() {
    const locale = useLocale();

    return (
        <div className="flex items-center space-x-1">
            <GlobeAltIcon className="size-5 text-muted-foreground md:hidden lg:block" />
            <Link href={"/"} aria-label={`Switch to ${locale === "en" ? "Spanish" : "English"}`} locale={locale === "en" ? "es" : "en"} className="bg-transparent hover:bg-primary/80 text-sm font-medium px-4 py-1 h-auto rounded-lg">
                    {locale === "en" ? "ES" : "EN"}
            </Link>
        </div>
    );
}
