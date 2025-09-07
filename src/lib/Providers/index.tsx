"use client";

import { store } from "@/redux/features/store";
import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";
import React, { useEffect, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    <div className="min-h-screen bg-white">{children}</div>;
  }

  return (
    <ReduxProvider store={store}>
      <NextThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange={false}
        {...themeProps}
      >
        {children}
      </NextThemeProvider>
    </ReduxProvider>
  );
}
