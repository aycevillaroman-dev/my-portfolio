import React from "react";
import clsx from "clsx";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export default function AuroraBackground({
  children,
  className,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-black text-white",
        className
      )}
      {...props}
    >
      {/* Aurora effect layer */}
      <div
        className="absolute inset-0 -z-10 animate-[var(--animate-aurora)] bg-[radial-gradient(ellipse_at_top_left,rgba(0,200,255,0.5),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(255,0,200,0.5),transparent_60%)] bg-[length:200%_200%]"
      />
      {showRadialGradient && (
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
      )}

      {/* Content goes here */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
