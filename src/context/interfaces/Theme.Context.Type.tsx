import type { ThemeType } from "../types/Theme.Type.js";

export interface ThemeContextType {

    theme: ThemeType;

    toggleTheme: () => void;

}