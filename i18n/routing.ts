import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/services/[slug]": {
      en: "/services/[slug]",
      es: "/servicios/[slug]"
    },
    "/services/business-websites-platforms": {
      en: "/services/business-websites-platforms",
      es: "/servicios/sitios-web-plataformas"
    },
    "/services/custom-web-applications": {
      en: "/services/custom-web-applications",
      es: "/servicios/aplicaciones-web-personalizadas"
    },
    "/services/mvp-development": {
      en: "/services/mvp-development",
      es: "/servicios/desarrollo-mvp"
    }
  }
});