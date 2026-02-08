"use client";

import { ThemeProviders } from "./theme-providers";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
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
