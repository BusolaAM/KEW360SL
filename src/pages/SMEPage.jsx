import { useEffect } from "react";
import { SMEDetails } from '../serivce-and-feature-data'
import ServiceAndFeatureDetails from "../components/service-and-feature-details/service-and-feature-details.component";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


const SMEPage = () => {
    useEffect(() => {
            AOS.init({
              duration:1000,
              once:true
            });
    }, []);

    return(
        <article className='md:pt-[6rem]'>
            <section className='bg-zinc-950' data-aos="fade-up">
                <ServiceAndFeatureDetails data={ SMEDetails } />
            </section>
            <section className='bg-zinc-800' data-aos="fade-down">
                <div className='container w-full md:max-w-[75%] mx-auto px-4 py-10 md:py-15 flex flex-col md:flex-row gap-12 md:justify-around md:items-center'>
                    <div>
                        <h1 className='text-gray-200 text-4xl font-extrabold leading-tight'>Let's talk</h1>
                        <p className='text-gray-200 text-xl font-bold'>We would love to hear from you!</p>
                    </div>
                    <Link to={'/#contact'}>
                        <button className='border-4 py-4 px-10 font-bold rounded-md text-sky-400 hover:bg-sky-400 hover:text-white hover:cursor-pointer'>
                            GET IN TOUCH
                        </button>
                    </Link>
                </div>
            </section>
        </article>
    );
};

export default SMEPage;