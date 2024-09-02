import { Service } from "../Service";
import Online from '../../../public/online-test.png'
import Lupa from '../../../public/lupa.png'
import Exam from '../../../public/exam.png'

export const SectionOurService = () => {
  return (
   <div className="flex flex-col mt-16 bg-[#4D2C5E] rounded-lg shadow-lg py-12">
    <div className="flex flex-col md:flex-row justify-around mx-4 md:mx-16 gap-4 items-center">
      <Service title="Aprenda a Programar" description="Desenvolva suas habilidades em linguagens essenciais como JavaScript e HTML5, e prepare-se para criar soluções inovadoras." image={Exam} />
      <Service title="Desenvolvimento Web Completo" description="Domine a arte de construir websites modernos e responsivos. Nossos cursos abrangem desde o design visual com CSS3 até a implementação de funcionalidades dinâmicas com JavaScript." image={Online} />
      <Service title="Suporte Personalizado" description="Seja para iniciar na carreira tecnológica ou aprimorar suas habilidades, nossa mentoria personalizada te ajuda a alcançar seus objetivos profissionais" image={Lupa}/>
    </div>
   </div>
  );
};