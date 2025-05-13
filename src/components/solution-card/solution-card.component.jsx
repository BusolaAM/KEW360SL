import { Link } from "react-router-dom";

const SolutionItem = ({ svgIcon, title, content, detailsLink }) => (
  <div className="bg-neutral-800 rounded-md text-white p-6 hover:shadow-lg transition-all">
    <figure className="bg-white w-10 h-10 p-2 rounded-md mb-4 flex items-center justify-center">
      <img src={svgIcon} alt={`${title} icon`} className="w-full h-full object-contain" />
    </figure>
    <h3 className="font-poppins font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-300 mb-4">{content}</p>
    <Link
      to={detailsLink}
      className="text-sky-400 hover:underline text-sm font-medium"
    >
      Learn more →
    </Link>
  </div>
);

export default SolutionItem;
