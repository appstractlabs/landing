import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { CheckIcon, ChartPieIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeatureGroups, getBenefits, technologies, getWorkTypes } from "@/content/data";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const rawKeywords = t.raw("mvp.keywords");

  return {
    title: t("mvp.title"),
    description: t("mvp.description"),
    keywords: rawKeywords
  };
}

export default function MvpDevelopmentPage() {
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
                            <ChartPieIcon className="size-10 text-green-400" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
                        { t("Service_MVP.hero.heading") } <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">{ t("Service_MVP.hero.heading_highlighted") }</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            { t("Service_MVP.hero.subheading") }
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mb-8">
                            {technologies.mvp_development.map((tech) => (
                                <Badge key={tech} variant="secondary" className="bg-card border border-border">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                        <Link href={{ pathname: "/", hash: "contact" }} className="bg-green-600 hover:bg-green-600/90 hover:cursor-pointer py-3 font-semibold px-5 rounded-lg transition-colors duration-300 ease-in-out block mt-5 md:w-fit mx-auto text-sm">
                            { t("Service_MVP.hero.cta") }
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
                            { t("Service_MVP.features_section.heading") } <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">{ t("Service_MVP.features_section.heading_highlighted") }</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            { t("Service_MVP.features_section.subheading") }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {features.mvp_development.map((feature, index) => (
                            <Card key={index} className="bg-card border-border">
                                <CardHeader>
                                    <div className="size-12 bg-green-400/10 rounded-lg flex items-center justify-center mb-4">
                                        <feature.icon className="size-7 text-green-400" />
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
                    <h2 className="text-3xl text-center text-foreground mb-12 font-poppins font-bold">{ t("Service_MVP.process.heading") }</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {workTypes.mvp_development.map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
                            <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">{ t("Service_MVP.benefits.heading") }</h3>
                            <div className="space-y-4">
                                {benefits.business_websites_platforms.map((benefit, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckIcon className="size-5 text-green-400 mr-3 flex-shrink-0" />
                                    <span className="text-muted-foreground">{benefit}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                        <Card className="bg-card border-border">
                            <CardHeader>
                                <CardTitle className="text-card-foreground font-poppins">{ t("Service_MVP.benefits.card.title") }</CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    { t("Service_MVP.benefits.card.description") }
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Link href={{ pathname: "/", hash: "contact" }} className="block w-full bg-green-600 hover:bg-green-600/90 hover:cursor-pointer text-md text-center py-2 rounded-md font-semibold transition-colors duration-300 ease-in-out">{ t("Service_BusinessWeb.benefits.card.cta") }</Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}
