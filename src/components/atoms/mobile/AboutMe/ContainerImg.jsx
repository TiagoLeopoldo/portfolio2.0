import familyImg from "@assets/profile/AboutMe/family.jpg";

const ContainerImg = () => {
  return (
    <div className="flex justify-center items-center ">
      <img src={familyImg} alt="imagem da familia" className="border border-solid border-[#1B98E0] rounded-md shadow-md rounded-lg shadow-lg h-[90%]" />
    </div>
  )
};

export default ContainerImg;