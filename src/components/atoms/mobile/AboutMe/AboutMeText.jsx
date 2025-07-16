const AboutMeText = () => {
  return (
      <section className="m-auto w-full flex flex-col items-center text-[#ABB2BF] mt-[3rem] lg:mt-[5.125rem] pr-[1rem] pb-[1.5rem] pl-[1rem] gap-[1.5625rem] lg:items-start">
        <div className="w-[75%] flex flex-col items-center m-auto">
          <h1 className="text-[#ABB2BF] text-[2rem] font-semibold ">
            Sobre mim
          </h1>
          <p className="text-[01rem] text-justify indent-3">
            Olá! Sou Tiago, graduando em Análise e Desenvolvimento de Sistemas.
            <br />
          </p>
          <p className="text-[01rem] text-justify indent-3">
            Minha trajetória começou na gastronomia, onde atuei por 10 anos e
            desenvolvi habilidades como organização, resiliência e trabalho em
            equipe. Com o tempo, decidi seguir um novo caminho — um que me
            desafiasse mais intelectualmente e me permitisse estar mais presente
            com minha família (nós na foto acima), que é minha base.
          </p>
          <p className="text-[01rem] text-justify indent-3">
            Escolhi a tecnologia por acreditar no seu poder de transformação. Me
            especializei em desenvolvimento Front-end com foco em React,
            JavaScript e Tailwind CSS. Estou estudando TypeScript e sigo
            explorando novas possibilidades dentro da área.
          </p>
          <p className="text-[01rem] text-justify indent-3">
            Este portfólio foi criado como ponto de partida. Aqui mostro não só
            minhas habilidades técnicas, mas também meu comprometimento, minha
            evolução e meu estilo de resolver problemas. Busco minha primeira
            oportunidade profissional, e cada linha de código que você verá aqui
            carrega esse propósito — abrir portas para contribuir, aprender e
            crescer.
          </p>
          <p className="text-[01rem] text-justify indent-3">
            Se quiser trocar ideias ou se conectar, será um prazer.<br/><br/>
            Obrigado por visitar meu portfólio.
          </p>

          <div className="flex gap-2 mt-[2rem]">
          <a
            href="https://drive.google.com/file/d/1To8wbECzJteJNBidPUFmnODSAQ11hy--/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[9.25rem] h-[2.3125rem] border border-solid border-[#1B98E0] rounded-md shadow-md text-center text-[0.9375rem] font-medium font-bold p-[0.5rem_1rem_0.5rem_1rem] opacity-70 mt-[0.625rem] transition-all duration-300 hover:shadow-lg active:scale-[0.8]"
          >
            Currículo
          </a>
          <button
            className="flex items-center justify-center max-w-full h-[2.3125rem] border border-solid border-[#1B98E0] rounded-md shadow-md text-center text-[0.9375rem] font-medium font-bold p-[0.5rem_1rem_0.5rem_1rem] opacity-70 mt-[0.625rem] transition-all duration-300 hover:shadow-lg active:scale-[0.8] gap-x-[0.5rem] whitespace-nowrap"
          >
            Portfólio & experiências
          </button>
          </div>
        </div>
      </section>
  );
};

export default AboutMeText;
