'use client';

import Image from 'next/image';
import { slugify } from '@/utils/formatUrl';
import Post1 from '../../../../public/nextjs.png'
import Post2 from '../../../../public/reactjs.webp'
import '../../globals.css'
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


const posts = [
  {
    title: "Introdução ao Next.js",
    image: Post1,
    description: "O Next.js se destaca como um framework essencial para desenvolvedores React que buscam criar aplicações web de maneira mais eficiente e robusta. Diferente de uma biblioteca que oferece apenas ferramentas, o Next.js fornece uma estrutura básica e pré-configurada que inclui funcionalidades como roteamento automático e Server-Side Rendering (SSR). O SSR é particularmente vantajoso para aplicações React voltadas a áreas públicas, pois permite que o conteúdo seja renderizado no servidor e entregue ao usuário já processado, o que não só melhora a performance, mas também facilita a indexação por mecanismos de busca. Além disso, o Next.js introduz o conceito de 'file-system routing', onde a estrutura de pastas do diretório 'app' define automaticamente as rotas da aplicação, simplificando ainda mais o processo de desenvolvimento. Essa abordagem permite que desenvolvedores criem projetos que integrem tanto componentes do servidor quanto do cliente, combinando interatividade e desempenho.",
    content: "Outro ponto de destaque no Next.js são os Server Components, que ajudam a reduzir o tamanho do pacote JavaScript do lado do cliente e tornam o carregamento inicial da página mais rápido. Embora os Server Components não permitam interatividade diretamente do lado do cliente (como useState e useEffect), é possível hidratá-los usando a flag 'use-client', possibilitando a criação de aplicativos híbridos que aproveitam o melhor dos dois mundos: servidor e cliente. Para iniciar um projeto Next.js, pode-se utilizar o utilitário 'Create Next App', que, além de configurar a estrutura básica, oferece opções de personalização como TypeScript, ESLint e Tailwind CSS. O Next.js é, sem dúvida, uma ferramenta poderosa para quem está iniciando no mundo dos frameworks ou para desenvolvedores React que desejam otimizar o processo de criação de aplicações web modernas e performáticas. Com sua popularidade crescente e adoção por empresas, dominar o Next.js é um diferencial significativo para qualquer desenvolvedor que busca se destacar no mercado de trabalho. Para mais detalhes, consulte o post completo em https://blog.rocketseat.com.br/introducao-ao-next-js/",
    label: "Tecnologia"
  },
  {
    title: "Novidades do React 19",
    image: Post2,
    description: "O React 19 está prestes a ser lançado e traz uma série de inovações que prometem transformar a maneira como desenvolvemos aplicações web. Entre as principais novidades está o React Compiler, uma ferramenta que automatiza a otimização da renderização dos componentes, eliminando a necessidade de memorização manual com hooks como useMemo, useCallback e memo. Com o React Compiler, apenas as partes necessárias da interface são atualizadas quando o estado muda, o que melhora significativamente o desempenho e simplifica o código. Outro recurso poderoso introduzido nessa versão são as Actions, que oferecem uma maneira mais intuitiva de enviar dados entre o cliente e o servidor, facilitando a execução de mutações no banco de dados e o gerenciamento de formulários. As Actions permitem o uso de funções assíncronas, integrando perfeitamente a experiência de transições com async/await, e fornecem novos hooks como useFormStatus e useFormState para acessar e gerenciar o estado dos formulários. Além disso, o uso otimista de estado com o hook useOptimistic permite aplicar atualizações temporárias que são revertidas automaticamente quando o estado final é confirmado, garantindo uma experiência de usuário mais fluida e interativa.",
    content: "Além dessas inovações, o React 19 também traz os React Canaries, que representam uma nova abordagem para o desenvolvimento de recursos. Com os Canaries, os desenvolvedores podem adotar novos recursos individualmente assim que estiverem próximos da versão final, permitindo que a comunidade participe ativamente do processo de refinamento antes do lançamento oficial. Entre os novos recursos já disponíveis no React Canary estão as diretivas use client e use server, que permitem a criação de componentes reutilizáveis que integram interatividade do lado do cliente com lógica do lado do servidor. Outra adição importante são os novos hooks experimentais, como use(Promise) e use(Context), que visam simplificar o carregamento de dados assíncronos e o acesso ao contexto, respectivamente. Esses hooks, embora ainda em fase experimental, abrem novas possibilidades para o desenvolvimento React, proporcionando uma experiência de desenvolvimento mais coesa e eficiente. À medida que o React 19 se aproxima de seu lançamento, estamos vendo uma evolução significativa na biblioteca, com melhorias que não só ampliam suas capacidades, mas também facilitam a vida dos desenvolvedores. Para mais detalhes, consulte o post completo em https://vinniciusgomes.medium.com/o-react-19-ja-esta-chegando-conheca-as-novas-features-1530a1f932a4",
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
          <div className='mt-6 flex justify-center lg:px-[6.5rem] max-h-[512px]'>
            <Image src={post.image} alt={post.title} className='rounded-md'/>
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
