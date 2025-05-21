import { Link } from "react-router-dom";

const ServiceAndFeatureDetails = ({data}) => {

    const { image, title, details } = data[0];

    return(
        <div className='container w-full md:max-w-[90%] lg:max-w-[75%] mx-auto px-4 py-10 md:py-15 flex flex-col md:flex-row gap-10 md:justify-around md:items-center '>
            <figure className="w-full md:w-[40%] lg:w-[35%] 2xl:w-[35%] h-[400px]" data-aos="fade-left">
                <img src={image} alt={`${title} image`} className='w-full h-full rounded-md' />
            </figure>
            <div className="w-full md:w-[60%]" data-aos="fade-right">
                <h3 className="text-sky-400 text-xl md:text-base font-bold mb-4">{title}</h3>
                <p className="mb-8 text-lg text-gray-200">{details}</p>
                <Link className='underline hover:cursor-pointer hover:text-sky-200 decoration-sky-400 text-sky-400 font-semibold' to="/schedule-appointment">Schedule an Appointment</Link>
            </div>
        </div>
    );
};

export default ServiceAndFeatureDetails;    