"use client";

import {createContext, useContext, useEffect, useMemo, useState} from "react";

export type UserRole = "Employee" | "Admin";

type RoleContextValue = {
  role: UserRole;
  setRole: (role: UserRole) => void;
};

const RoleContext = createContext<RoleContextValue | null>(null);

export function RoleProvider({children}: {children: React.ReactNode}) {
  const [role, setRoleState] = useState<UserRole>("Employee");

  useEffect(() => {
    const savedRole = window.localStorage.getItem("mindco-role");
    if (savedRole === "Admin" || savedRole === "Employee") {
      setRoleState(savedRole);
    }
  }, []);

  const setRole = (nextRole: UserRole) => {
    setRoleState(nextRole);
    window.localStorage.setItem("mindco-role", nextRole);
  };

  const value = useMemo(() => ({role, setRole}), [role]);

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const context = useContext(RoleContext);

  if (!context) {
    throw new Error("useRole must be used within RoleProvider");
  }

  return context;
}
