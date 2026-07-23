export const languages = ["ca", "en", "es"] as const;
export type Languages = (typeof languages)[number];

export const slugMap = {
  ca: {
    projects: "projectes",
    project: "projecte",
    about: "sobre-mi",
  },
  en: {
    projects: "projects",
    project: "project",
    about: "about-me",
  },
  es: {
    projects: "proyectos",
    project: "proyecto",
    about: "sobre-mi",
  },
} as const;

export type Page = keyof (typeof slugMap)["en"];
export type Slug = (typeof slugMap)[Languages][Page] | string;

export type Parameters = {
  lang: Languages;
  page: Page;
  slug: Slug;
};

export const reverseSlugMap: Record<Slug, Page> = {} as Record<Slug, Page>;

for (const page of Object.keys(slugMap.en) as Page[]) {
  for (const lang of languages) {
    const slug = slugMap[lang][page];
    reverseSlugMap[slug] = page;
  }
}
