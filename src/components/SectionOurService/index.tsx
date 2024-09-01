import { Service } from "../Service";
import Remedio from '../../../public/remedio.png'
import Lupa from '../../../public/lupa.png'
import Online from '../../../public/online-test.png'

export const SectionOurService = () => {
  return (
   <div className="flex flex-col mt-16 bg-[#4D2C5E] rounded-lg shadow-lg py-12">
    <div className="flex flex-col md:flex-row justify-around mx-4 md:mx-16 gap-4 items-center">
      <Service title="Procure seu remédio" description="Procure em nosso banco os remédios que você possui dúvidas sobre para entender melhor seus beneficios e maleficios." image={Online} />
      <Service title="Filtre suas pesquisas" description="Faça filtros que permite que você encontre os remédios que você pode tomar dependendo da sua condição." image={Remedio} />
      <Service title="Filtre suas pesquisas" description="Faça filtros que permite que você encontre os remédios que você pode tomar dependendo da sua condição." image={Remedio}/>
    </div>
   </div>
  );
};