import { Link } from "react-router-dom";

const CardItem = ({ image, title, content, date, link}) => (
  <Link to={link}>
    <div className="flex flex-col gap-1">
      <figure className="w-full h-full rounded-sm mb-4 flex items-center justify-center">
        <img src={image} alt={`image`} className="w-full h-full object-cover" />
      </figure>
      {title ? (
        <div className="text-left">
          <h6 className="text-medium mb-2">{title}</h6>
          <p className="text-base mb-2">{date}</p>
          <p className="text-base md:text-base text-gray-500 mb-4">{content}</p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-base md:text-base text-gray-800 mb-4">{content}</p>
          <p className="text-base mb-2">{date}</p>
        </div>
      )}
    </div>
  </Link>
);

export default CardItem;



{/* <div className="flex flex-col gap-0">
    <figure className="w-full h-full rounded-sm mb-4 flex items-center justify-center">
      <img src={image} alt={`${title} image`} className="w-full h-full object-cover" />
    </figure>
    <div className="text-center">
      <h3 className="font-poppins font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-800 mb-4">{content}</p>
      {showButton && (
          <div className="mx-auto">
            <CustomBtn
                className="w-full md:w-[150px] bg-black text-white font-extrabold text-sm py-2 px-4 font-poppins hover:cursor-pointer hover:scale-95"
                btnContent="Read More"
            />
          </div>
        )}
    </div>
  </div> */}

// const CardItem = ({ image, title, content, date, link}) => (
//   <Link to={link}>
//     <div className="flex flex-col gap-3">
//         <figure className="w-full h-full rounded-sm mb-4 flex items-center justify-center">
//             <img src={image} alt={`image`} className="w-full h-full object-cover" />
//         </figure>
//         <div className="text-left">
//             <h6 className="text-lg mb-2">{title}</h6>
//             <p className="font-bold text-base mb-2">{date}</p>
//             <p className="text-base md:text-base text-gray-800 mb-4">{content}</p>
//         </div>
//     </div>
//   </Link>