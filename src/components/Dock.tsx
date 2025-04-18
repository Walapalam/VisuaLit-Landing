// Simple Dock placeholder component
import React from "react";

export const Dock = ({ children }: { children: React.ReactNode }) => (
  <div className="flex bg-white/80 dark:bg-black/40 rounded-full shadow-lg px-4 py-2 backdrop-blur border border-neutral-200 dark:border-neutral-700">
    {children}
  </div>
);
