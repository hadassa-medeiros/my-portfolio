import type { Languages } from "./routes";
type TranslationKeys =
  | "ABOUT"
  | "PROJECTS"
  | "LOCATION"
  | "ABOUT_P1"
  | "ABOUT_P2"
  | "ABOUT_P3"
  | "PLACEHOLDER_MSG"
  | "PROJECT_1_NAME"
  | "PROJECT_2_NAME"
  | "PROJECT_3_NAME"

type Translatable = {
  [lang in Languages]: Record<TranslationKeys, string>;
};

class Translator {
  private value: Languages;

  private translatables: Translatable = {
    ca: {
      PROJECTS: "projectes",
      ABOUT_P1: "estructura, textura, traducció",
      LOCATION: "Barcelona, Spain",

      PLACEHOLDER_MSG: "en progrés",

      PROJECT_1_NAME: "gestió de models d'edificis per a Revit",
    },
    es: {
      PROJECTS: "proyectos",
      ABOUT_P1: "estructura, textura, tradución",
      LOCATION: "Barcelona, Spain",

      PLACEHOLDER_MSG: "en progreso",

      PROJECT_1_NAME: "gestión de modelos de edificaciones para Revit",
    },
    en: {
      PROJECTS: "projects",
      ABOUT_P1: "structure, texture, translation",
      LOCATION: "Barcelona, Spain",
      
      PLACEHOLDER_MSG: "in progress",

      PROJECT_1_NAME: "",
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
