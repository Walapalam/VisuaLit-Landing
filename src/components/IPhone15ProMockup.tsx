// iPhone15ProMockup.tsx
// Minimalist iPhone 15 Pro mockup for landing page (MagicUI inspired)
import * as React from "react";

export function IPhone15ProMockup({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-center w-[260px] h-[540px] rounded-[40px] bg-gradient-to-br from-neutral-100 to-neutral-200 shadow-2xl border-4 border-neutral-300 dark:from-neutral-900 dark:to-neutral-800 dark:border-neutral-700">
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/80 rounded-b-xl z-10" />
      {/* Screen */}
      <div className="relative w-[232px] h-[500px] rounded-[32px] bg-white dark:bg-neutral-900 overflow-hidden flex items-center justify-center">
        {children}
      </div>
      {/* Side buttons (minimal) */}
      <div className="absolute left-0 top-24 w-1 h-12 bg-neutral-400 rounded-r-xl opacity-60" />
      <div className="absolute right-0 top-40 w-1 h-8 bg-neutral-400 rounded-l-xl opacity-60" />
    </div>
  );
}
