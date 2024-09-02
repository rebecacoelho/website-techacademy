import Pic1 from '../../../public/nextjs.png'
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
      <SeePost title="Introdução ao Next.js" description="O Next.js se destaca como um framework essencial para desenvolvedores React que buscam criar aplicações web de maneira mais eficiente e robusta..." image={Pic1} />
      <SeePost title="Novidades do React 19" description="O React 19 está prestes a ser lançado e traz uma série de inovações que prometem transformar a maneira como desenvolvemos aplicações web..." image={Pic2} />
    </div>
   </div>
  );
};