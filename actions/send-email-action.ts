"use server";

import { contactFormSchema, errorSchema, successSchema } from '@/src/schemas/index';
import { getTranslations } from 'next-intl/server';

type prevStateType = {
    errors: string[],
    success: string
}

export async function sendEmailAction(prevState: prevStateType, formData: FormData) {
    const t = await getTranslations("Success");

    const emailFormData = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
    }

    const schema = await contactFormSchema();
    const email = schema.safeParse(emailFormData);

    if(!email.success){
        const errors = email.error.issues.map(issue => issue.message);
        return {
            errors,
            success: ''
        }
    }

    const url = `${process.env.API_URL}/api/send-email`;

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(emailFormData),
    });

    const json = await req.json();

    if(req.status === 429){
        const { error } = errorSchema.parse(json);
        return {
            errors: [error],
            success: ''
        }
    }

    const success = successSchema.parse(t("title"));

    return {
        errors: [],
        success
    }
}