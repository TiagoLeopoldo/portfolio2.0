import '@/App.css';
import verticalLine from '@assets/profile/header/verticalline.svg';
import Github from '@assets/profile/header/Github.svg';
import Linkedin from '@assets/profile/header/Linkedin.svg';
import Email from '@assets/profile/header/Email.svg';

const SocialLinksBar = () => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-between gap-0 w-[32px] h-[311px] p-0 fixed top-0 left-[17px] z-[9999] border-t">
      <img src={verticalLine} alt="Linha" className="fill-[#1B98E0]" />
      <div>
        <a href="https://github.com/TiagoLeopoldo" target="_blank" rel="noopener noreferrer" alt="GitHub Tiago">
          <img
            src={Github}
            alt=""
            className="w-[64px] h-[64px] transition duration-300 hover:opacity-100 opacity-70"
          />
        </a>
        <a href="https://www.linkedin.com/in/tiago-noronha-leopoldo/" target="_blank" rel="noopener noreferrer" alt="LinkedIn Tiago">
          <img
            src={Linkedin}
            alt=""
            className="w-[64px] h-[64px] transition duration-300 hover:opacity-100 opacity-70"
          />
        </a>
        <a href="mailto:tnleopoldo.dev@gmail.com?subject=Contato%20via%20portfólio&body=Olá%20Tiago,%20gostaria%20de%20conversar%20sobre%20seu%20trabalho." alt="Mande um email para tnleopoldo.dev@gmail.com">
          <img
            src={Email}
            alt=""
            className="w-[64px] h-[64px] transition duration-300 hover:opacity-100 opacity-70"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialLinksBar;
