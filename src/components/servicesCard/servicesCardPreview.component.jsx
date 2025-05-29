// import { useEffect } from "react";
// import SolutionItem from "./services-card.component";
// import Enforce from '../../assets/images/enforce.PNG';
// import Legal from '../../assets/images/legal.PNG';
// import SME from '../../assets/images/SME.jpg';
// import AOS from "aos";
// import "aos/dist/aos.css";

import CardItem from "./card.component"
import { Services } from "../../data";

const ServicesCard = () => {

  return(
      // sm:grid-cols-2 md:grid-cols-3
      <div className="mt-6 grid grid-cols-1 gap-6 max-w-6xl 2xl:max-w-[1450px] 2xl:place-items-center mx-auto">
        {Services.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
  );
};

export default ServicesCard;
