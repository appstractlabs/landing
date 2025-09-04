import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { GlobeAltIcon } from "@heroicons/react/24/outline";import { Link } from "@/i18n/navigation";
;

export default function LanguageSwitcher() {
    const locale = useLocale();

    return (
        <div className="flex items-center space-x-1">
            <GlobeAltIcon className="size-5 text-muted-foreground" />
            <Button
                variant="ghost"
                size="sm"
                className="text-sm font-medium px-2 py-1 h-auto"
            >
                <Link href={"/"} locale={locale === "en" ? "es" : "en"}>
                    {locale === "en" ? "ES" : "EN"}
                </Link>
            </Button>
        </div>
    )
}
