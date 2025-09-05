export const slugMap = {
    'business-websites-platforms': { en:'business-websites-platforms', es:'sitios-web-plataformas' },
    'custom-web-applications':     { en:'custom-web-applications',     es:'aplicaciones-web-personalizadas' },
    'mvp-development':             { en:'mvp-development',             es:'desarrollo-mvp' }
} as const;

export const reverseMap: Record<string, keyof typeof slugMap> =
    Object.fromEntries(
        Object.entries(slugMap).flatMap(([id, byLocale]) =>
        Object.values(byLocale).map(locSlug => [locSlug, id as keyof typeof slugMap])
    )
);