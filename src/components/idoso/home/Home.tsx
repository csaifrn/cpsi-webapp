'use client';
import React from "react";
import { Album } from "lucide-react";
import { ClipboardPenLine } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const IdosoHomeMat = () => {
    return (
        <div className="flex justify-center items-center my-4">
          <Card className="p-5 pt-6 h-57 bg-white shadow-md w-80 flex justify-center">
            <div className="space-y-4">
              <Button
                  className="w-full h-20 bg-primaria-red hover:bg-second-red text-black text-2xl font-bold flex items-center justify-center rounded-lg shadow"
                  onClick={() => console.log('Meus Horários clicked')}
              >
                  <Album 
                    style={{ width: "30px", height: "30px" }}
                  />
                  Meus Horários
              </Button>

              <Button
                  className="w-full h-20 bg-primaria-blue hover:bg-second-blue text-black text-2xl font-bold flex items-center justify-center rounded-lg shadow"
                  onClick={() => console.log('Pré-inscrição clicked')}
              >
                 <ClipboardPenLine
                    style={{ width: "30px", height: "30px" }}
                    
                  />
                  Pré-inscrição
              </Button>
            </div>
          </Card>
        </div>
    );
};

export default IdosoHomeMat;