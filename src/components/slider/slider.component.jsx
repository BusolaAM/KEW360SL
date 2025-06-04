import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import lawyerImg from "../../assets/images/lawyer.PNG";
import empowerToolImg from "../../assets/images/enforceTool.PNG";
import smeToolImg from "../../assets/images/smeTool.PNG";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="w-full bg-gray-100"
    >
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row items-center justify-between p-10 gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Innovative Legal Tech Solutions
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our legal tech services are designed to streamline legal processes and improve case
              management for law firms and corporate legal departments. By integrating advanced
              technologies, we help legal professionals save time, reduce costs, and enhance their
              service delivery.
            </p>
            <button className="bg-black text-white font-bold py-3 px-6 rounded hover:bg-gray-800 transition">
              Explore Legal Tech
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 text-center">
            <img
              src={lawyerImg} 
              alt="Lawyer"
              className="w-full max-w-md mx-auto rounded shadow"
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col lg:flex-row items-center justify-between p-10 gap-10">
          {/* Image Section */}
          <div className="flex-1 text-center">
            <img
              src={empowerToolImg} 
              alt="Lawyer"
              className="w-full max-w-md mx-auto rounded shadow"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Advanced Law Enforcement Tools
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We provide law enforcement agencies with state-of-the-art technology solutions that enhance operational efficiency and public safety. Our tools support real-time data analysis, resource management, and improved communication between units.
            </p>
            <button className="bg-black text-white font-bold py-3 px-6 rounded hover:bg-gray-800 transition">
              Discover Law Enforcement Tech
            </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col lg:flex-row items-center justify-between p-10 gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Empowering SMEs with Technology
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our SME tech solutions are tailored to empower small and medium enterprises. We focus on providing tools that facilitate better management, increase productivity, and foster growth, ensuring that SMEs can compete effectively in a dynamic market.
            </p>
            <button className="bg-black text-white font-bold py-3 px-6 rounded hover:bg-gray-800 transition">
              Learn About SME Tech
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 text-center">
            <img
              src={smeToolImg}
              alt="Lawyer"
              className="w-full max-w-md mx-auto rounded shadow"
            />
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default Slider;
