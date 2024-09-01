import Image from 'next/image';
import Icon from '../../../public/user-profile-icon.png'

interface ReviewCardProps {
  name: string;
  description: string;
  role: string;
}

export function ReviewCard({ name, description, role }: ReviewCardProps) {
  return (
    <div className="w-[200px] lg:w-[416px] p-6 bg-[#f5f5f5] rounded-lg shadow-md">
      <p className="text-lg text-gray-700 italic mb-4">
        &quot;{description}&quot;
      </p>
      <div className="flex items-center">
        <Image
          src={Icon}
          alt="Profile Picture"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}