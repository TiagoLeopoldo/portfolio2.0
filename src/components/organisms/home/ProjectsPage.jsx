import { useEffect, useState } from "react";
import "@/App.css";
import Header from "@/components/molecules/home/Header.jsx";
import Footer from "@/components/molecules/home/Footer.jsx";

// 🔹 Constante fora do componente para evitar warning do ESLint
const dotSequence = ["", ".", "..", "..."];

const ProjectsPage = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        const currentIndex = dotSequence.indexOf(prev);
        const nextIndex = (currentIndex + 1) % dotSequence.length;
        return dotSequence[nextIndex];
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <div className="flex flex-col justify-center items-center h-[calc(100vh-8rem)] text-[#ABB2BF] text-center">
        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-extrabold tracking-wide animate-pulse">
          EM DESENVOLVIMENTO{dots}
        </h1>
      </div>

      <Footer />
    </>
  );
};

export default ProjectsPage;