'use client';
import { Card } from "./CardAtividade";



export function List() {
  const atividades = [
    { title: "Dança – Turma 1", teacher: "Prof. Julio", time: "12:35 – 14:00" },
    { title: "Coral – Turma 1", teacher: "Prof. Liliane", time: "08:45 – 10:00" },
    { title: "Dança – Turma 2", teacher: "Prof. Julio", time: "14:00 – 15:30" },
    { title: "Coral – Turma 2", teacher: "Prof. Liliane", time: "10:00 – 12:00" },
    { title: "Dança – Turma 3", teacher: "Prof. Julio", time: "15:30 – 16:30" },
    { title: "Coral – Turma 3", teacher: "Prof. Liliane", time: "12:35 – 14:00" },
    { title: "Dança – Turma 4", teacher: "Prof. Julio", time: "15:00 – 16:30" },
  ];

  return (
    <div className="mt-5 h-[400px] overflow-y-auto space-y-4 border-1 border-gray-400 rounded-md max-w-full">
      {atividades.map((act, idx) => (
        <Card key={idx} {...act}/>
      ))}
    </div>
  );
}
