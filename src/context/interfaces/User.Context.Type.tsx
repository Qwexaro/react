import type React from "react";

export interface UserContextType {

    userName: string;

    setUserName: React.Dispatch<React.SetStateAction<string>>;

}