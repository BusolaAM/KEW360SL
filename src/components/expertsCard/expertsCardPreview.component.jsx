import CardItem from "./card.component";
import { OurExpert } from "../../data";

const OurExpertCard = () => {

  return(
      // sm:grid-cols-2 md:grid-cols-3
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl 2xl:max-w-[1450px] mx-auto">
        {OurExpert.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
  );
};

export default OurExpertCard;