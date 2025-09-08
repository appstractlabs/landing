import { useTranslations } from "next-intl";
import { BoltIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import FeatureIcons from "@/components/molecules/FeatureIcons";

export default function Hero() {
    const t = useTranslations("Hero");

    return (
        <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="container mx-auto">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border mb-8">
                        <BoltIcon className="size-6 text-primary mr-2" />
                        <span className="text-sm font-medium text-card-foreground">{ t("badge") }</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance font-poppins">
                        { t("heading") } <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">{ t("heading_highlighted") }</span>
                    </h1>

                    <h2 className="sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                        { t("subheading") }
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Button size="lg" className="bg-primary/80 hover:bg-primary/90 text-primary-foreground font-bold hover:cursor-pointer">
                            <a href="#contact" aria-label="Go to Contact Section" className="flex items-center">
                                { t("cta") }
                                <ArrowRightIcon className="ml-2 size-5" />
                            </a>
                        </Button>
                    </div>
                    <FeatureIcons />
                </div>
            </div>
        </section>
    );
}
