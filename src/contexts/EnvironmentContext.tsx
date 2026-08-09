import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type EnvironmentMode = "day" | "night";

interface EnvironmentContextType {
  mode: EnvironmentMode;
  setMode: (mode: EnvironmentMode) => void;
  isTransitioning: boolean;
  setIsTransitioning: (val: boolean) => void;
}

const EnvironmentContext = createContext<EnvironmentContextType | undefined>(undefined);

export function EnvironmentProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<EnvironmentMode>("day");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (mode === "night") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <EnvironmentContext.Provider value={{ mode, setMode, isTransitioning, setIsTransitioning }}>
      {children}
    </EnvironmentContext.Provider>
  );
}

export function useEnvironment() {
  const context = useContext(EnvironmentContext);
  if (!context) {
    throw new Error("useEnvironment must be used within an EnvironmentProvider");
  }
  return context;
}
