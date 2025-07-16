import ContainerImg from "@/components/atoms/mobile/AboutMe/ContainerImg.jsx";
import AboutMeText from "@/components/atoms/mobile/AboutMe/AboutMeText.jsx";


const AboutMe = () => {
  return (
    <>
      <div className="mt-[5.5rem]">
        <ContainerImg />
        <AboutMeText />
        <footer className="h-[8.5%] w-full bg-transparent">
          <div className="flex flex-col lg:flex lg:flex-row max-w-full items-center justify-center gap-x-[1rem] pt-[16px] pt-[16px] pb-[8px] lg:mx-[171px]">
            <h1 className="text-sm font-semibold">
              Desenvolvido por Tiago de Noronha Leopoldo{" "}
            </h1>
            <p className="text-sm text-gray-400">
              ©2025 Todos os direitos reservados
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutMe;
