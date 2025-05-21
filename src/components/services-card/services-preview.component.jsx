import { useEffect } from "react";
import SolutionItem from "./services-card.component";
import Enforce from '../../assets/images/enforce.PNG';
import Legal from '../../assets/images/legal.PNG';
import SME from '../../assets/images/SME.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const solutions = [
  {
    svgIcon: Enforce,
    title: "Enforcement Tech",
    content: "streamline your enforcement processes with advanced technology,",
    detailsLink: "/services/enforcement"
  },
  {
    svgIcon: Legal,
    title: "Legal Tech",
    content: "Transform your legal practice with innovative digital tools.",
    detailsLink: "/services/legal"
  },
  {
    svgIcon: SME,
    title: "SME solutions",
    content: "Empower your small business with tailored digital solutions.",
    detailsLink: "/services/SME"
  }
];

const SolutionContent = () => {

  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true
    });
  }, []);

  return(
    <div id="services" className="w-full bg-zinc-900 py-10 px-4">
      <h1 className=" text-lg font-medium text-sky-200 xl:px-20 2xl:text-center" data-aos="fade-up">
        <small>EMPOWERING SOLUTIONS</small>
      </h1>
      <p className="text-lg xl:px-20 mb-4 sm:text-xl md:text-2xl font-bold leading-tight text-white 2xl:text-center" data-aos="fade-up">Transform Your Operations with our tools</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl 2xl:max-w-[1450px] mx-auto" data-aos="fade-up">
        {solutions.map((item, index) => (
          <SolutionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SolutionContent;
