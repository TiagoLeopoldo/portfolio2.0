import '@/App.css';
import Greeting from '@/components/atoms/home/ProfileIntro/Greeting.jsx';
import Avatar from '@/components/atoms/home/ProfileIntro/Avatar.jsx';

const ProfileIntro = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[9998] block">
      <section className="flex flex-col items-center justify-between p-0 m-0 max-w-full lg:flex-row lg:m-w-full lg:mx-[171px] lg:mt-[250px]">
        <Greeting />
        <Avatar />
      </section>
    </div>
  );
};

export default ProfileIntro;
