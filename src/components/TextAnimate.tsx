// Simple TextAnimate placeholder component
import React from "react";

export const TextAnimate = ({ children, type }: { children: React.ReactNode; type?: string }) => (
  <span className="transition-all duration-300 hover:text-primary">{children}</span>
);
