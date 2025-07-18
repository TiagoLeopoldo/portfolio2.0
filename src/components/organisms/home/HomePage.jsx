import "@/App.css";
import Header from "@/components/molecules/home/Header.jsx";
import Biography from "@/components/molecules/home/ProfileIntro.jsx";
import Footer from "@/components/molecules/home/Footer.jsx";

const ProfileSection = () => {
  return (
    <>
      <div className="flex flex-col items-center h-[calc(100vh-8rem)] text-[#ABB2BF] lg:h-auto">
        <Header />
        <Biography />
        <Footer />
      </div>
    </>
  );
};

export default ProfileSection;


