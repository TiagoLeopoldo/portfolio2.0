import "@/App.css";
import MobileMenuButton from '@/components/atoms/home/Header/MobileMenu.jsx';
import Logo from '@/components/atoms/home/Header/Logo.jsx';
import Menu from '@/components/atoms/home/Header/Menu.jsx'
import Bar from '@/components/atoms/home/Header/SocialLinksBar.jsx'

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[9999] bg-[#282C33]">
        <div className="flex max-w-full items-center justify-between p-[16px] pt-[16px] pb-[8px] lg:mx-[171px]" aria-label="Global">
          <Logo className="lg:flex-1" />
          <nav>
            <MobileMenuButton />
            <Menu />
          </nav>
        </div>
        <Bar />
      </header>
    </>
  );
};

export default Header;