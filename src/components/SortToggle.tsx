"use client";
import React from "react";

type Props = {
  value: "newest" | "oldest";
  onChange: (value: "newest" | "oldest") => void;
};

export default function SortToggle({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-1 rounded-md border border-slate-200 bg-white p-1">
      <button
        type="button"
        onClick={() => onChange("newest")}
        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors flex items-center gap-2 ${
          value === "newest"
            ? "bg-[#5B8EFF] text-white shadow-sm"
            : "text-slate-600 hover:text-white hover:bg-black"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        Newest
      </button>
      <button
        type="button"
        onClick={() => onChange("oldest")}
        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors flex items-center gap-2 ${
          value === "oldest"
            ? "bg-[#5B8EFF] text-white shadow-sm"
            : "text-slate-600 hover:text-white hover:bg-black"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
        Oldest
      </button>
    </div>
  );
}