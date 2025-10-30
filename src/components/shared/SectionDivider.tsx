interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({
  className = "",
}: SectionDividerProps) {
  return (
    <div className={` ${className}`}>
      <div
        className="w-full h-0.5"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.6) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
