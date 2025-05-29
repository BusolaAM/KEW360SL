import enforceTechImage from './assets/images/law-enforcement.PNG';
import legalTechImage from './assets/images/legal-innovation.PNG';
import SMETechImage from './assets/images/SME-technology.PNG';
import transformImage from './assets/images/transformative-img.PNG';
import exceedingImage from './assets/images/exceeding-img.PNG';
import empowerImage from './assets/images/empower-SM-img.PNG';
import lawImage from './assets/images/lawTech-img.PNG';
import legalImage from './assets/images/legalTech-img.PNG';
import digitalImage from './assets/images/digital-transform-img.PNG';


export const Services = [
  {
    image: enforceTechImage,
    title: "KewForce",
    content: "We designed and built with enforcement officers in mind to messaging. We specialize in developing innovative software solutions for the legal industry, aimed at improving the efficiency of legal practitioners. Our products include case management systems, document automation tools, and predictive analytics that help lawyers make informed decisions.",
  },
  {
    image: legalTechImage,
    title: "KewCase",
    content: "Trusted by legal professionals to modernize operations. Our expertise in law enforcement technology includes the development of tools that aid in investigation, crime analysis, and data management. We collaborate closely with law enforcement agencies to tailor solutions that meet the unique challenges they face in today’s environment.",
  },
  {
    image: SMETechImage,
    title: "KewSuite",
    content: "Empowering African businesses with enterprise-grading tools at SME prices. We provide a range of technology solutions specifically designed for SMEs. Our services include cloud computing, digital marketing tools, and customer relationship management systems that help small businesses thrive and adapt in a fast-paced digital landscape.",
  }
];

export const Testimony = [
  {
    image: transformImage,
    title: "Transformative Experience",
    content: "Kew360 Services transformed the way we handle our legal cases. Their innovative tools have streamlined our workflow and significantly improved our efficiency. We couldn't be happier!",
    showButton: true
  },
  {
    image: exceedingImage,
    title: "Exceeding Expectations",
    content: "The law enforcement tools provided by Kew360 have exceeded our expectations. They have integrated seamlessly into our operations, allowing us to serve our community better.",
    showButton: true
  },
  {
    image: empowerImage,
    title: "Empowering Small Businesses",
    content: "Thanks to Kew360’s SME technology solutions, our business has seen remarkable growth. Their expertise has guided us through the digital landscape effectively.",
    showButton: true
  }
];


const currentDate = new Date().toLocaleDateString(); 

export const Updates = [
  {
    image: digitalImage,
    content: `SMEs and the Digital Transformation Journey - ${currentDate}`,
    link: ''
  },
  {
    image: lawImage,
    content: `Enhancing Law Enforcement with Technology - ${currentDate}`,
    link: ''
  },
  {
    image: legalImage,
    content: `The Future of Legal Tech: Trends to Watch - ${currentDate}`,
    link: ''
  }
];

