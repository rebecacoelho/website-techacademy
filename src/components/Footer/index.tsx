import Link from 'next/link';
import Logo from '../../../public/logo.png'
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='bg-[#FDF8EE] shadow-lg flex justify-center items-center mt-24 py-16'>
      <div className='flex flex-col justify-center gap-4'>
        <Link className='flex justify-center' href="/">
          <Image src={Logo} alt="Logo" width={70} height={40} />
        </Link>
        <div className='px-6 w-full flex flex-col justify-center'>
          <p className='text-black text-center'>Tech Academy - Capacitando você com as habilidades tecnológicas do futuro.</p>
          <span className='text-black text-center mt-4'>Tech Academy 2024. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};