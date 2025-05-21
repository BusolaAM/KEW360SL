import { useEffect } from "react";
import { Link } from "react-router-dom";
import svgImage from '../assets/images/glob.PNG'
import SolutionContent from '../components/services-card/services-preview.component';
import ContactForm from '../components/form/form.component';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import BG from '../assets/images/background_2.jpg';
import CustomBtn from "../components/custom-button/custom-button.component";


const HomePage = () => {

    useEffect(() => {
        AOS.init({
          duration:1000,
          once:true
        });
    }, []);

    const email = 'kew360sl' + '@' + 'gmail.com';
    return(
        <main>
            <article
            className="bg-cover bg-center w-full min-h-[40vh] sm:min-h-[50vh] pt-[6rem] md:min-h-[90vh] max-h-screen flex items-center"
            style={{ backgroundImage: `url(${BG})` }}
            id='home'
            >
                <div className="px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 pb-4 md:pb-0 max-w-4xl text-left text-white transition duration-500">
                    <h1 className="leading-tight font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4" data-aos="fade-up">
                    Transform your operations
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg mb-6" data-aos="fade-up">
                    Empowering digital solutions for growth
                    </p>
                    <Link to={'/#services'}>
                        <CustomBtn
                        className="bg-blue-950 hover:bg-blue-900 hover:cursor-pointer transition duration-300 transform hover:scale-105 px-6 py-4 rounded-md text-white font-semibold"
                        btnContent={'View Services'}
                        />
                    </Link>
                    
                </div>
            </article>

            <article className="bg-blue-950 w-full flex flex-col sm:flex-row items-center justify-between gap-10 px-6 py-12 md:px-12 lg:px-20 xl:px-32 " id='about'>
                {/* Text Section */}
                <section className="text-white w-full lg:w-1/2 space-y-6" data-aos="fade-right">
                    <h1 className=" text-lg font-medium text-sky-200">
                    <small>EMPOWERING DIGITAL SOLUTIONS</small>
                    </h1>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                    Innovative Tools for Law and Business
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    KEW360 Services Limited is a pioneering technology company committed to transforming the legal, enforcement, and SME sectors in Africa.
                    With a focus on user-centric digital solutions, we enhance operational effectiveness and drive digital transformation.
                    Our core products, including EnforcementTech, LegalTech, and SME Solutions, are designed to empower organizations to operate efficiently and achieve better outcomes.
                    Join us as we lead the way in developing intelligent digital solutions that cater to the unique needs of African industries.
                    <br />
                        <Link to={'/#contact'} className="text-sky-400 underline hover:text-sky-300 mt-2 inline-block">
                            Get in touch
                        </Link>
                    </p>
                </section>

                {/* Image Section */}
                <figure className="w-full lg:w-1/2 flex justify-center items-center" data-aos="fade-left">
                    <img
                    src={svgImage}
                    alt="Empowering Digital"
                    className="w-full max-w-[400px] 2xl:max-w-[500px] h-auto object-contain"
                    />
                </figure>
            </article>

            <article>
                <SolutionContent />
            </article>
            

            <article className="px-4 py-8 bg-neutral-800 border-b-2 border-gray-500 flex flex-col md:flex-row gap-8 md:gap-12 2xl:gap-30 justify-center items-start">
                <ContactForm />

                <section className="text-white flex-1 w-full md:max-w-xl p-4 sm:p-6 rounded-md shadow" data-aos="fade-left">
                    <div className="mb-4">
                        <h1 className="mb-2 font-semibold text-lg sm:text-xl">Get in touch</h1>
                        <a
                            href={`mailto:${email}`}
                            className="underline text-white text-base hover:text-sky-400 sm:text-lg flex items-center gap-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaEnvelope /> kew360sl@gmail.com
                        </a>
                    </div>

                    <div className="mb-4">
                        <h1 className="mb-2 font-semibold text-lg sm:text-xl">Location</h1>
                        <a
                            href="https://www.google.com/maps/place/Lagos,+Nigeria"
                            className="underline text-white hover:text-sky-400 text-base sm:text-lg flex items-center gap-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaMapMarkerAlt /> Lagos, Nigeria
                        </a>
                    </div>

                    <div>
                        <h1 className="mb-2 font-semibold text-lg sm:text-xl">Hours</h1>
                        <table className="w-full text-left border-collapse mt-4 text-sm sm:text-base">
                            <thead>
                            <tr className="bg-blue-950 text-white">
                                <th className="py-2 px-3 font-semibold border-b border-gray-300">Day</th>
                                <th className="py-2 px-3 font-semibold border-b border-gray-300">Opening Hours</th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-800">
                            {[
                                ["Monday", "9:00am – 10:00pm"],
                                ["Tuesday", "9:00am – 10:00pm"],
                                ["Wednesday", "9:00am – 10:00pm"],
                                ["Thursday", "9:00am – 10:00pm"],
                                ["Friday", "9:00am – 10:00pm"],
                                ["Saturday", "9:00am – 6:00pm"],
                                ["Sunday", "9:00am – 12:00pm"],
                            ].map(([day, hours]) => (
                                <tr key={day} className="even:bg-gray-100 odd:bg-white transition">
                                    <td className="py-2 px-3">{day}</td>
                                    <td className="py-2 px-3">{hours}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </article>


        </main>
    );
};

export default HomePage;