import React from "react";
import { clsx } from "clsx";
import { LoadingSpinner } from "./LoadingSpinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-outfit";

  const variants = {
    primary: "bg-black hover:bg-black/80 text-white focus:ring-0 outline-0",
    secondary: "bg-white hover:bg-white/80 text-black focus:ring-0 outline-0",
    outline:
      "border border-gray-300 bg-transparent text-black focus:ring-0 outline-0",
    ghost: "hover:bg-gray-100 text-gray-700 focus:ring-gray-500",
    danger: "bg-red-600 hover:bg-red-700  text-white focus:ring-red-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-3 text-md",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], sizes[size], className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <LoadingSpinner size="sm" className="mr-2" />}
      {children}
    </button>
  );
}
