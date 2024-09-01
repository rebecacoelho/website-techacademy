import Image from "next/image";

export const Service = (props: any) => {
  return (
  <div className="flex items-center gap-4">
    <div className="flex max-w-96 bg-white opacity-60 rounded-xl py-4 px-4">
      <div className="flex flex-col gap-6">
        <Image src={props.image} alt=""/>
      </div>
    </div>
    <div>
      <span className="text-xl font-bold text-white">{props.title}</span>
      <div>
        <p className="text-white opacity-60 mt-1">{props.description}</p>
      </div>
    </div>
  </div>
  );
};