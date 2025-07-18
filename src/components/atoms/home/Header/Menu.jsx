import "@/App.css";
import { useState } from "react";
import AboutMe from "../ProfileIntro/AboutMe.jsx";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul className="hidden lg:flex flex-row w-full max-w-[1280px] h-[61px] items-center justify-center pt-[32px] pb-[8px] px-[2rem] mx-auto gap-x-[2rem]">
        <li className="px-4 hover:font-bold">
          <span className="text-[#1B98E0]">#</span>
          <Link to="/" className="text-[#ABB2BF] text-[16px]">
            inicio
          </Link>
        </li>
        <li className="px-4 hover:font-bold">
          <span className="text-[#1B98E0]">#</span>
          <Link to="/projects&experiences" className="text-[#ABB2BF] text-[16px]">
            projetos-&-experiências
          </Link>
        </li>
        <li className="px-4 hover:font-bold">
          <span className="text-[#1B98E0]">#</span>
          <button
            onClick={() => setIsOpen(true)}
            className="text-[#ABB2BF] text-[16px] cursor-pointer bg-transparent border-none p-0"
          >
            sobre-mim
          </button>
        </li>
      </ul>

      <AboutMe isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Menu;