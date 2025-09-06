"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFormatDate } from "@/lib/dates";

export default function Cookies() {
    const t = useTranslations("CookiesPolicy");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="hover:bg-transparent hover:text-primary p-0 text-muted-foreground m-0 text-center">{t("trigger")}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle>{t("title")}</DialogTitle>
                    <DialogDescription className="text-white">
                        {t("intro")}
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm text-white">
                    <p><strong>{ t("last_updated_label") }</strong> { useFormatDate() }</p>

                    <h3 className="font-semibold">{ t("sections.1.heading") }</h3>
                    <p>{ t("sections.1.text") }</p>

                    <h3 className="font-semibold">{ t("sections.2.heading") }</h3>
                    <ul className="list-disc pl-5">
                        <li><strong>{ t("sections.2.highlighted_1") }</strong> { t("sections.2.items.0") }</li>
                        <li><strong>{ t("sections.2.highlighted_2") }</strong> { t("sections.2.items.1") }</li>
                        <li><strong>{ t("sections.2.highlighted_3") }</strong> { t("sections.2.items.2") }</li>
                        <li><strong>{ t("sections.2.highlighted_4") }</strong> { t("sections.2.items.3") }</li>
                    </ul>

                    <h3 className="font-semibold">{ t("sections.3.heading") }</h3>
                    <ul className="list-disc pl-5">
                        <li><strong>{ t("sections.3.highlighted_1") }</strong> { t("sections.3.items.0") }</li>
                        <li><strong>{ t("sections.3.highlighted_2") }</strong> { t("sections.3.items.1") }</li>
                        <li><strong>{ t("sections.3.highlighted_3") }</strong> { t("sections.3.items.2") }</li>
                    </ul>

                    <h3 className="font-semibold">{ t("sections.4.heading") }</h3>
                    <p>{ t("sections.4.text") }</p>

                    <h3 className="font-semibold">{ t("sections.5.heading") }</h3>
                    <ul className="list-disc pl-5">
                        <li><strong>{ t("sections.5.highlighted_1") }</strong> { t("sections.5.items.0") }</li>
                        <li><strong>{ t("sections.5.highlighted_2") }</strong> { t("sections.5.items.1") }</li>
                        <li><strong>{ t("sections.5.highlighted_3") }</strong> { t("sections.5.items.2") }</li>
                    </ul>

                    <h3 className="font-semibold">{ t("sections.6.heading") }</h3>
                    <p>{ t("sections.6.text") }</p>

                    <h3 className="font-semibold">{ t("sections.7.heading") }</h3>
                    <p>{ t("sections.7.text") }</p>

                    <h3 className="font-semibold">{ t("sections.8.heading") }</h3>
                    <p>{ t("sections.8.text") }</p>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="bg-primary text-white hover:cursor-pointer hover:bg-primary/95">{ t("close") }</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
