import CardItem from "./card.component";
import { History } from "../../data";

const HistoryCard = () => {

  return(
      // sm:grid-cols-2 md:grid-cols-3
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl 2xl:max-w-[1450px] mx-auto">
        {History.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
  );
};

export default HistoryCard;