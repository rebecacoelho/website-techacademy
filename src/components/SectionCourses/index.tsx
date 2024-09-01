import Pic1 from '../../../public/html5.png'
import Pic2 from '../../../public/css3.png'
import Pic3 from '../../../public/JavaScript.png'
import Pic4 from '../../../public/reactjs.webp'
import { CourseHome } from '../CourseHome';

export const SectionCourses = () => {
  return (
   <div className="flex flex-col mt-16">
    <div className="flex flex-col w-full">
      <h3 className="text-4xl font-bold text-center">Conheça nossos cursos</h3>
      <div className="w-full flex justify-center">
        <div className="bg-black w-16 mt-2 h-0.5"></div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-around mt-8 gap-4 lg:gap-4 items-center">
      <CourseHome title="HTML5" description="Aprenda a estruturar páginas web utilizando HTML5, a base de toda a web moderna. Aprenda recursos essenciais para criar websites acessíveis e bem organizados." image={Pic1} initialHref='curso' />
      <CourseHome title="CSS3" description="Domine o design e a estilização de páginas web com CSS3. Este curso ensina desde o básico, permitindo que você crie interfaces visualmente atraentes e adaptáveis." image={Pic2} initialHref='curso' />
      <CourseHome title="JavaScript" description="Torne suas páginas interativas com JavaScript, aprendendo desde os fundamentos, e integrando com HTML5 e CSS3 para criar experiências envolventes." image={Pic3} initialHref='curso' />
      <CourseHome title="ReactJS" description="Em breve..." image={Pic4} disabledButton />
    </div>
   </div>
  );
};