export type Languages = "en" | "es";

export const slugMap = {
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
  for (const lang of ["en", "es"] as Languages[]) {
    const slug = slugMap[lang][page];
    reverseSlugMap[slug] = page;
  }
}
