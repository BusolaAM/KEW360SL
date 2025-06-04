
const CardItem = ({ image, title, content}) => (
  <div className="flex flex-col gap-0 p-4 bg-silver">
    <figure className="w-full h-full rounded-sm mb-4 flex items-center justify-center">
      <img src={image} alt={`${title} image`} className="w-full h-full object-cover" />
    </figure>
    <div className="text-center">
      <h3 className="font-poppins font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-800 mb-4">{content}</p> 
    </div>
  </div>
);

export default CardItem;