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
import { formatDate } from "@/lib/dates";

export default function PrivacyPolicy() {
    const t = useTranslations("TermsService");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="hover:bg-transparent hover:text-primary p-0 text-muted-foreground m-0 text-center">{ t("trigger") }</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto hide-scrollbar">
                <DialogHeader>
                    <DialogTitle>{ t("title") }</DialogTitle>
                    <DialogDescription className="text-white">
                        { t("intro") }
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm text-white">
                  <p><strong>{ t("last_updated_label") }</strong> { formatDate() }</p>

                    <h3 className="font-semibold">{ t("sections.1.heading") }</h3>
                    <ul className="list-disc pl-5">
                        <li>{ t("sections.1.items.0") }</li>
                        <li>{ t("sections.1.items.1") }</li>
                        <li>{ t("sections.1.items.2") }</li>
                    </ul>

                    <h3 className="font-semibold">{ t("sections.2.heading") }</h3>
                    <ul className="list-disc pl-5">
                        <li>{ t("sections.2.items.0") }</li>
                        <li>{ t("sections.2.items.1") }</li>
                    </ul>

                    <h3 className="font-semibold">{ t("sections.3.heading") }</h3>
                    <ul className="list-disc pl-5">
                        <li>{ t("sections.3.items.0") }</li>
                        <li>{ t("sections.3.items.1") }</li>
                    </ul>

                    <h3 className="font-semibold">{ t("sections.4.heading") }</h3>
                    <p>{ t("sections.4.intro") }</p>
                    <ul className="list-disc pl-5">
                        <li>{ t("sections.4.items.0") }</li>
                        <li>{ t("sections.4.items.1") }</li>
                        <li>{ t("sections.4.items.2") }</li>
                    </ul>

                    <h3 className="font-semibold">{ t("sections.5.heading") }</h3>
                    <p>{ t("sections.5.text") }</p>

                    <h3 className="font-semibold">{ t("sections.6.heading") }</h3>
                    <ul className="list-disc pl-5">
                        <li>{ t("sections.6.items.0") }</li>
                        <li>{ t("sections.6.items.1") }</li>
                    </ul>

                    <h3 className="font-semibold">{ t("sections.7.heading") }</h3>
                    <p>{ t("sections.7.text") }</p>

                    <h3 className="font-semibold">{ t("sections.8.heading") }</h3>
                    <p>{ t("sections.8.text") }</p>

                    <h3 className="font-semibold">{ t("sections.9.heading") }</h3>
                    <p>{ t("sections.9.text") }</p>

                    <h3 className="font-semibold">{ t("sections.10.heading") }</h3>
                    <p>{ t("sections.10.text") }</p>

                    <h3 className="font-semibold">{ t("sections.11.heading") }</h3>
                    <p>{ t("sections.11.text") }</p>

                    <h3 className="font-semibold">{ t("sections.12.heading") }</h3>
                    <p>{ t("sections.12.intro") }</p>
                    <p>
                        <strong>{ t("sections.12.org") }</strong><br />
                        { t("sections.12.email_label") } <strong>{ t("sections.12.email_value") }</strong><br />
                    </p>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="bg-primary text-white hover:cursor-pointer hover:bg-primary/95">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
