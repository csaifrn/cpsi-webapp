import { Header } from "@/components"
import React, { use } from "react";
import Nav from "@/components/idoso/pre-inscricao/page3/Nav";
import Forms from "@/components/idoso/pre-inscricao/page3/Forms";
import {  
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField, 
} from "@/components/ui/form";


export default function Paginapre() {
    return (
        <div>
            <Header />
            <Forms />
            <Nav />
        </div>
    );
}