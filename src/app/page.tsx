import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionIntro } from "@/components/SectionIntro";
import { SectionOurService } from "@/components/SectionOurService";
import "./globals.css";
import backgroundImage from "../../public/headerBackground.svg"
import { SectionCourses } from "@/components/SectionCourses";
import { SectionReviews } from "@/components/SectionReviews";
import { SectionPublications } from "@/components/SectionPublications";

export default function Home() {
  return (
   <div className="bg-white">
    <div className="bg-[#FDF8EE] max-h-[100vh] lg:max-h-[65vh]" style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}>
      <div className="container">
        <SectionIntro />
        <SectionOurService />
        <SectionCourses />
        <SectionReviews />
        <SectionPublications />
      </div>
      <Footer />
    </div>
   </div>
  );
}
