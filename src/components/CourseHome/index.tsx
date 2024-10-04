"use client"

import { slugify } from "@/utils/formatUrl";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useUserContext } from "@/context/userContext";

export const CourseHome = (props: any) => {
  const { user } = useUserContext();

  const { image, title, description, initialHref, disabledButton } = props;

  const urlTitle = slugify(title);

  return (
    <div className="flex w-[334px] h-[428px] bg-white rounded-xl shadow-lg">
      <div className="flex flex-col gap-6 rounded-xl">
        <Image className="w-[334px] h-[179px] rounded-t-xl" src={image} alt="" />
        <div className="px-8 pb-6 flex flex-col justify-between h-full">
          <span className="text-xl font-bold text-[#FF7426]">{title}</span>
          <div>
            <p className="text-gray-500 pt-2 text-sm text-justify">{description}</p>
          </div>
          <div className="flex justify-end">
            <Link
              className={clsx(
                "flex items-center gap-2 mt-4 py-2.5 px-5 rounded-md w-fit text-xs",
                {
                  "bg-[#4D2C5E] text-white hover:bg-[#3b1d4a]": !disabledButton,
                  "bg-gray-300 text-gray-500 cursor-not-allowed": disabledButton,
                }
              )}
              href={disabledButton ? "#" : !user ? "/login" : `/${initialHref}/${urlTitle}`}
              aria-disabled={disabledButton ? "true" : "false"}
              tabIndex={disabledButton ? -1 : 0} 
            >
              {disabledButton ? "Em Breve!" : "Quero Aprender!"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
