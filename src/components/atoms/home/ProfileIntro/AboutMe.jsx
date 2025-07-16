import { useState, useRef, useEffect } from "react";
import family from "@assets/profile/AboutMe/family.jpg";

function AboutMe({ isOpen, setIsOpen }) {
  const [about, setAbout] = useState("");
  const textAboutMe = `  Olá! Sou Tiago, graduando em Análise e Desenvolvimento de Sistemas.


Minha trajetória começou na gastronomia, onde atuei por 10 anos e desenvolvi habilidades como organização, resiliência e trabalho em equipe. Com o tempo, decidi seguir um novo caminho — um que me desafiasse mais intelectualmente e me permitisse estar mais presente com minha família (nós na foto ao lado), que é minha base.

Escolhi a tecnologia por acreditar no seu poder de transformação. Me especializei em desenvolvimento Front-end com foco em React, JavaScript e Tailwind CSS. Estou estudando TypeScript e sigo explorando novas possibilidades dentro da área.

Este portfólio foi criado como ponto de partida. Aqui mostro não só minhas habilidades técnicas, mas também meu comprometimento, minha evolução e meu estilo de resolver problemas. Busco minha primeira oportunidade profissional, e cada linha de código que você verá aqui carrega esse propósito — abrir portas para contribuir, aprender e crescer.

Se quiser trocar ideias ou se conectar, será um prazer.

Obrigado por visitar meu portfólio.
`;
  const aboutRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    
    const writeAbout = () => {
      if (aboutRef.current < textAboutMe.length) {
        setAbout((prev) => prev + textAboutMe.charAt(aboutRef.current));
        aboutRef.current++;
        timeoutRef.current = setTimeout(writeAbout, 25);
      }
    };

    writeAbout();

    return () => clearTimeout(timeoutRef.current);
  }, [isOpen, textAboutMe]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent animate-fadeInModal">
      <div className="bg-[#282C33] border border-solid border-[#1B98E0] rounded-md shadow-md rounded-lg shadow-lg p-6 w-[90%] h-[75%] relative overflow-hidden">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
          aria-label="Fechar modal"
        >
          [fechar x]
        </button>
        <section className="flex mt-15 gap-5">
          <div className="border border-solid border-[#1B98E0] rounded-md shadow-md rounded-lg shadow-lg h-[90%]">
            <img
              src={family}
              alt="Família"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[75%]">
            <h1 className="text-[#ABB2BF] text-[2rem] font-semibold">
              Sobre mim
            </h1>
            <span className="whitespace-pre-line">{about}</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
