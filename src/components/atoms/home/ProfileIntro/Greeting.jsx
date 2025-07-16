import { useEffect, useState, useRef } from "react";
import fetchData from "@/services/fetchPortfolioData.js";
import Wtsp from "@assets/profile/HomePage/wtsp.svg";
import ModalForm from "./ModalForm.jsx";
import "@/App.css";

const Greeting = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Texto que será exibido com efeito de digitação
  const [texto, setTexto] = useState("");
  const textoCompleto =
    "Transformando códigos em experiências globais e acessíveis,\nbuscando novos desafios para escalar soluções inovadoras.";
  const indexRef = useRef(0); // guarda o índice atual fora do ciclo de renderização
  const timeoutRef = useRef(null); // guarda a referência do setTimeout

  useEffect(() => {
    fetchData().then(setPortfolio);
  }, []);

  useEffect(() => {
    const digitar = () => {
      if (indexRef.current < textoCompleto.length) {
        setTexto((prev) => prev + textoCompleto.charAt(indexRef.current));
        indexRef.current++;
        timeoutRef.current = setTimeout(digitar, 40); // tempo entre cada letra
      }
    };

    digitar();

    // limpeza do timeout ao desmontar o componente
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="w-full flex flex-col items-center text-[#ABB2BF] text-[32px] mt-[8rem] lg:mt-[5.125rem] pr-[1rem] pb-[1.5rem] pl-[1rem] gap-[1.5625rem] lg:items-start">
      <div className="items-center justify-between m-auto">
        <h1 className="text-[#ABB2BF] text-[2rem] font-semibold">
          Olá,
          <br className="lg:hidden" /> eu sou o{" "}
          {!portfolio ? "loading..." : portfolio.name}! <br />
          <span className="text-[#1B98E0] text-[2rem] font-semibold">
            {!portfolio ? "loading..." : portfolio.job}
          </span>
        </h1>

        {/* Parágrafo com efeito de digitação e espaço reservado para estabilidade de layout */}
        <p className="text-[#ABB2BF] text-[1rem] w-full text-justify lg:text-left whitespace-pre-line font-mono relative">
          <span className="invisible">{textoCompleto}</span>
          <span className="absolute left-0 top-0">{texto}</span>
        </p>
        <div className="flex gap-[1rem]">
          <a
            href="https://drive.google.com/file/d/1To8wbECzJteJNBidPUFmnODSAQ11hy--/view"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center w-[9.25rem] h-[2.3125rem] border border-solid border-[#1B98E0] rounded-md shadow-md text-center text-[0.9375rem] font-medium font-bold p-[0.5rem_1rem_0.5rem_1rem] opacity-70 mt-[0.625rem] transition-all duration-300 hover:shadow-lg active:scale-[0.8]"
          >
            Currículo
          </a>
          <a
            href="https://wa.me/5521974278358?text=Entre%20em%20contato%20com%20Tiago"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center w-[10rem] h-[2.3125rem] border border-solid border-[#1B98E0] rounded-md shadow-md text-center text-[0.9375rem] font-medium font-bold p-[0.5rem_1rem_0.5rem_1rem] opacity-70 mt-[0.625rem] transition-all duration-300 hover:shadow-lg active:scale-[0.8] gap-x-[0.5rem] whitespace-nowrap"
          >
            Whatsapp
            <img src={Wtsp} alt="" className="w-[1.3rem]" />
          </a>

          <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} />

          <button
            onClick={() => setIsOpen(true)}
            className="hidden lg:flex items-center justify-center max-w-full h-[2.3125rem] border border-solid border-[#1B98E0] rounded-md shadow-md text-center text-[0.9375rem] font-medium font-bold p-[0.5rem_1rem_0.5rem_1rem] opacity-70 mt-[0.625rem] transition-all duration-300 hover:shadow-lg active:scale-[0.8] gap-x-[0.5rem] whitespace-nowrap"
          >
            Mande uma mensagem
          </button>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
