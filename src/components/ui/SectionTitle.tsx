"use client";

import React from "react";

interface SectionTitleProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  underlineColor?: string;
}

export default function SectionTitle({
  title,
  icon,
  className = "",
  underlineColor = "var(--primary-color)",
}: SectionTitleProps) {
  return (
    <h2
      className={`text-2xl md:text-3xl font-bold uppercase relative inline-flex items-center ${className}`}
    >
      {title}
      <span
        className="absolute -bottom-2 left-0 w-16 h-1"
        style={{ backgroundColor: underlineColor }}
      ></span>
      {icon && <span className="ml-4">{icon}</span>}
    </h2>
  );
}
