import CustomBtn from "../custom-button/custom-button.component";

const CardItem = ({ image, title, content, showButton}) => (
  <div className="flex flex-col gap-0">
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
  </div>
);

export default CardItem;