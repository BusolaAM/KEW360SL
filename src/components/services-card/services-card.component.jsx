import { Link } from "react-router-dom";

const SolutionItem = ({ svgIcon, title, content, detailsLink }) => (

  <Link
    to={detailsLink}
    className="block bg-neutral-800 rounded-md text-white p-6 hover:shadow-lg transform hover:scale-105 duration-300 ease-in-out transition-all"
  >
    <figure className="w-full h-50 p-2 rounded-md mb-4 flex items-center justify-center">
      <img src={svgIcon} alt={`${title} icon`} className="w-full h-full object-cover" />
    </figure>
    <h3 className="font-poppins text-sky-400 font-semibold cursor-pointer text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-300 mb-4">{content}</p>
    <span className="text-sky-400 hover:underline text-sm font-medium">
      Learn more →
    </span>
  </Link>

);

export default SolutionItem;
