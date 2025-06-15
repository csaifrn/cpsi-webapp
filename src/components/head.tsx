import { SquareUser, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-500 text-white h-20">
      <ol className="flex flex-row justify-between">
        <li><a href="#"><SquareUser className="h-10 w-10 mt-5 ml-5" /></a></li>
        <li><a href="#"><Menu className="h-10 w-10 mt-5 mr-5" /></a></li>
      </ol>
    </header>
  );
}
