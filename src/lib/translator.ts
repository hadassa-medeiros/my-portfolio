import type { Languages } from "./routes";
type TranslationKeys =
  | "ABOUT"
  | "PROJECTS"
  | "ABOUT_P1"
  | "ABOUT_P2"
  | "ABOUT_P3"
  | "PROJECT_1_NAME"
  | "PROJECT_2_NAME"
  | "PROJECT_3_NAME"
  | "PROJECT_4_NAME";

type Translatable = {
  [lang in Languages]: Record<TranslationKeys, string>;
};

class Translator {
  private value: Languages;

  private translatables: Translatable = {
    es: {
      PROJECTS: "proyectos",
      ABOUT: "sobre",
      ABOUT_P1: "jl",
      ABOUT_P2: "",
      ABOUT_P3: "",
      PROJECT_1_NAME: "workout tracker",
      PROJECT_2_NAME: "forms web app",
      PROJECT_3_NAME: "custom extension for revit",
      PROJECT_4_NAME: "custom component library",
    },
    en: {
      PROJECTS: "projects",
      ABOUT: "about",
      ABOUT_P1: "",
      ABOUT_P2: "",
      ABOUT_P3: "",
      PROJECT_1_NAME: "Momentum workout tracker",
      PROJECT_2_NAME: "Forms web application",
      PROJECT_3_NAME: "Bulding models management extension for Revit",
      PROJECT_4_NAME: "Custom components library",
    },
  };

  constructor(currentlang: Languages) {
    this.value = currentlang;
  }

  setlang(newlang: Languages) {
    this.value = newlang;
  }

  t(key: TranslationKeys) {
    return this.translatables[this.value][key];
  }
}
export default Translator;
