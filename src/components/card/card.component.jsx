const CardItem = ({ image, title, content }) => (
  <div className="flex flex-col md:flex-row md:gap-8 2xl:w-3/4">
    <figure className="w-full md:w-[300px] h-[200px] md:h-auto rounded-sm mb-4 overflow-hidden flex-shrink-0">
      <img 
        src={image} 
        alt={`${title} image`} 
        className="w-full h-full object-cover"
      />
    </figure>
    <div className="flex-1 lg:self-center"> 
      <h3 className="font-poppins font-semibold text-lg mb-2">{title}</h3>
      <p className="text-base md:text-base text-gray-800 mb-4">{content}</p>
    </div>
  </div>
);

export default CardItem;