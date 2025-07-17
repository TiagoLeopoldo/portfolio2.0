import "@/App.css";

const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 left-0 h-[8.5%] w-full z-[9999] bg-[#282C33]">
        <div className="flex flex-col lg:flex lg:flex-row max-w-full items-center justify-center gap-x-[1rem] pt-[16px] pt-[16px] pb-[8px] lg:mx-[171px]">
          <h1 className="text-sm font-semibold text-[#ABB2BF]">Desenvolvido por Tiago de Noronha Leopoldo </h1>
          <p className="text-sm text-gray-400">©2025 Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

//flex max-w-full items-center justify-center gap-x-[1rem] p-[16px] pt-[16px] pb-[8px] lg:mx-[171px] text-center lg:text-left"