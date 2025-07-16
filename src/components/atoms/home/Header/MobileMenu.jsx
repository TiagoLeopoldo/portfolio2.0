import { useState } from "react";
import menuButton from "@assets/profile/header/menuButton.svg";
import closeButton from "@assets/profile/header/close.svg";
import Github from "@assets/profile/header/Github.svg";
import Linkedin from "@assets/profile/header/Linkedin.svg";
import Email from "@assets/profile/header/Email.svg";

const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="w-6 h-6 bg-transparent lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={isOpen ? closeButton : menuButton} alt="menu" />
      </button>

      <nav
        className={`absolute right-0 top-[48px] w-[300px] max-h-[592px] bg-[#282C33] p-4 transition-all duration-500 ease-in-out ${
          isOpen
            ? "block opacity-100 translate-x-0"
            : "opacity-0 translate-x-[100%]"
        }`}
      >
        <ul className="flex flex-col items-start w-[300px] max-h-[338px] overflow-hidden">
          <li className="px-4 hover:font-medium">
            <span className="text-[#1B98E0] text-[32px]">#</span>
            <a href="" className="text-[#ABB2BF] text-[32px]">
              inicio
            </a>
          </li>
          <li className="px-4">
            <span className="text-[#1B98E0] text-[32px]">#</span>
            <a href="" className="text-[#ABB2BF] text-[32px]">
              projetos & experiências
            </a>
          </li>
          <li className="px-4 hover:font-medium">
            <span className="text-[#1B98E0] text-[32px]">#</span>
            <a href="" className="text-[#ABB2BF] text-[32px]">
              sobre mim
            </a>
          </li>
        </ul>
        <div className="flex justify-center items-center w-auto max-h-[338px] mt-[107px] mb-[36px] overflow-hidden">
          <a
            href="https://github.com/TiagoLeopoldo"
            target="_blank"
            rel="noopener noreferrer"
            alt="GitHub Tiago"
          >
            <img
              src={Github}
              alt="GitHub Tiago icon"
              className="w-[64px] h-[64px]"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tiago-noronha-leopoldo/"
            target="_blank"
            rel="noopener noreferrer"
            alt="LinkedIn Tiago"
          >
            <img
              src={Linkedin}
              alt="LinkedIn Tiago icon"
              className="w-[64px] h-[64px]"
            />
          </a>
          <a
            href="mailto:tnleopoldo.dev@gmail.com?subject=Contato%20via%20portfólio&body=Olá%20Tiago,%20gostaria%20de%20conversar%20sobre%20seu%20trabalho."
            alt="Mande um email para tnleopoldo.dev@gmail.com"
          >
            <img
              src={Email}
              alt="E-mail Tiago icon"
              className="w-[64px] h-[64px]"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenuButton;

// falta a parte logica, alinhar o links aos endereços externos
//falta a parte logica, alinhas os links com os endereços interno
