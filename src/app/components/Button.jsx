"use client";

import React, { forwardRef } from "react";
import { Loader2 } from "lucide-react";

/**
 * Production-Grade Reusable Button Component
 * 
 * @param {Object} props
 * @param {"primary" | "secondary" | "brand" | "danger" | "warning" | "outline" | "ghost"} [props.variant="primary"]
 * @param {"sm" | "md" | "lg" | "xl"} [props.size="md"]
 * @param {boolean} [props.isLoading=false]
 * @param {boolean} [props.fullWidth=false]
 * @param {React.ElementType} [props.leftIcon]
 * @param {React.ElementType} [props.rightIcon]
 */
const Button = forwardRef(
  (
    {
      children,
      type = "button",
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled = false,
      fullWidth = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      className = "",
      onClick,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    // Base Styles (Accessibility + Smooth Animations + Standard Layout)
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]";

    // Variant Styles (Your Theme Palette)
    const variants = {
      primary:
        "bg-[#191c1f] text-white hover:bg-opacity-90 focus-visible:ring-[#191c1f]",
      brand:
        "bg-[#1b6392] text-white hover:bg-[#154e73] focus-visible:ring-[#1b6392]",
      secondary:
        "bg-[#5f6c72] text-white hover:bg-opacity-90 focus-visible:ring-[#5f6c72]",
      danger:
        "bg-warning text-primary hover:bg-amber-600 focus-visible:ring-red-600",
      warning:
        "bg-[#fa8232] text-white hover:bg-amber-600 focus-visible:ring-[#fa8232]",
      outline:
        "border border-[#e4e7e9] text-[#191c1f] bg-transparent hover:bg-gray-50 focus-visible:ring-[#191c1f]",
      ghost:
        "text-[#191c1f] bg-transparent hover:bg-gray-100 focus-visible:ring-[#191c1f]",
    };

    // Size Variants
    const sizes = {
      sm: "py-8 px-4 text-xs rounded gap-1.5",
      md: "h-10 px-4 text-sm rounded-md gap-2",
      lg: "h-12 px-6 text-base rounded-md gap-2.5",
      xl: "h-14 px-8 text-lg rounded-lg gap-3",
    };

    const isButtonDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isButtonDisabled}
        onClick={onClick}
        aria-disabled={isButtonDisabled}
        aria-label={ariaLabel}
        className={`
          ${baseStyles} 
          ${variants[variant] || variants.primary} 
          ${sizes[size] || sizes.md} 
          ${fullWidth ? "w-full" : "w-auto"} 
          ${className}
        `}
        {...props}
      >
        {/* Loading Spinner */}
        {isLoading && (
          <Loader2
            className="animate-spin text-current shrink-0"
            size={size === "sm" ? 14 : size === "lg" ? 20 : 16}
            aria-hidden="true"
          />
        )}

        {/* Left Icon */}
        {!isLoading && LeftIcon && (
          <LeftIcon
            className="shrink-0 text-current"
            size={size === "sm" ? 14 : size === "lg" ? 20 : 16}
            aria-hidden="true"
          />
        )}

        {/* Button Text / Content */}
        <span>{children}</span>

        {/* Right Icon */}
        {!isLoading && RightIcon && (
          <RightIcon
            className="shrink-0 text-current"
            size={size === "sm" ? 14 : size === "lg" ? 20 : 16}
            aria-hidden="true"
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;