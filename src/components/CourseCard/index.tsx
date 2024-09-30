import Image, { StaticImageData } from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface CourseCardProps {
  title: string;
  imageUrl: StaticImageData;
  courseUrl: string;
}

export function CourseCard({
  title,
  imageUrl,
  courseUrl,
}: CourseCardProps) {
  const pathname  = usePathname();
  const router = useRouter();
  const isCurrentCourse = pathname === courseUrl;

  const handleClick = () => {
    if (!isCurrentCourse) {
      router.push(courseUrl);
    }
  };

  return (
    <div
      className={`flex p-4 border rounded-lg transition duration-300 ease-in-out ${
        isCurrentCourse ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:shadow-lg'
      }`}
      onClick={handleClick}
    >
      <Image src={imageUrl} alt={title} className="w-12 h-12 object-cover rounded" />
      <div className="flex-grow ml-4 flex flex-col justify-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        {isCurrentCourse && (
          <span className="bg-red-400 text-white px-2 py-1 rounded text-sm text-center max-w-fit">Curso Atual</span>
        )}
      </div>
    </div>
  );
}
