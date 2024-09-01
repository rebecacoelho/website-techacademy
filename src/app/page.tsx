import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionIntro } from "@/components/SectionIntro";
import { SectionOurService } from "@/components/SectionOurService";
import "./globals.css";
import backgroundImage from "../../public/headerBackground.svg"
import { SectionCourses } from "@/components/SectionCourses";
import { SectionReviews } from "@/components/SectionReviews";

export default function Home() {
  return (
   <div className="bg-white">
    <div className="bg-[#FDF8EE] max-h-[100vh] lg:max-h-[73vh]" style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}>
      <div className="container">
        <SectionIntro />
        <SectionOurService />
        <SectionCourses />
        <SectionReviews />
      </div>
      <Footer />
    </div>
   </div>
  );
}
