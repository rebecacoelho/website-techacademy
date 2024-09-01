'use client';

import { useState } from 'react';
import { ReviewCard } from '../ReviewCard';
import Image from 'next/image';
import ArrowLeft from '../../../public/arrow-left.svg';
import ArrowRight from '../../../public/arrow-right.svg';

export const SectionReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      description:
        "A Tech Academy me proporcionou uma experiência incrível! Consegui aprimorar meus conhecimentos em desenvolvimento web e hoje me sinto muito mais confiante para enfrentar desafios profissionais.",
      name: "Rebeca Oliveira",
      role: "Desenvolvedora Front-end",
    },
    {
      description:
        "A Tech Academy foi um divisor de águas na minha carreira. Graças aos cursos e ao suporte da equipe, consegui uma promoção e agora sou Gerente de Produto em uma grande empresa de tecnologia.",
      name: "Ana Martins",
      role: "Gerente de Produto",
    },
    {
      description:
        "Estudar na Tech Academy foi uma das melhores decisões que tomei. Aprendi muito sobre controle de qualidade e como aplicar as melhores práticas no meu dia a dia de trabalho.",
      name: "Pedro Silva",
      role: "Analista de Qualidade",
    },
    {
      description:
        "Os instrutores da Tech Academy são extremamente capacitados e sempre dispostos a ajudar. Senti uma grande evolução na minha carreira após concluir o curso de engenharia de software.",
      name: "Fernanda Costa",
      role: "Engenheira de Software",
    },
  ];

  const handlePrevClick = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col md:flex-row mt-16 items-center justify-center">
      <div>
        <div className="w-full flex flex-col items-center md:items-start mb-8">
          <h3 className="text-4xl font-bold text-center md:text-left">
            Veja feedbacks dos nossos alunos
          </h3>
          <div className="bg-black w-16 mt-4 h-0.5"></div>
        </div>
        <div className="flex gap-10">
          <button onClick={handlePrevClick} className="rounded-full">
            <Image src={ArrowLeft} alt="Previous" width={48} height={24} />
          </button>
          <button onClick={handleNextClick} className="rounded-full">
            <Image src={ArrowRight} alt="Next" width={48} height={24} />
          </button>
        </div>
      </div>

      <div className="flex items-center w-full overflow-hidden">
        <div className="flex gap-8 mx-4">
          <ReviewCard
            description={reviews[currentReview].description}
            name={reviews[currentReview].name}
            role={reviews[currentReview].role}
          />
          <div className="hidden md:block">
            <ReviewCard
              description={reviews[(currentReview + 1) % reviews.length].description}
              name={reviews[(currentReview + 1) % reviews.length].name}
              role={reviews[(currentReview + 1) % reviews.length].role}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
