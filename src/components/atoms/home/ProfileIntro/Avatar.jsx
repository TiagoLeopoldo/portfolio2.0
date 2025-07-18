import "@/App.css";
import bioImg from "@assets/profile/HomePage/avatar.webp";
import logo from "@assets/profile/HomePage/logoblue.webp";
import layer from "@assets/profile/HomePage/camada.svg";

const Avatar = () => {



  return (
    // Container principal responsivo - muda layout em breakpoint lg (1024px)
    <div className="flex flex-col w-[306px] h-[250.08px] mt-5 lg:mt-0 mr-[22px] mb-[47px] ml-[22px] relative lg:h-[393px] lg:w-[469px] lg:items-center lg:mr-[100px]">
      {/* Container interno para os elementos de imagem */}
      <div className="relative lg:w-[469px]">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="absolute left-0 bottom-[99px] w-[110px] z-5 lg:bottom-[150px] lg:w-[160px]"
        />

        {/* Imagem do avatar*/}
        <img
          src={bioImg}
          alt="Tiago"
          className="relative z-10 object-contain lg:h-[457px] lg:w-[469px]"
        />

        {/* Elementos decorativos (layers) com filtro invert e posicionamento absoluto */}
        <img
          className="w-[80px] h-[80px] absolute right-0 bottom-[66.65px] z-8 filter invert lg:w-[110px] lg:h-[110px] lg:bottom-[130.65px] "
          src={layer}
          alt=""
        />
        <img
          className="w-[80px] h-[80px] absolute left-[90.78px] bottom-[220.65px] z-8 filter invert lg:w-[90px] lg:h-[90px] lg:left-[150.78px] lg:bottom-[330.65px]"
          src={layer}
          alt=""
        />
        <img
          className="w-[80px] h-[80px] absolute left-[20px] bottom-[20.65px] z-8 filter invert lg:bottom-[80.65px]"
          src={layer}
          alt=""
        />
      </div>
    </div>
  );
};

export default Avatar;
