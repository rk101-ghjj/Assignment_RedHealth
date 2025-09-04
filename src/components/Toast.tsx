"use client";
import React, { useEffect } from "react";

type Props = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

export default function Toast({ message, type, onClose }: Props) {
  useEffect(() => {
    const id = setTimeout(onClose, 3000);
    return () => clearTimeout(id);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="rounded-lg border border-slate-200 bg-white shadow-xl w-[360px] max-w-[calc(100vw-2rem)]">
        <div className="px-4 py-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-slate-900">
                {type === "success" ? "Comment Posted!" : "Something went wrong"}
              </div>
              <div className="mt-1 text-sm text-slate-600">
                {type === "success" ? (message || "Your comment has been successfully added.") : message}
              </div>
            </div>
            <button
              onClick={onClose}
              className="mt-0.5 text-slate-400 hover:text-slate-600"
              aria-label="Close"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}