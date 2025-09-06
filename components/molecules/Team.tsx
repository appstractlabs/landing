import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTeam } from "@/content/data";
import { Card, CardContent } from "@/components/ui/card";

export default function Team() {
    const t = useTranslations();
    const team = getTeam(t);

    return (
        <div id="team" className="font-inter">
            <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">{ t("About.team.heading") }</h3>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    { t("About.subheading") }
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                    <Card
                        key={index}
                        className="bg-card border-border text-center hover:border-primary/50 transition-all duration-300 max-w-lg mx-auto"
                    >
                        <CardContent className="p-6">
                            <Image
                                src={member.image || "/placeholder.png"}
                                alt={member.name}
                                className="size-24 rounded-full mx-auto mb-4 object-cover"
                                width={200}
                                height={200}
                            />
                            <h4 className="text-lg font-medium text-card-foreground mb-1 font-poppins">{member.name}</h4>
                            <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                            <p className="text-muted-foreground text-sm max-w-xs">{member.bio}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
