import { Link } from 'react-router-dom';
import svgImage from '.././assets/images/illustration-working.svg';
import CustomBtn from '../components/custom-button/custom-button.component';
import SolutionContent from '../components/solution-card/solutions-preview.component';
import StatusStats from '../components/statCard/statCard-preview.component';

const HomePage = () => {

    return(
        <main>
            <article className="bg-blue-950 w-full h-auto md:h-100 xl:h-120 flex flex-col-reverse sm:flex-row md:flex-row gap-10 md:gap-20  items-center justify-center p-4 lg:py-20 lg:px-20 xl:py-20 xl:px-20">
                <section className='text-white gap-4  flex flex-col justify-center w-full sm:w-[50%]'>
                    <h1 className='font-bold text-center lg:text-left text-[20px] sm:text-[22px] md:text-[30px] font-poppins'>KEW360 <br /><span>KNOW, ELEVATE, WIN.</span></h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat earum molestias sint blanditiis, quam ducimus similique aliquam necessitatibus repudiandae
                    </p>
                    <CustomBtn className={"bg-sky-400 hover:bg-sky-300 font-extrabold w-[250px] px-6 py-2 rounded-md text-white"} btnContent='Request Demo'/>
                </section>
                <figure className='w-full sm:w-[50%] md:h-100 xl:h-120 justify-center items-center'>
                    <img src={svgImage} alt="image" className='w-full h-full' />
                </figure>
            </article>

            <SolutionContent />

            <article>
                <div className='p-5 bg-neutral-800 border-b-2 border-gray-500 lg:py-4 lg:px-20'>
                    <h2 className='text-white font-extrabold font-poppins text-center text-2xl mb-8'>Features</h2>
                    <div className='text-center  '>
                        <p className=' text-gray-300 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et fugiat suscipit dolorem, iste impedit. Architecto natus vel, eos facere mollitia aliquam voluptatum eveniet, maiores aperiam hic asperiores doloremque eaque.</p>
                        <Link
                            to=''
                            className="text-sky-400 hover:underline text-sm font-medium "
                        >
                            Read more →
                        </Link>
                    </div>
                </div>

                <StatusStats />

            </article>
        </main>
    );
};

export default HomePage;