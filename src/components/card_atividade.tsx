import { Checkbox } from "@/components/ui/checkbox";

interface ActivityCardProps {
  title: string;
  teacher: string;
  time: string;
}

export function Card({ title, teacher, time }: ActivityCardProps) {
  return (
    <div className="w-75 m-5 border border-indigo-400 rounded-xl p-3 flex justify-between items-center text-indigo-500 font-mono">
      <div>
        
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs">{teacher} &nbsp; {time}</p>
      </div>
      <Checkbox className="data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500" />
    </div>
  );
}
