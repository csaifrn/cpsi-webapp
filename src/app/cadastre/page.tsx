
import Form from "@/components/cadastro/cadastro-form";


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
