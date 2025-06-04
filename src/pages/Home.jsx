import { Link } from 'react-router-dom'
import BG1 from '../assets/images/bg1.jpg'
import CustomBtn from '../components/custom-button/custom-button.component'
import ServicesCard from '../components/servicesCard/servicesCardPreview.component'
import TestimonyCard from '../components/testimonialCard/testimonyCardPreview.component';
import UpdatesCard from '../components/updateCard/updateCardPreview.component';
import Slider from '../components/slider/slider.component';

const HomePage = () => {
    return(
        <section className='bg-silver'>
            <article className="bg-cover bg-center w-full min-h-[50vh] sm:min-h-[60vh] 
            max-h-screen flex items-center md:justify-center" style={{ backgroundImage: `url(${BG1})` }}
            >
                <div className='w-full md:w-3/4 2xl:w-1/2 flex flex-col gap-6 p-4 lg:p-0'>
                    <p className="text-sm sm:text-base lg:text-xl text-white text-left 2xl:text-center font-normal lg:font-medium  ">
                        <span className='text-shadow-[2px_2px_4px_hsl(282,44%,47%)]'>From the Courtroom to the Streets-Transforming Legal and Enforcement Operations with Smart Tech</span> <br /> At Kew360 Services Limited, we leverage cutting-edge technology to enhance the efficiency of legal processes, law enforcement operations, and SME management.
                    </p>
                    <h2 className="text-white font-semibold lg:mb-8 text-left 2xl:text-center text-lg md:text-xl lg:text-2xl ">Empowering Legal and Enforcement Technologies</h2>
                    <Link to='' className='mx-0 2xl:mx-auto'>
                    <CustomBtn className="bg-black text-white font-extrabold text-lg py-2 px-3 lg:py-4 lg:px-6 border-[silver-color] border-[0.5px] md:text-xl font-poppins hover:cursor-pointer hover:scale-95" btnContent="Book Now"/>
                    </Link>    
                </div>
            </article>

            <article>
                <Slider />
            </article>

            <section className='p-4'>
                <article className='mt-8'>
                    <div className='text-center flex flex-col gap-4'>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-shadow-[2px_2px_4px_hsl(282,44%,47%)]">
                        Our Areas of Expertise
                        </h2>
                        <p className='text-base xl:lg'>Specializing in technology solutions that cater to the needs of legal, law enforcement, and small to medium enterprises.</p>
                    </div>
                    <div>
                        <ServicesCard />
                    </div>
                </article>

                <article className='mt-8'>
                    <div className='text-center flex flex-col gap-4'>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-shadow-[2px_2px_4px_hsl(282,44%,47%)]">
                            What Our Clients Say
                        </h2>
                        <p className='text-base xl:lg'>Discover how we have made an impact through the words of our valued clients.</p>
                    </div>
                    <div>
                        <TestimonyCard />
                    </div>
                </article>

                <article className='mt-14'>
                    <div className='text-center flex flex-col gap-2'>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-shadow-[2px_2px_4px_hsl(282,44%,47%)]">
                            Latest Insights and Updates
                        </h2>
                        <p className='text-base xl:lg'>Stay informed with the latest news and developments from Kew360 Services and the broader industry.</p>
                    </div>
                    <div>
                        <UpdatesCard />
                    </div>
                </article>
            </section>
        </section>

        
    );
}

export default HomePage;