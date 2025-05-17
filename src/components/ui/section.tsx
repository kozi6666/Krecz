import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type BackgroundType = "white" | "dark" | "secondary" | "transparent" | "blob";

type SectionProps = {
  children: ReactNode;
  className?: string;
  background?: BackgroundType;
  id?: string;
  blobComponent?: ReactNode;
  animate?: boolean; // <- nowy props
};

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  background = "white",
  id,
  blobComponent,
  animate = false,
}) => {
  const bgColors: Record<BackgroundType, string> = {
    white: "bg-white",
    dark: "bg-dark",
    secondary: "bg-light/10",
    transparent: "bg-transparent",
    blob: "relative overflow-hidden bg-white",
  };

  const AnimatedWrapper = animate ? motion.div : "div";

  return (
    <section
      id={id}
      className={`relative py-10 ${bgColors[background]} ${className}`}
    >
      {background === "blob" && blobComponent && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {blobComponent}
        </div>
      )}

      <AnimatedWrapper
        className="container spacer relative text-center mx-auto gap-5 px-4 z-10"
        initial={animate ? { opacity: 0, y: 80 } : undefined}
        whileInView={animate ? { opacity: 3, y: 0 } : undefined}
        viewport={animate ? { once: true } : undefined}
        transition={animate ? { duration: 3 } : undefined}
      >
        {children}
      </AnimatedWrapper>
    </section>
  );
};

export default Section;
