import { motion } from "motion/react";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
}

export default function Card({
  title,
  description,
  children,
  className = "",
  delay = 0,
  direction = "up",
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
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}>
      <div className="absolute inset-px max-lg:rounded-t-4xl"></div>
      <div className="relative flex h-full flex-col overflow-hidden">
        <div className="p-10 sm:p-12">
          <h6 className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">
            {title}
          </h6>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {description}
          </p>
        </div>
        {children && (
          <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
            {children}
          </div>
        )}
      </div>
    </motion.section>
  );
}
