import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { SquaresPlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeatureGroups, getBenefits, technologies, getWorkTypes } from "@/content/data";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const rawKeywords = t.raw("customWeb.keywords");

  return {
    title: t("customWeb.title"),
    description: t("customWeb.description"),
    keywords: rawKeywords
  };
}

export default function CustomWebApplicationsPage() {
    const t = useTranslations();
    const features = getFeatureGroups(t);
    const benefits = getBenefits(t);
    const workTypes = getWorkTypes(t);

    return (
        <>
            <section className="py-20 px-4 sm:px-6 lg:px-8 font-inter">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="size-20 bg-background rounded-2xl flex items-center justify-center mx-auto mb-8 border border-border">
                            <SquaresPlusIcon className="size-10 text-blue-400" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
                        { t("Service_CustomWeb.hero.heading") } <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">{ t("Service_CustomWeb.hero.heading_highlighted") }</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            { t("Service_CustomWeb.hero.subheading") }
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mb-8">
                            {technologies.custom_web_applications.map((tech) => (
                                <Badge key={tech} variant="secondary" className="bg-card border border-border">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                        <Link href={{ pathname: "/", hash: "contact" }} className="bg-blue-400 hover:bg-blue-400/90 hover:cursor-pointer py-3 font-semibold px-5 rounded-lg transition-colors duration-300 ease-in-out block mt-5 md:w-fit mx-auto text-sm">
                            { t("Service_CustomWeb.hero.cta") }
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
                            { t("Service_CustomWeb.features_section.heading") } <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">{ t("Service_CustomWeb.features_section.heading_highlighted") }</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            { t("Service_CustomWeb.features_section.subheading") }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {features.custom_web_applications.map((feature, index) => (
                            <Card key={index} className="bg-card border-border">
                                <CardHeader>
                                    <div className="size-12 bg-blue-400/10 rounded-lg flex items-center justify-center mb-4">
                                        <feature.icon className="size-7 text-blue-400" />
                                    </div>
                                <CardTitle className="text-xl text-card-foreground font-poppins font-medium">{feature.title}</CardTitle>
                                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-poppins">{ t("Service_CustomWeb.process.heading") }</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {workTypes.custom_web_applications.map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="size-16 bg-blue-400 text-blue-400-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                    {phase.step}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2 font-poppins">{phase.title}</h3>
                                <p className="text-muted-foreground">{phase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">{ t("Service_CustomWeb.benefits.heading") }</h3>
                            <div className="space-y-4">
                                {benefits.custom_web_applications.map((benefit, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckIcon className="size-5 text-blue-400 mr-3 flex-shrink-0" />
                                    <span className="text-muted-foreground">{benefit}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                        <Card className="bg-card border-border" data-test-id="contact-cta">
                            <CardHeader>
                                <CardTitle className="text-card-foreground font-poppins">{ t("Service_CustomWeb.benefits.card.title") }</CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    { t("Service_CustomWeb.benefits.card.description") }
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Link href={{ pathname: "/", hash: "contact" }} className="block w-full bg-blue-400 hover:bg-blue-400/90 hover:cursor-pointer text-md text-center py-2 rounded-md font-semibold transition-colors duration-300 ease-in-out">{ t("Service_BusinessWeb.benefits.card.cta") }</Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}
