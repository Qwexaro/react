import { createContext, useContext, useState, type ReactNode } from "react";
import type { UserContextType } from "./interfaces/User.Context.Type.js";

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {

    const [userName, setUserName] = useState<string>('Sergey');

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser(): UserContextType {

    const context = useContext(UserContext);

    if (!context) throw new Error("useUser must be used within a UserProvider");

    return context;
}
