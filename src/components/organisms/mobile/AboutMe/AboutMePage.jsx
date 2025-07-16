import "@/App.css";
import Header from "@/components/molecules/home/Header.jsx";
import AboutMe from "@/components/molecules/mobile/AboutMe/AboutMe.jsx";


const AboutMePage = () => {
  return (
    <>
      <div className="flex flex-col items-center text-[#ABB2BF] lg:h-auto">
        <Header />
        <AboutMe />
      </div>
    </>
  );
};

export default AboutMePage;


