import { useTranslations } from "next-intl";
import { BoltIcon, CodeBracketIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function FeatureIcons() {
    const t = useTranslations("Hero");

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto font-inter">
            <div className="flex flex-col items-center text-center">
                <div className="size-16 md:size-20 bg-card rounded-lg flex items-center justify-center mb-4">
                    <CodeBracketIcon className="size-8 md:size-10 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2 font-poppins">{ t("features.modern_stack.title") }</h3>
                <p className="text-muted-foreground text-sm">
                    { t("features.modern_stack.description") }
                </p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="size-16 md:size-20 bg-card rounded-lg flex items-center justify-center mb-4">
                    <BoltIcon className="size-8 md:size-10 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2 font-poppins">{ t("features.fast_delivery.title") }</h3>
                <p className="text-muted-foreground text-sm">
                    { t("features.fast_delivery.description") }
                </p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="size-16 md:size-20 bg-card rounded-lg flex items-center justify-center mb-4">
                    <ShieldCheckIcon className="size-8 md:size-10 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2 font-poppins">{ t("features.enterprise_grade.title") }</h3>
                <p className="text-muted-foreground text-sm">{ t("features.enterprise_grade.description") }</p>
            </div>
        </div>
    );
}
