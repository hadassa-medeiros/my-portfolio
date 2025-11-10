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
  | "PROJECT_4_NAME";

type Translatable = {
  [lang in Languages]: Record<TranslationKeys, string>;
};

class Translator {
  private value: Languages;

  private translatables: Translatable = {
    es: {
      ABOUT: "sobre mí",
      PROJECTS: "proyectos",
      ABOUT_P1: "desarrolladora web full-stack (front-end focus)",
      LOCATION: "Barcelona, Spain",
      ABOUT_P2: "Full stack developer, front-end focus, UX awareness, academic background in Architecture and Urbanism, specialized in the MERN stack.",
      ABOUT_P3: "I like things to flow and be uncomplicated.",

      PLACEHOLDER_MSG: "en progreso",

      PROJECT_1_NAME: "workout tracker",
      PROJECT_2_NAME: "forms management platform",
      PROJECT_3_NAME: "custom extension for revit",
      PROJECT_4_NAME: "custom component library",
    },
    en: {
      ABOUT: "about me",
      PROJECTS: "projects",
      ABOUT_P1: "full-stack web developer (front-end focus)",     LOCATION: "Barcelona, Spain",
      ABOUT_P2: "Desarrolladora full stack, con enfoque en front-end, conciencia de UX, formación académica en Arquitectura y Urbanismo, especializado en el stack MERN.",
      ABOUT_P3: "Me gusta que las cosas fluyan y sean sencillas.",
      
      PLACEHOLDER_MSG: "in progress",

      PROJECT_1_NAME: "Momentum workout tracker",
      PROJECT_2_NAME: "plataforma de gestión de formularios",
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
