"use client";

import { ThemeProviders } from "./theme-providers";
import { Toaster } from "@/components/ui/sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Toaster />
      <ThemeProviders
        attribute={"class"}
        defaultTheme={"system"}
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProviders>
    </div>
  );
};

export default Providers;
