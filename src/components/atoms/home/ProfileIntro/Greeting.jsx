import { useEffect, useState, useRef } from "react";
import fetchData from "@/services/fetchPortfolioData.js";
import Wtsp from "@assets/profile/HomePage/wtsp.svg";
import ModalForm from "./ModalForm.jsx";
import "@/App.css";

const Greeting = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const [texto, setTexto] = useState("");
  const textoCompleto =
    "Transformando códigos em experiências acessíveis,\n buscando novos desafios para escalar soluções inovadoras.";
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    fetchData().then(setPortfolio);
  }, []);

  useEffect(() => {
    const digitar = () => {
      if (indexRef.current < textoCompleto.length) {
        setTexto((prev) => prev + textoCompleto.charAt(indexRef.current));
        indexRef.current++;
        timeoutRef.current = setTimeout(digitar, 40);
      }
    };

    digitar();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center text-[#ABB2BF] text-[32px] mt-[3rem] lg:mt-[5.125rem] px-[1rem] pb-[1.5rem] gap-[1.5625rem] lg:items-start">
      <div className="w-full items-center justify-center">
        <h1 className="text-[#ABB2BF] text-[2rem] font-semibold leading-snug">
          Olá,
          <br className="lg:hidden" /> eu sou o{" "}
          {!portfolio ? "loading..." : portfolio.name}! <br />
          <span className="text-[#1B98E0] text-[2rem] font-semibold">
            {!portfolio ? "loading..." : portfolio.job}
          </span>
        </h1>

        <p className="text-[#ABB2BF] text-[1rem] w-full text-justify lg:text-left whitespace-pre-line font-mono relative leading-relaxed">
          <span className="invisible">{textoCompleto}</span>
          <span className="absolute left-0 top-0">{texto}</span>
        </p>

        <div className="flex flex-wrap gap-[1rem] mt-[0.625rem]">
          <a
            href="https://docs.google.com/file/d/1n10SCEr97YrJvcRbNUjnuTMuipkxUftMj3uagX75EMs/view            "
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center w-[9.25rem] h-[2.3125rem] border border-solid border-[#1B98E0] rounded-md shadow-md text-center text-[0.9375rem] font-bold px-[1rem] opacity-70 transition-all duration-300 hover:shadow-lg active:scale-[0.95]"
          >
            Currículo
          </a>

          <a
            href="https://wa.me/5521974278358?text=Entre%20em%20contato%20com%20Tiago"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center w-[10rem] h-[2.3125rem] border border-solid border-[#1B98E0] rounded-md shadow-md text-[0.9375rem] font-bold px-[1rem] opacity-70 transition-all duration-300 hover:shadow-lg active:scale-[0.95] gap-x-[0.5rem] whitespace-nowrap"
          >
            Whatsapp
            <img src={Wtsp} alt="" className="w-[1.3rem]" />
          </a>

          <ModalForm isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />

          <button
            onClick={() => setIsOpenForm(true)}
            className="hidden lg:flex items-center justify-center h-[2.3125rem] border border-solid border-[#1B98E0] rounded-md shadow-md text-[0.9375rem] font-bold px-[1rem] opacity-70 transition-all duration-300 hover:shadow-lg active:scale-[0.95] gap-x-[0.5rem] whitespace-nowrap"
          >
            Mande uma mensagem
          </button>
        </div>
      </div>
    </div>
  );
};

export default Greeting;