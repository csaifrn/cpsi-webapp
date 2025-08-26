'use client';
import { cn } from "@/lib/utils";

const MigalhasPreinscricao = ({ currentStep = 1, totalSteps = 3 }) => {
  return (
    <div className="flex justify-center items-center gap-[6px] m-2 mb-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "rounded-full  w-3 h-3",
            currentStep === index + 1
              ? "bg-principal-blue" 
              : "bg-white border-principal-blue border-2"
          )}
        />
      ))}
    </div>
  );
}

export default MigalhasPreinscricao;