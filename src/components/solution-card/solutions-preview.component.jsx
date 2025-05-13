import SolutionItem from "./solution-card.component";
import gavel from '../../assets/images/gavel-solid.svg';
import scale from '../../assets/images/scale-balanced-solid.svg';
import building from '../../assets/images/building-solid.svg'

const solutions = [
  {
    svgIcon: gavel,
    title: "Enforcement Tech",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat earum molestias sint blanditiis",
    detailsLink: "#"
  },
  {
    svgIcon: scale,
    title: "Legal Tech",
    content: "Seamlessly move your business operations with scalable legal fit.",
    detailsLink: "#"
  },
  {
    svgIcon: building,
    title: "SME Tools",
    content: "Protect and build your idea with our enterprise-grade SME tools.",
    detailsLink: "#"
  }
];

const SolutionContent = () => (
  <article className="w-full bg-zinc-900 py-10 px-4">
    <h2 className="text-white font-extrabold font-poppins text-center text-2xl mb-8">Our Solutions</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl 2xl:max-w-[1450px] mx-auto">
      {solutions.map((item, index) => (
        <SolutionItem key={index} {...item} />
      ))}
    </div>
  </article>
);

export default SolutionContent;
