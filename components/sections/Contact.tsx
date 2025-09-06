import { useTranslations } from "next-intl";
import ContactForm from "@/components/forms/ContactForm";
import ContactInformation from "@/components/molecules/ContactInformation";

export default function Contact() {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-poppins">
                        { t("heading") } <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">{ t("heading_highlighted") }</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        { t("subheading") }
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <ContactForm />
                    <ContactInformation />
                </div>
            </div>
        </section>
    );
}
