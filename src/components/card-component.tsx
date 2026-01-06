import { motion } from "motion/react";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  icon?: ReactNode;
}

export default function Card({
  title,
  description,
  children,
  className = "",
  delay = 0,
  direction = "up",
  icon,
}: CardProps) {
  const directionMap = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 20 },
    down: { x: 0, y: -20 },
  };

  return (
    <motion.section
      className={`card-base ${className}`}
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}>
      <div className="absolute inset-px max-lg:rounded-t-4xl"></div>
      <div className="relative flex h-full flex-col overflow-hidden">
        <div className="px-4 pt-4 pb-2 sm:px-6 sm:pt-6 sm:pb-4">
          <h6 className="text-lg sm:text-xl lg:text-2xl font-medium tracking-tight max-lg:text-center flex items-center justify-between gap-2 max-lg:justify-center">
            {title}
            {icon && <span className="text-purple-500">{icon}</span>}
          </h6>
          <p className="mt-2 mx-auto text-sm sm:text-base lg:text-lg text-gray-600 max-lg:text-center whitespace-pre-line">
            {description}
          </p>
        </div>
        {children && (
          <div className="flex items-center justify-center px-4 pt-2 pb-8 sm:px-4 sm:pt-2 lg:pb-2 text-center">
            {children}
          </div>
        )}
      </div>
    </motion.section>
  );
}
