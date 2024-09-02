import Pic1 from '../../../public/css3.png'
import Pic2 from '../../../public/reactjs.webp'
import { SeePost } from "../SeePost";

export const SectionPublications = () => {
  return (
   <div className="flex flex-col mt-16">
    <div className="flex flex-col w-full">
      <h3 className="text-4xl font-bold text-center">Veja nossas últimas publicações</h3>
      <div className="w-full flex justify-center">
        <div className="bg-black w-16 mt-2 h-0.5"></div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-around mx-4 md:mx-16 mt-8 gap-4 lg:gap-0 items-center">
      <SeePost title="NextJS" description="De acordo com o IBGE As famílias brasileiras gastaram cerca de R$ 168,3 bilhões em medicamentos em 2021..." image={Pic1} />
      <SeePost title="React 19" description="De acordo com a OMS a aspirina, foi a primeira droga sintética, introduzida em 1897..." image={Pic2} />
    </div>
   </div>
  );
};