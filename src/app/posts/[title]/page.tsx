'use client';

import Image from 'next/image';
import { slugify } from '@/utils/formatUrl';
import Post1 from '../../../../public/html5.png'
import Post2 from '../../../../public/css3.png'
import '../../globals.css'
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


const posts = [
  {
    title: "NextJS",
    image: Post1,
    description: "De acordo com o IBGE As famílias brasileiras gastaram cerca de R$ 168,3 bilhões em medicamentos em 2021, ano de pandemia, o que representa 33,7% de todas despesas que elas tiveram com saúde no ano. Gasto esse que subiu em relação ao ano anterior, foi de R$ 143,1 bilhões com a remédios em 2020, o que correspondia a 31,8% das despesas com saúde.“Os gastos com saúde têm uma tendência de alta, tanto pelo envelhecimento da população como pela incorporação de novas tecnologias em saúde e devido ao aumento de medicamentos e planos de saúde.“ -Tassia Holguin, técnica do IBGE e analista da pesquisa.O aumento nos gastos com medicamentos pode ser atribuído a diversos fatores relacionados à pandemia de COVID-19. Com uma necessidade de tratamento para o vírus, bem como o aumento da procura por medicamentos preventivos e paliativos, contribuiu significativamente para esse crescimento.",
    content: "Além disso, a inflação dos preços dos medicamentos e a maior conscientização sobre a importância de manter a saúde em dia também influenciaram esses números.Outro aspecto relevante é a desigualdade no acesso aos serviços de saúde. Muitas famílias brasileiras dependem exclusivamente do Sistema Único de Saúde (SUS), que enfrentou desafios adicionais durante a pandemia. Como resultado, muitas pessoas recorreram à compra de medicamentos por conta própria, aumentando assim os gastos domésticos. Esse cenário ressalta a importância de políticas públicas eficazes para garantir que todos tenham acesso a cuidados de saúde acessíveis e de qualidade, especialmente em tempos de crise sanitária. -Durães, U. (2024, abril 5). IBGE: 1/3 do gasto das famílias com saúde em 2021 foi para comprar remédio. UOL. https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2024/04/05/ibge-gastos-despesas-saude.html",
    label: "Tecnologia"
  },
  {
    title: "React 19",
    image: Post2,
    description: "De acordo com a OMS a aspirina, foi a primeira droga sintética, introduzida em 1897. Desde então, foram feitos progressos extraordinários em medicamentos para uma ampla gama de problemas de saúde, incluindo doenças, saúde mental e outros distúrbios. Existem atualmente milhares de medicamentos no mercado que podem prevenir, tratar e aliviar os efeitos de doenças que seriam fatais há apenas algumas gerações. Ao mesmo tempo, a resistência antimicrobiana está a desafiar a eficácia de muitos medicamentos comummente utilizados, representando uma das ameaças mais preocupantes à saúde global da atualidade. Os medicamentos evoluíram significativamente ao longo do tempo, transformando-se de simples remédios herbais em produtos farmacêuticos sofisticados que podem alvejar doenças específicas com alta precisão. Essa evolução tem sido crucial para aumentar a expectativa de vida e melhorar a qualidade de vida. -Organização Mundial da Saúde. The World Medicines Situation 2011. Relatório da OMS 2011.",
    content: "O acesso a medicamentos apropriados tem efeitos substanciais na saúde comunitária e nos indicadores económicos relacionados. Medicamentos, vacinas e dispositivos de qualidade garantida, seguros e eficazes são essenciais para o funcionamento dos sistemas de saúde. No entanto, o comércio globalizado pode minar a regulamentação e aumentar a incidência de medicamentos de qualidade inferior e falsificados, especialmente em ambientes com recursos limitados. O trabalho para expandir o acesso a medicamentos essenciais e limitar a propagação de produtos contrafeitos está no centro da estratégia global de medicamentos da OMS. A evolução dos medicamentos melhorou a expectativa e a qualidade de vida, mas o comércio globalizado aumenta o risco de produtos falsificados, especialmente em áreas com poucos recursos. A OMS trabalha para expandir o acesso a medicamentos essenciais e combater produtos contrafeitos, promovendo políticas de regulação e distribuição eficazes para fortalecer os sistemas de saúde globais. -Medicamentos. ([s.d.]). Who.int. Recuperado 2 de junho de 2024, de https://www.who.int/es/health-topics/medicines",
    label: "Tecnologia"
  },
];


const PostPage = ({ params }: { params: { title: string } }) => {
  const post = posts.find(p => slugify(p.title) === params.title);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <div className="bg-white">
      <div className='container'>
        <Header />
        <div className='py-4 pb-8 lg:px-32 rounded-md'>
          <div className='bg-[#4B6BFB] w-fit py-1 px-3 text-white rounded-md xl:ml-[6.5rem]'>
            {post.label}
          </div>
          <h2 className='text-left text-4xl font-bold my-6 xl:pl-[6.5rem]'>{post.title}</h2>
          <div className='mt-6 flex justify-center'>
            <Image src={post.image} alt={post.title} />
          </div>
          <div className='flex flex-col gap-2 text-left mt-4 xl:mx-4 xl:px-[5.5rem]'>
            <p className='font-normal text-lg'>{post.description}</p>
          </div>
          <div className='mt-6 flex justify-center text-left xl:mx-4 xl:px-[5.5rem]'>
            <p className='text-lg'>{post.content}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;
