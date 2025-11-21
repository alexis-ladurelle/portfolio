import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  children,
  className = "",
}: CardProps) {
  return (
    <section
      className={`relative rounded-lg bg-neutral-50 shadow-xl ${className}`}>
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
    </section>
  );
}
