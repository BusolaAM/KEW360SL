import enforceTechImage from './assets/images/law-enforcement.PNG';
import legalTechImage from './assets/images/legal-innovation.PNG';
import SMETechImage from './assets/images/SME-technology.PNG';
import transformImage from './assets/images/transformative-img.PNG';
import exceedingImage from './assets/images/exceeding-img.PNG';
import empowerImage from './assets/images/empower-SM-img.PNG';
import lawImage from './assets/images/lawTech-img.PNG';
import legalImage from './assets/images/legalTech-img.PNG';
import digitalImage from './assets/images/digital-transform-img.PNG';
import caseImg from './assets/images/case.PNG';
import automationImg from './assets/images/automation.PNG';
import communeImg from './assets/images/communication.PNG';
import analyticImg from './assets/images/analytics.PNG';
import cameraImg from './assets/images/cameraTech.PNG';
import reportImg from './assets/images/reportSystem.PNG';
import cloudImg from './assets/images/cloud.PNG';
import cyberImg from './assets/images/cyber.PNG';
import conslutImg from './assets/images/consulting.PNG';

//FOR HOME PAGE
export const Services = [
  {
    image: enforceTechImage,
    title: "Law Enforcement Technology",
    content: "We designed and built with enforcement officers in mind to messaging. We specialize in developing innovative software solutions for the legal industry, aimed at improving the efficiency of legal practitioners. Our products include case management systems, document automation tools, and predictive analytics that help lawyers make informed decisions.",
  },
  {
    image: legalTechImage,
    title: "Legal Technology Innovations",
    content: "Our expertise in law enforcement technology includes the development of tools that aid in investigation, crime analysis, and data management. We collaborate closely with law enforcement agencies to tailor solutions that meet the unique challenges they face in today’s environment.",
  },
  {
    image: SMETechImage,
    title: "SME Technology Solutions",
    content: "We provide a range of technology solutions specifically designed for SMEs. Our services include cloud computing, digital marketing tools, and customer relationship management systems that help small businesses thrive and adapt in a fast-paced digital landscape.",
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


// FOR SERVICES PAGE

export const LegalSolution = [
  {
    image: caseImg,
    title: "Case Management Systems",
    content: "Our advanced case management systems allow law firms to efficiently organize and track cases from inception to resolution. With features like document automation, real-time collaboration, and comprehensive reporting, these tools help legal professionals save time and reduce errors. By streamlining workflows, we empower your team to focus on delivering exceptional legal services.",
  },
  {
    image: automationImg,
    title: "Legal Research Automation",
    content: "Leverage cutting-edge AI technology to enhance your legal research capabilities. Our solutions provide instant access to vast legal databases, enabling attorneys to find relevant case law and statutes quickly. This not only speeds up the research process but also ensures that you have the most up-to-date information at your fingertips, improving the quality of your legal arguments.",
  },
  {
    image: communeImg,
    title: "Client Communication Tools",
    content: "Enhance your client interactions with our robust communication tools designed for the legal industry. These platforms facilitate secure messaging, appointment scheduling, and document sharing, ensuring that clients remain informed and engaged throughout the legal process. By improving communication, you foster stronger relationships and enhance client satisfaction.",
  }
];

export const EnforcementSolution = [
  {
    image: analyticImg,
    title: "Real-Time Data Analytics",
    content: "Our real-time data analytics tools provide law enforcement agencies with actionable insights to enhance decision-making and operational efficiency. By analyzing crime patterns and trends, officers can proactively allocate resources and respond to incidents more effectively. Our solutions integrate seamlessly with existing systems, ensuring a smooth transition and immediate impact.",
  },
  {
    image: cameraImg,
    title: "Body-Worn Camera Technology",
    content: "We offer state-of-the-art body-worn cameras that enhance transparency and accountability in law enforcement operations. These devices capture high-quality video and audio evidence, providing crucial documentation for incidents. With secure data storage and easy retrieval, our technology ensures that officers can focus on their duties while maintaining public trust.",
  },
  {
    image: reportImg,
    title: "Incident Reporting Systems",
    content: "Streamline your incident reporting processes with our user-friendly systems designed specifically for law enforcement agencies. These systems allow officers to create, manage, and analyze reports efficiently, reducing paperwork and administrative burdens. The result is faster response times and more accurate records, ultimately leading to improved community safety.",
  }
];

export const SMESolution = [
  {
    image: cloudImg,
    title: "Cloud Solutions",
    content: "Our cloud solutions provide small and medium enterprises with scalable resources to enhance business operations. With secure data storage and easy access from anywhere, businesses can improve collaboration and productivity. Our experts will guide you through the transition to the cloud, ensuring minimal disruption and maximum benefit.",
  },
  {
    image: cyberImg,
    title: "Cybersecurity Services",
    content: "Protect your business from cyber threats with our comprehensive cybersecurity services. We offer risk assessments, ongoing monitoring, and incident response strategies tailored for SMEs. By implementing robust security measures, we help you safeguard sensitive information and build customer trust, allowing your business to thrive in a digital landscape.",
  },
  {
    image: conslutImg,
    title: "IT Support and Consulting",
    content: "Our IT support and consulting services are designed to help SMEs navigate the complexities of technology. From troubleshooting to strategic planning, our team of experts is here to provide the assistance you need. We work closely with your organization to develop solutions that align with your unique business goals, ensuring sustainable growth and success.",
  }
];

