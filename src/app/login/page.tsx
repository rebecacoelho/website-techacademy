import "../globals.css";
import computerImage from "../../../public/computer.jpeg"
import Image from "next/image";
import { FormLogin } from "@/components/FormLogin";

export default function Login() {
  return (
    <div className="bg-white flex justify-around items-center h-screen">
      <div className="flex flex-1 justify-center flex-col lg:px-20">
        <div>
          <h2 className="text-center text-2xl font-bold">TECH ACADEMY</h2>
          <h3 className="text-center text-lg mt-2">Faça seu login!</h3>
        </div>
        <FormLogin />
      </div>
      <div className="hidden lg:block">
        <Image src={computerImage} width={700} height={500} alt="default image" className="object-cover	h-screen object-right"/>
      </div>
    </div>
  );
}
