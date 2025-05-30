import { Link } from "react-router-dom";

const CardItem = ({ image, title, content, date, link}) => (
  <Link to={link}>
    <div className="flex flex-col gap-3">
        <figure className="w-full h-full rounded-sm mb-4 flex items-center justify-center">
            <img src={image} alt={`image`} className="w-full h-full object-cover" />
        </figure>
        <div className="text-left">
            <h6 className="text-lg mb-2">{title}</h6>
            <p className="font-bold text-base mb-2">{date}</p>
            <p className="text-base md:text-base text-gray-800 mb-4">{content}</p>
        </div>
    </div>
  </Link>
);

export default CardItem;