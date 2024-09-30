'use client';

import Image from 'next/image';
import { slugify } from '@/utils/formatUrl';
import HtmlIMG from '../../../../public/html5.png';
import CssIMG from '../../../../public/css3.png';
import JavascriptIMG from '../../../../public/JavaScript.png';
import Post1 from '../../../../public/nextjs.png';
import Post2 from '../../../../public/reactjs.webp';
import '../../globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';

const courses = [
  {
    title: "HTML5",
    image: Post1,
    description: "Neste vídeo, você será introduzido ao HTML, a linguagem fundamental para a construção de páginas da web. Vamos explorar a estrutura básica de um documento HTML, incluindo a declaração do tipo de documento e as principais tags como <html>, <head>, e <body>. Você aprenderá a criar cabeçalhos, parágrafos, links e imagens, além de entender a importância da semântica no HTML. Ao final, você terá as habilidades necessárias para criar um esqueleto de página web funcional!",
    videoLink: "https://link-do-video.com/html5",
  },
  {
    title: "CSS3",
    image: Post2,
    description: "Aprenda como transformar suas páginas web utilizando CSS! Neste vídeo, vamos abordar como aplicar estilos básicos a elementos HTML, explorando conceitos como seletores, propriedades e valores. Você verá como usar o CSS para modificar cores, fontes, tamanhos e espaçamentos, além de aprender sobre o box model e como criar layouts responsivos. No final deste vídeo, você será capaz de estilizar suas páginas de forma a criar experiências visuais atraentes e funcionais.",
    videoLink: "https://link-do-video.com/css3",
  },
  {
    title: "JavaScript",
    image: Post2,
    description: "Dê o primeiro passo na programação com JavaScript, a linguagem que traz interatividade para a web! Neste vídeo, você aprenderá sobre os conceitos básicos de JavaScript, incluindo variáveis, tipos de dados, operadores e estruturas de controle. Vamos explorar como criar funções e como trabalhar com o Document Object Model (DOM) para interagir com elementos da sua página. Ao final deste vídeo, você terá as ferramentas necessárias para adicionar dinamismo e funcionalidades aos seus projetos web.",
    videoLink: "https://link-do-video.com/css3",
  },
];

const CoursePage = ({ params }: { params: { title: string } }) => {
  const course = courses.find(c => slugify(c.title) === params.title);

  if (!course) {
    return <div>Curso não encontrado</div>;
  }

  return (
    <div className="bg-[#f5f5f7]">
      <div className='container'>
        <Header />
        <div className='lg:flex'>
          <div className='py-4 pb-8 lg:px-12 rounded-md'>
            <div className='bg-[#fc6714] w-fit py-1 px-3 text-white rounded-md xl:ml-[6.5rem]'>
              Iniciante
            </div>
            <h2 className='text-left text-4xl font-bold mt-4 xl:pl-[6.5rem] text-[#7e7e80]'>Curso</h2>
            <h2 className='text-left text-4xl font-bold mb-4 mt-8 xl:pl-[6.5rem]'>{course.title}</h2>
            <div className='mt-6 flex justify-center lg:px-[6.5rem] max-h-[512px]'>
              <Image src={course.image} alt={course.title} className='rounded-md'/>
            </div>
            <div className='flex flex-col gap-2 text-left mt-4 xl:mx-4 xl:px-[5.5rem]'>
              <div className='my-2'>
                <span className='font-bold text-lg underline'>Sobre esse curso:</span>
              </div>
              <p className='font-normal text-md text-justify'>{course.description}</p>
            </div>
          </div>
          <div className='flex justify-center items-center lg:w-9/12'>
            <div>
              <span className='font-bold block text-center mb-2 text-xl'>Conheça nossos cursos</span>
              <div className='flex flex-col gap-4'>
                <CourseCard
                  title="HTML5"
                  imageUrl={HtmlIMG}
                  courseUrl="/curso/html5"
                />
                <CourseCard
                  title="CSS3"
                  imageUrl={CssIMG}
                  courseUrl="/curso/css3"
                />
                <CourseCard
                  title="JavaScript"
                  imageUrl={JavascriptIMG}
                  courseUrl="/curso/javascript"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
