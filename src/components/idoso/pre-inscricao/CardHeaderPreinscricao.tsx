interface CardHeaderProps {
    title: string;
}

const CardHeaderPreinscricao = ({ title }: CardHeaderProps) => {
    return (
        <h1 className="my-6 text-xl text-center">
            {title}
        </h1>
    );
}

export default CardHeaderPreinscricao;
