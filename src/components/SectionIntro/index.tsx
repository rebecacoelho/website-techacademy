"use client"

import Image from "next/image";
import Link from "next/link";
import SectionPic from '../../../public/sectionPic.png'
import { Header } from "../Header";
import { useUserContext } from "@/context/userContext";

export const SectionIntro = () => {
  const { user } = useUserContext();

  return (
    <div className="bg-[#FDF8EE]">
      <Header />
      <div className="flex gap-8 mt-12">
        <div className="flex flex-col gap-6 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-5xl font-bold">Desenvolva seu <span className="text-orange-500">futuro</span></h2>
              <h2 className="text-5xl font-bold mt-2">com a tecnologia do <span className="text-orange-500">presente</span></h2>
            </div>
            <div>
              <p className="text-gray-500 max-w-5xl text-lg md:text-xl">A Tech Academy é uma escola de ensino tecnológico dedicada a capacitar indivíduos com as habilidades mais atuais e relevantes do mercado. Nossa missão é transformar o aprendizado em uma experiência acessível, envolvente e eficaz, preparando você para os desafios do mundo digital.</p>
            </div>
          </div>
          <div className="lg:mt-0 mt-6">
            {!user ? (
              <Link className="bg-[#4D2C5E] px-6 py-4 rounded-2xl text-white hover:bg-purple-900 hover:text-white" href='/login'>
                SE INSCREVA JÁ!
              </Link>
            ) : null}
          </div>
        </div>
        <div className="self-center hidden lg:block">
          <Image src={SectionPic} alt=""/>
        </div>
      </div>
    </div>
  );
};