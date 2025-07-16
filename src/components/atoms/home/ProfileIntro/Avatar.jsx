import "@/App.css";
import bioImg from "@assets/profile/HomePage/avatar.webp";
import logo from "@assets/profile/HomePage/logoblue.webp";
import layer from "@assets/profile/HomePage/camada.svg";
import fetchData from "@/services/fetchPortfolioData.js";
import { useEffect , useState } from "react";

const Avatar = () => {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetchData().then(setPortfolio);
  }, []);


  return (
    // Container principal responsivo - muda layout em breakpoint lg (1024px)
    <div className="flex flex-col w-[316px] h-[260.08px] mt-5 lg:mt-0 mr-[22px] mb-[47px] ml-[22px] relative lg:h-[393px] lg:w-[469px] lg:items-center lg:mr-[100px]">
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

      {/* Container inferior com texto */}
      <div className="w-full h-[58px] p-[8px] border border-[#ABB2BF] flex items-center justify-center lg:w-[390px] lg:h-[37px]">
        <ul className="p-0 flex items-start">
          <li className="relative flex items-center pl-[29px] before:content-[''] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:w-[16px] before:h-[16px] before:bg-[#1B98E0] font-medium text-[10px] text-[#ABB2BF]">
            <p className="font-semibold text-white">
              {!portfolio ? "loading..." : portfolio.education}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Avatar;
