"use client";

import { useTranslations } from "next-intl";
import { useActionState, useEffect, useRef } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmailAction } from "@/actions/send-email-action";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import Spinner from "@/components/atoms/Spinner";

const initialState = {
    errors: [],
    success: "",
};

export default function ContactForm() {
    const t = useTranslations("Contact");
    const [state, dispatch, pending] = useActionState(sendEmailAction, initialState);
    const prevStateRef = useRef(state);

    useEffect(() => {
        if (state.success && state !== prevStateRef.current) {
            toast.success(state.success);
        }
        prevStateRef.current = state;
    }, [state]);
    
    return (
        <Card className="bg-card border-border font-inter">
            <CardHeader>
                <CardTitle className="text-2xl text-card-foreground font-poppins">{ t("formInfo.title") }</CardTitle>
            </CardHeader>
            <CardContent>
                <form action={dispatch} className="space-y-6" noValidate>
                    { state.errors && state.errors.map((error, index) => <ErrorMessage key={index}>{error}</ErrorMessage>)  }
                    <div>
                        <Input
                            type="text"
                            name="name"
                            placeholder={ t("formInfo.name_label") }
                            className="bg-background border-border"
                            autoComplete="name"
                        />
                    </div>
                    <div>
                        <Input
                            type="email"
                            name="email"
                            placeholder={ t("formInfo.email_label") }
                            className="bg-background border-border"
                            autoComplete="email"
                        />
                    </div>
                    <div>
                        <Textarea
                            name="message"
                            placeholder={ t("formInfo.message_label") }
                            rows={6}
                            className="bg-background border-border resize-none"
                        />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:cursor-pointer">
                        { pending && <Spinner loading={true} size={8} color="white" /> }
                        { t("formInfo.submit_button") }
                        <PaperAirplaneIcon className="ml-2 size-4" />
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
