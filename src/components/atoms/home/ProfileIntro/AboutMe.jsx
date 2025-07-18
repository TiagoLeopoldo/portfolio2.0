import { useState, useRef, useEffect } from "react";
import family from "@assets/profile/AboutMe/family.jpg";

function AboutMe({ isOpen, setIsOpen }) {
  const [about, setAbout] = useState("");
  const textAboutMe = `  Olá! Sou Tiago, Desenvolvedor Front-end React.


Minha trajetória profissional começou na gastronomia, onde atuei por 10 anos e desenvolvi habilidades como organização, resiliência e trabalho em equipe. Com o tempo, decidi seguir um novo caminho — um que me desafiasse mais intelectualmente e me permitisse estar mais presente com minha família (nós na foto ao lado), que é minha base.

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
        timeoutRef.current = setTimeout(writeAbout, 5);
      }
    };

    writeAbout();

    return () => clearTimeout(timeoutRef.current);
  }, [isOpen, textAboutMe]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent animate-fadeInModal"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="bg-[#282C33] border border-solid border-[#1B98E0] rounded-md shadow-md rounded-lg shadow-lg p-6 w-[90%] h-[75%] relative overflow-hidden overflow-y-auto max-h-full pr-2">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
          aria-label="Fechar modal"
        >
          [fechar x]
        </button>

        <div className="flex gap-0">
          <span className="text-[#1B98E0] text-[2rem] font-semibold">/</span>
          <h1 className="text-[#FFFFFF] text-[2rem] font-semibold">
            sobre-mim
          </h1>
        </div>

        <section className="mt-[2rem] w-full max-w-[1280px] px-4 flex flex-col lg:flex-row gap-10">
          <section>
            <div className="flex gap-0">
              <span className="text-[#1B98E0] text-[1.5rem]">#</span>
              <h2 className="text-[#FFFFFF] text-[1.5rem] font-semibold">
                hard-skills
              </h2>
            </div>

            <div className="flex justify-start gap-6 mt-[3rem] lg:pl-[5rem]">
              {/* Linguagens */}
              <div className="flex flex-col gap-0">
                <div className="border border-solid border-[#ABB2BF] md:w-full">
                  <h1 className="text-[#FFFFFF] text-[1rem] font-semibold text-left p-[0.5rem]">
                    Linguagens
                  </h1>
                </div>
                <ul className="flex gap-2 flex-wrap border border-solid border-[#ABB2BF] p-[0.8rem]">
                  <li
                    className="relative group cursor-pointer text-yellow-400 hover:animate-pulse"
                    title="Linguagem de programação usada para criar interatividade em páginas web"
                  >
                    Javascript
                  </li>
                  <li
                    className="relative group cursor-pointer text-orange-400 hover:animate-pulse"
                    title="Linguagem de marcação usada para estruturar o conteúdo de páginas web"
                  >
                    HTML
                  </li>
                  <li
                    className="relative group cursor-pointer text-blue-400 hover:animate-pulse"
                    title="Linguagem de estilos usada para definir o visual das páginas web"
                  >
                    CSS
                  </li>
                </ul>
              </div>

              {/* Ferramentas */}
              <div className="flex flex-col gap-0">
                <div className="border border-solid border-[#ABB2BF]">
                  <h1 className="text-[#FFFFFF] text-[1rem] font-semibold text-left p-[0.5rem]">
                    Ferramentas
                  </h1>
                </div>
                <ul className="flex gap-2 flex-wrap border border-solid border-[#ABB2BF] p-[0.8rem]">
                  <li
                    className="relative group cursor-pointer text-indigo-400 hover:animate-pulse"
                    title="Editor de código leve e poderoso, usado para desenvolvimento em diversas linguagens"
                  >
                    VSCode
                  </li>
                  <li
                    className="relative group cursor-pointer text-red-400 hover:animate-pulse"
                    title="Git é um sistema de controle de versão; GitHub é uma plataforma para hospedar e colaborar em projetos usando Git"
                  >
                    Git
                  </li>
                  <li
                    className="relative group cursor-pointer text-purple-400 hover:animate-pulse"
                    title="Ferramenta de design colaborativo usada para criar interfaces, protótipos e experiências visuais"
                  >
                    Figma
                  </li>
                </ul>
              </div>

              {/* Bibliotecas */}
              <div className="flex flex-col gap-0">
                <div className="border border-solid border-[#ABB2BF]">
                  <h1 className="text-[#FFFFFF] text-[1rem] font-semibold text-left p-[0.5rem]">
                    Bibliotecas
                  </h1>
                </div>
                <ul className="flex gap-2 flex-wrap border border-solid border-[#ABB2BF] p-[0.8rem]">
                  <li
                    className="relative group cursor-pointer text-cyan-400 hover:animate-pulse"
                    title="Biblioteca JavaScript para construir interfaces de usuário reativas e componentizadas"
                  >
                    React
                  </li>
                  <li
                    className="relative group cursor-pointer text-teal-400 hover:animate-pulse"
                    title="Framework CSS utilitário que permite estilizar interfaces com classes rápidas e responsivas"
                  >
                    Tailwind-CSS
                  </li>
                </ul>
              </div>

              {/* Runtime */}
              <div className="flex flex-col gap-0">
                <div className="border border-solid border-[#ABB2BF]">
                  <h1 className="text-[#FFFFFF] text-[1rem] font-semibold text-left p-[0.5rem]">
                    Runtime
                  </h1>
                </div>
                <ul className="flex gap-2 border border-solid border-[#ABB2BF] p-[0.8rem]">
                  <li
                    className="relative group cursor-pointer text-green-500 hover:animate-pulse"
                    title="Ambiente de execução JavaScript no lado do servidor, usado para criar APIs e aplicações web escaláveis"
                  >
                    Node.js
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex gap-0">
              <span className="text-[#1B98E0] text-[1.5rem]">#</span>
              <h2 className="text-[#FFFFFF] text-[1.5rem] font-semibold">
                soft-skills
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row justify-start gap-6 mt-[3rem] lg:pl-[5rem]">
              <ul className="space-y-2">
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 text-[#ABB2BF] before:text-[#ABB2BF]">
                  Resolução de Problemas
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 text-[#ABB2BF] before:text-[#ABB2BF]">
                  Gestão de Tempo
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 text-[#ABB2BF] before:text-[#ABB2BF]">
                  Comunicação Eficaz
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 text-[#ABB2BF] before:text-[#ABB2BF]">
                  Adaptabilidade
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 text-[#ABB2BF] before:text-[#ABB2BF]">
                  Trabalho em Equipe
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 text-[#ABB2BF] before:text-[#ABB2BF]">
                  Aprendizado Contínuo
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 text-[#ABB2BF] before:text-[#ABB2BF]">
                  Um bullet aqui
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 text-[#ABB2BF] before:text-[#ABB2BF]">
                  Raciocínio Lógico
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section className="flex mt-15 gap-5">
          <div className="w-[75%] flex-col">
            <h2 className="text-[#ABB2BF] text-[2rem] mb-[2rem] font-semibold">
              Quem eu sou?
            </h2>
            <span className="whitespace-pre-line text-[#ABB2BF]">{about}</span>
          </div>
          <div className="border border-solid border-[#1B98E0] rounded-md shadow-md rounded-lg shadow-lg h-[90%]">
            <img
              src={family}
              alt="Família"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
