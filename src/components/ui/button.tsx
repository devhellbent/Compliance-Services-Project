// components/ui/button.tsx
import React from "react";

// A simple, reusable button component using Tailwind CSS
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export const Button = ({
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-500",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
};
