import { useFormatter } from "next-intl";

export const useFormatDate = () => {
    const format = useFormatter();
    const lastUpdated = new Date(2025, 8, 2);

    return format.dateTime(lastUpdated, {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "America/El_Salvador"
    });
}