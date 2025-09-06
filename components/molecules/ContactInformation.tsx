import { useTranslations } from "next-intl";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactInformation() {
    const t = useTranslations("Contact");

    return (
        <div className="space-y-8 font-inter">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">{ t("info.heading") }</h3>
                <p className="text-muted-foreground mb-8">
                    { t("info.description") }
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <EnvelopeIcon className="size-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium text-foreground font-poppins">{ t("info.email") }</h4>
                        <p className="text-muted-foreground">info@appstractlabs.com</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <PhoneIcon className="size-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium text-foreground font-poppins">{ t("info.phone") }</h4>
                        <p className="text-muted-foreground">+503 7316-5362</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPinIcon className="size-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium text-foreground font-poppins">{ t("info.location") }</h4>
                        <p className="text-muted-foreground">{ t("info.country") }</p>
                    </div>
                </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                    <h4 className="font-medium text-lg text-foreground mb-2 font-poppins">{ t("guarantee.title") }</h4>
                    <p className="text-muted-foreground text-sm">
                        { t("guarantee.description") }
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
