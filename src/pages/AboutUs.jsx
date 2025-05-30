import AboutInnovationCard from "../components/aboutOverviewCard/aboutOverviewCardPreview.component";
import OurExpertCard from "../components/expertsCard/expertsCardPreview.component";
import HistoryCard from "../components/historyCard/historyCardPreview.component";
import CollaborationCard from "../components/collaborationCard/collaborationCardPreview.component";

const AboutUsPage = () => {

    return(
        <section className="p-4">
            <article className="mt-4">
                <AboutInnovationCard />
            </article>

            <article className="mt-12">
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-2xl md:text-2xl font-poppins font-extralight text-shadow-[2px_2px_4px_hsl(282,44%,47%)]'>Meet Our Experts</h1>
                    <p className='text-base xl:lg'>A team of dedicated professionals with diverse backgrounds and expertise.</p>
                </div>
                <div>
                    <OurExpertCard />
                </div>
            </article>

            <article className="mt-12">
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-2xl md:text-2xl font-poppins font-extralight text-shadow-[2px_2px_4px_hsl(282,44%,47%)]'>Our Journey</h1>
                    <p className='text-base xl:lg'>A glimpse into our milestones and achievements over the years.</p>
                </div>
                <div>
                    <HistoryCard />
                </div>
            </article>

            <article className="mt-12">
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-2xl md:text-2xl font-poppins font-extralight text-shadow-[2px_2px_4px_hsl(282,44%,47%)]'>Collaborative Strength</h1>
                    <p className='text-base xl:lg'>Building partnerships to enhance our offerings and reach.</p>
                </div>
                <div>
                    <CollaborationCard />
                </div>
            </article>
        </section>
    );
};

export default AboutUsPage;