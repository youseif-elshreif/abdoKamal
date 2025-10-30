"use client";

interface BackgroundElementsProps {
  variant?: "default" | "scattered" | "minimal";
}

export default function BackgroundElements({
  variant = "default",
}: BackgroundElementsProps) {
  if (variant === "minimal") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-500/4 rounded-full blur-2xl sm:blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    );
  }

  if (variant === "scattered") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/6 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-blue-400/4 rounded-full blur-xl sm:blur-3xl"></div>
        <div className="absolute top-2/3 right-3/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-600/5 rounded-full blur-lg sm:blur-2xl"></div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-blue-400/3 rounded-full blur-xl sm:blur-3xl"></div>
      <div className="absolute top-3/4 right-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-600/4 rounded-full blur-lg sm:blur-2xl"></div>
    </div>
  );
}
