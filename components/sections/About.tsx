import { useTranslations } from "next-intl";
import { getValues } from "@/content/data";
import { Card, CardContent } from "@/components/ui/card";
import Team from "@/components/molecules/Team";

export default function About() {
    const t = useTranslations();
    const values = getValues(t);

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 font-inter">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-poppins">
                        {t("About.heading")} <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">{t("About.heading_highlighted")}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {t("About.subheading")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {values.map((value, index) => (
                        <Card
                            key={index}
                            className="bg-card border-border text-center hover:border-primary/50 transition-all duration-300"
                        >
                            <CardContent className="p-6">
                                <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="size-8 text-primary" />
                                </div>
                                <h3 className="text-lg font-medium text-card-foreground mb-2 font-poppins">{value.title}</h3>
                                <p className="text-muted-foreground text-sm">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Team />
            </div>
        </section>
    )
}
