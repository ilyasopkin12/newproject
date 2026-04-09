import React,{ createContext, useContext, useEffect, useMemo, useState} from "react";
import type { User } from "@/entities/user/model/types.js";

type LoginPayload = {
    email: string,
    password: string
}

type AuthContextValue = {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (payload: LoginPayload) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

type AuthProviderProps = {
    children: React.ReactNode
}

const STORAGE_KEY = "auth_user"

export function AuthProvider ({children}: AuthProviderProps) {
    const [user,setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
      
          if (!raw || raw === "undefined" || raw === "null") {
            setUser(null);
            return;
          }
      
          const parsed = JSON.parse(raw) as User;
          setUser(parsed);
        } catch {
          localStorage.removeItem(STORAGE_KEY); // чистим битое значение
          setUser(null);
        } finally {
          setIsLoading(false);
        }
      }, []);

      const login = async (payload: LoginPayload) => {
        const response = await fetch("http://localhost:8000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      
        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Login failed: ${response.status} ${errText}`);
        }
      
        const tokens = (await response.json()) as {
          accessToken: string;
          refreshToken: string;
        };
      
        localStorage.setItem("access_token", tokens.accessToken);
        localStorage.setItem("refresh_token", tokens.refreshToken);
      
        const meResponse = await fetch("http://localhost:8000/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
          },
        });
      
        if (!meResponse.ok) {
          const errText = await meResponse.text();
          throw new Error(`Me failed: ${meResponse.status} ${errText}`);
        }
      
        const me = (await meResponse.json()) as User;
      
        setUser(me);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(me));
      };
      
    const logout = () => {
        setUser(null)
        localStorage.removeItem(STORAGE_KEY)
    }
    const isAuthenticated = Boolean(user)

    const value = useMemo<AuthContextValue>(
        () => ({
            user,
            isAuthenticated,
            isLoading,
            login,
            logout
        }),
        [user,isLoading]
    )
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error("Не авторизирован")
    }
    return context
}