'use client';

import { slugify } from '@/utils/formatUrl';
import HtmlIMG from '../../../../public/html5.png';
import CssIMG from '../../../../public/css3.png';
import JavascriptIMG from '../../../../public/JavaScript.png';
import '../../globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import { useEffect, useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { useUserContext } from '@/context/userContext';
import { useRouter } from 'next/navigation';

const CoursePage = ({ params }: { params: { title: string } }) => {
  const { user } = useUserContext();
  const router = useRouter();

  const [courses, setCourses] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackClass, setFeedbackClass] = useState('');
  const [previousScore, setPreviousScore] = useState<number | null>(null);

  if(!user) {
    router.push('/login'); 
  }

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const [course1, course2, course3] = await Promise.all([
          axiosInstance.get('/cursos/1'),
          axiosInstance.get('/cursos/2'),
          axiosInstance.get('/cursos/3'),
        ]);
        setCourses([course1.data, course2.data, course3.data]);
      } catch (error) {
        console.error('Erro ao buscar os cursos:', error);
      }
    };

    fetchCourses();
  }, []);

  const course = courses.find(c => slugify(c.title) === params.title);

  useEffect(() => {
    const savedScore = localStorage.getItem(`quizScore_${params.title}`);
    if (savedScore) {
      setPreviousScore(Number(savedScore));
      setShowResult(true);
    }
  }, [params.title]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitAnswer = () => {
    const currentQuestion = course?.perguntas?.[currentQuestionIndex];
    if (!currentQuestion) return;

    if (selectedOption === currentQuestion.respostaCorreta) {
      setScore(score + 1);
      setFeedbackMessage('Você acertou!');
      setFeedbackClass('text-green-500');
    } else {
      setFeedbackMessage(`Você errou! A resposta correta era: ${currentQuestion[currentQuestion.respostaCorreta as keyof typeof currentQuestion]}`);
      setFeedbackClass('text-red-500');
    }
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (course?.perguntas?.length ?? 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
      setAnswered(false);
      setFeedbackMessage('');
      setFeedbackClass('');
    } else {
      setShowResult(true);
      const finalScore = calculateFinalScore();
      localStorage.setItem(`quizScore_${params.title}`, finalScore.toString());
      submitEvaluation(finalScore);
    }
  };

  const calculateFinalScore = () => {
    const totalQuestions = course?.perguntas?.length ?? 1;
    return (score / totalQuestions) * 10;
  };

  const submitEvaluation = async (finalScore: number) => {
    const idCurso = course?.id_curso;
    const body = {
      email: user?.email,
      id_curso: idCurso,
      nota: finalScore.toFixed(1),
    };

    try {
      await axiosInstance.post('/cursos-avaliar/avaliacoes', body);
    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
    }
  };

  if (!course) {
    return <div>Curso não encontrado</div>;
  }

  const currentQuestion = course.perguntas?.[currentQuestionIndex];

  return (
    <div className="bg-[#f5f5f7]">
      <div className='container'>
        <Header />
        <div className='lg:flex'>
          <div className='py-4 pb-8 lg:px-12 rounded-md max-w-[1100px]'>
            <h2 className='text-left text-4xl font-bold mb-4 mt-8 xl:pl-[6.5rem]'>{course.title}</h2>
            <div className='mt-6 flex justify-center lg:px-[6.5rem] max-h-[512px]'>
              <iframe
                width="560"
                height="315"
                src={course.videoLink}
                title={course.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='rounded-md'
              ></iframe>
            </div>
            <div className='flex flex-col gap-2 text-left mt-4 xl:mx-4 xl:px-[5.5rem]'>
              <div className='my-2'>
                <span className='font-bold text-lg underline'>Sobre esse curso:</span>
              </div>
              <p className='font-normal text-md text-justify'>{course.description}</p>
            </div>

            {course.perguntas && !showResult && (
              <div className='mt-6 xl:mx-4 xl:px-[5.5rem]'>
                <div className='my-2'>
                  <span className='font-bold text-lg underline'>QUIZ da aula:</span>
                </div>
                <div className='font-bold mb-2 mt-4 text-[#ff6f0d]'>Pergunta {currentQuestionIndex + 1}:</div>
                <p className='font-bold my-2'>{currentQuestion?.perguntasCurso}</p>

                <div className='flex flex-col'>
                  <label className='flex items-center'>
                    <input
                      type="radio"
                      value="opcaoA"
                      checked={selectedOption === 'opcaoA'}
                      onChange={handleOptionChange}
                      disabled={answered}
                      className='mr-2 w-4 h-4 cursor-pointer'
                    />
                    {currentQuestion?.opcaoA}
                  </label>
                  <label className='flex items-center'>
                    <input
                      type="radio"
                      value="opcaoB"
                      checked={selectedOption === 'opcaoB'}
                      onChange={handleOptionChange}
                      disabled={answered}
                      className='mr-2 w-4 h-4 cursor-pointer'
                    />
                    {currentQuestion?.opcaoB}
                  </label>
                  <label className='flex items-center'>
                    <input
                      type="radio"
                      value="opcaoC"
                      checked={selectedOption === 'opcaoC'}
                      onChange={handleOptionChange}
                      disabled={answered}
                      className='mr-2 w-4 h-4 cursor-pointer'
                    />
                    {currentQuestion?.opcaoC}
                  </label>
                  <label className='flex items-center'>
                    <input
                      type="radio"
                      value="opcaoD"
                      checked={selectedOption === 'opcaoD'}
                      onChange={handleOptionChange}
                      disabled={answered}
                      className='mr-2 w-4 h-4 cursor-pointer'
                    />
                    {currentQuestion?.opcaoD}
                  </label>
                </div>

                <button
                  className={`font-bold py-2 px-4 rounded mt-4 ${!selectedOption ? 'bg-gray-400 cursor-not-allowed' : 'bg-black text-white cursor-pointer'}`}
                  onClick={handleSubmitAnswer}
                  disabled={!selectedOption || answered}
                >
                  Responder
                </button>

                {feedbackMessage && (
                  <p className={`mt-4 font-bold ${feedbackClass}`}>{feedbackMessage}</p>
                )}

                {answered && (
                  <button
                    className='bg-[#ff6f0d] text-white font-bold py-2 px-4 rounded mt-4'
                    onClick={handleNextQuestion}
                  >
                    Próxima pergunta
                  </button>
                )}
              </div>
            )}

            {showResult && (
              <div className='mt-6 xl:mx-4 xl:px-[5.5rem]'>
                <h3 className='text-lg font-bold'>Resultado do Quiz:</h3>
                {score !== null && score !== undefined && previousScore === null ? (
                  <>
                    <p className="font-bold mt-4">
                      Você acertou {score} de {course.perguntas?.length} perguntas.
                    </p>
                    <p className='font-bold mt-2'>Sua nota final: {calculateFinalScore().toFixed(1)} / 10</p>
                  </>
                ) : (
                  <p>Você já realizou esse teste. Sua nota final foi <strong>{previousScore}</strong>. Tente novamente mais tarde!</p>
                )}
              </div>
            )}
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