import { SquareUser, Menu } from 'lucide-react';


const Head = (props) => {
  const visivel = props.visivel ? !props.visivel : false;
    return (
      <header className="bg-principal-blue text-white h-20" hidden={visivel}>
        <ol className="flex flex-row justify-around gap-80">
          <li><a href="#"><SquareUser className=" h-10 w-10 mt-5"/></a></li>
          <li><a href="#"><Menu className=" h-10 w-10 mt-5"/></a></li>
        </ol>
      </header>
    );
}
export { Head };
