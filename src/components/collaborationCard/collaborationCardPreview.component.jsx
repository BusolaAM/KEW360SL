import CardItem from "../card/card.component";
import { Collaboration } from "../../data";

const CollaborationCard = () => {

  return(
      // sm:grid-cols-2 md:grid-cols-3
      <div className="mt-6 grid grid-cols-1 gap-6 max-w-6xl 2xl:max-w-[1450px] 2xl:place-items-center mx-auto">
        {Collaboration.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
  );
};

export default CollaborationCard;
