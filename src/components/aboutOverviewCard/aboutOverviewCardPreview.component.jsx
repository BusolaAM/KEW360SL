import CardItem from "./aboutOverviewCard.component";
import { AboutInnovation } from "../../data";

const AboutInnovationCard = () => {

  return(

      <div className="mt-6 grid grid-cols-1 gap-6 max-w-6xl 2xl:max-w-[1450px] 2xl:place-items-center mx-auto">
        {AboutInnovation.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
  );
};

export default AboutInnovationCard;
