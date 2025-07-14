// // app/page.tsx
// import { Form } from "@/components/form";
// import { Footer } from "@/components/footer";
import { Poppins, ZCOOL_KuaiLe } from "next/font/google";
import "../globals.css";
import { User, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});


const Form = () => {
	return (
		<div className="text-principal-blue flex flex-col items-center {poppins.className}">
			<h1 className="m-12 text-2xl text-center">CADASTRAR-SE</h1>
			<form className="formulario flex flex-col">
				<div  className="mb-8">
					<Label htmlFor="cpf" className="text-base">
						CPF
					</Label>
					<br />
					<div className="flex flex-row mr-3 mb-5 gap-0 border-b border-gray-400 ">
						<User className="text-neutral-400 w-6 h-6 mt-1.5" />
						<Input
							className="text-neutral-500 border-0"
							type="cpf"
							id="cpf"
							placeholder="Digite seu CPF"
						/>
					</div>
				</div>
				<div className="mb-8">
					<Label htmlFor="email" className="text-base">
						Email
					</Label>
					<br />
					<div className="flex flex-row mr-3 mb-5 gap-0 border-b border-gray-400 ">
						<LockKeyhole className="text-neutral-400 w-6 h-6 mt-1.5" />
						<Input
							className="text-neutral-500 border-0"
							type="password"
							id="senha"
							placeholder="Digite sua senha"
						/>
					</div>
				</div>
				<Button className="bg-principal-blue focus:ring-0 text-white w-90 rounded-3xl h-12 mt-20">
					CADASTRE-SE
				</Button>
			</form>
		</div>
	);
};

const Footer = () => {
	return (
		<footer className="mt-20 mb-20 text-center font-mono">
			<p>
				Se já possuir uma conta <br /> faça login{" "}
				<span className="text-gray-700 font-bold">aqui</span>
			</p>
		</footer>
	);
};

export default function Home() {
	return (
		<>
			<Form />
			<Footer />
		</>
	);
}
