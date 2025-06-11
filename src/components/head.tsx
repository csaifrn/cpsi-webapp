import { Button } from "./ui/button";

const Head = (props) => {
  const visivel = props.visivel ? !props.visivel : false;

	return (
		<header className="bg-blue-500 flex itens-center align-center justify-between py-4 px-5 " hidden={visivel}>
			<h2>
				<img src="/perfil-transparente.svg" />
			</h2>
			<figure>
				<Button className="bg-transparent border-0">
					<img src="/menu-sanduiche.svg" alt="botão de Menu " />
				</Button>
			</figure>
		</header>
	);
};

export { Head };
