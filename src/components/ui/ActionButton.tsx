"use client";

import Link from "next/link";
import React from "react";

interface ActionButtonProps {
  href?: string;
  action?: () => void;
  color?: string;
  textColor?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ActionButton({
  href,
  action,
  color = "#ffffff",
  textColor = "#000000",
  children,
  className = "",
  style = {},
}: ActionButtonProps) {
  const useBgClass = typeof color === "string" && color.startsWith("bg-");
  const bgStyle = useBgClass ? {} : { backgroundColor: color };
  const classes =
    `inline-block px-6 py-3 font-bold hover:opacity-90 transition-colors cursor-pointer ${
      useBgClass ? color : ""
    } ${className}`.trim();

  const commonStyle = {
    color: textColor,
    clipPath: "polygon(95% 100%, 100% 0, 0 2%, 5% 90%)",
    ...bgStyle,
    ...style,
  };

  if (action) {
    return (
      <button onClick={action} className={classes} style={commonStyle}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href || "#"} className={classes} style={commonStyle}>
      {children}
    </Link>
  );
}
