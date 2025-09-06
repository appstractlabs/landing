import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { getServices } from "@/content/data";

export default function Services() {
    const t = useTranslations();
    const services = getServices(t);

    return (
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 font-inter">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-poppins">
                        {t("Services.heading")} <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">{t("Services.heading_highlighted")}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("Services.subheading")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-test-id="services">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
                        >
                            <CardHeader>
                                <div
                                    className={"size-12 rounded-lg bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"}
                                >
                                    <service.icon className={`size-8 ${service.color}`} />
                                </div>
                                <CardTitle className="text-xl md:text-xl text-card-foreground font-poppins font-medium">{service.title}</CardTitle>
                                <CardDescription className="text-muted-foreground md:text-md/snug">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm md:text-md text-muted-foreground">
                                            <div className="size-1.5 bg-primary rounded-full mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full border-border hover:bg-background group bg-transparent"
                                >
                                    <Link href={{ pathname: "/services/[slug]", params: { slug: service.slug } }}>
                                        {t("Services.cta")}
                                        <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
