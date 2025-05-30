import CardItem from "../card/card.component"
import { SMESolution } from "../../data";

const SMESolutionCard = () => {

  return(
      
      <div className="mt-6 grid grid-cols-1 gap-6 max-w-6xl 2xl:max-w-[1450px] 2xl:place-items-center mx-auto">
        {SMESolution.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
  );
};

export default SMESolutionCard;
