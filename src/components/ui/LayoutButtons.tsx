"use client";

import React from "react";

export type ViewMode = "search" | "list" | "grid";

interface LayoutButtonsProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

const LayoutButtons: React.FC<LayoutButtonsProps> = ({
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setViewMode("search")}
        className={`p-2 ${
          viewMode === "search" ? "text-[var(--primary-color)]" : "text-white"
        }`}
        aria-label="Search view"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button
        onClick={() => setViewMode("list")}
        className={`p-2 ${
          viewMode === "list" ? "text-[var(--primary-color)]" : "text-white"
        }`}
        aria-label="List view"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <button
        onClick={() => setViewMode("grid")}
        className={`p-2 ${
          viewMode === "grid" ? "text-[var(--primary-color)]" : "text-white"
        }`}
        aria-label="Grid view"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      </button>
    </div>
  );
};

export default LayoutButtons;
