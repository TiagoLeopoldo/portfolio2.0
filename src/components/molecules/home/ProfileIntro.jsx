import '@/App.css';
import Greeting from '@/components/atoms/home/ProfileIntro/Greeting.jsx';
import Avatar from '@/components/atoms/home/ProfileIntro/Avatar.jsx';

const ProfileIntro = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full z-[9998]">
      <section className="container flex flex-col items-center justify-between p-0 m-0 max-w-full lg:flex-row lg:max-w-full lg:mx-[20%] lg:mt-[10%] lg:gap-[13rem]">
        <Greeting />
        <Avatar />
      </section>
    </div>
  );
};

export default ProfileIntro;
