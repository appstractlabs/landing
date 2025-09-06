import { z } from "zod";
import { getTranslations } from "next-intl/server";

export async function contactFormSchema() {
    const t = await getTranslations("Validation");

    return z.object({
        name: z.string().min(1, { message: t("name_required") }),
        email: z.email({ message: t("email_invalid") }),
        message: z.string().min(10, { message: t("message_min") })
    });
}

export const errorSchema = z.object({ error: z.string() });
export const successSchema = z.string();