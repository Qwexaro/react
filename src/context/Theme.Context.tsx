import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { ThemeType } from "./types/Theme.Type.js";
import type { ThemeContextType } from "./interfaces/Theme.Context.Type.js";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<ThemeType>(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("app-theme") as ThemeType;
            return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "light";
        }
        return "light";
    });

    useEffect(() => {
        localStorage.setItem("app-theme", theme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme: ThemeType) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
}
