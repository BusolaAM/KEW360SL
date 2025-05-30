import { useState } from "react";
import LegalSolutionCard from "../components/legalCard/legalCardPreview.component";
import SMESolutionCard from "../components/SMECard/SMECardPreview.component";
import EnforcementSolutionCard from "../components/enforcementCard/enforcementCardPreview.component";
import CustomBtn from "../components/custom-button/custom-button.component";


const ServicesPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        consent: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
          ...formData,
          [name]: type === value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.consent) {
          alert('Please agree to the terms before submitting.');
          return;
        }
        console.log('Submitted:', formData);
        // Handle form submission (API call or other logic)
      };

    return(
        <section className='bg-silver p-4'>
            <article className='mt-8'>
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-2xl md:text-2xl font-poppins font-extralight text-shadow-[2px_2px_4px_hsl(282,44%,47%)]'>KewCase Solution</h1>
                    <p className='text-base xl:lg'>Trusted by legal professionals to modernize operations.</p>
                </div>
                <div>
                    <LegalSolutionCard />
                </div>
            </article>
            
            <article className='mt-8'>
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-2xl md:text-2xl font-poppins font-extralight text-shadow-[2px_2px_4px_hsl(282,44%,47%)]'>KewForce Solution</h1>
                    <p className='text-base xl:lg'>We built and designed with enforcement officers in mind to messaging</p>
                </div>
                <div>
                    <EnforcementSolutionCard />
                </div>
            </article>

            <article className='mt-8'>
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-2xl md:text-2xl font-poppins font-extralight text-shadow-[2px_2px_4px_hsl(282,44%,47%)]'>KewSuite Solution</h1>
                    <p className='text-base xl:lg'>Empowering African businesses with enterprise-grade tools at SME prices.</p>
                </div>
                <div>
                    <SMESolutionCard />
                </div>
            </article>

            <article className='mt-8'>
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-2xl md:text-2xl font-poppins font-extralight text-shadow-[2px_2px_4px_hsl(282,44%,47%)]'>Request a Quote</h1>
                    <p className='text-base xl:lg'>Get in Touch with Us.</p>
                </div>
                <form onSubmit={handleSubmit} className="shadow-md rounded p-4 sm:p-6 space-y-4 flex-1 w-full md:max-w-xl md:mx-auto">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 after:content-['*'] after:text-red-400 after:px-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Jerry Jane'
                            required
                            className="w-full border border-gray-400 rounded px-3 py-2 mt-1"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium after:content-['*'] after:text-red-400 after:px-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='email@website.com'
                            required
                            className="w-full border border-gray-400 rounded px-3 py-2 mt-1"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium ">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            required
                            className="w-full border border-gray-400 rounded px-3 py-2 mt-1"
                        />
                    </div>

                    <CustomBtn 
                        className="w-full md:w-[150px] bg-black text-white font-extrabold text-sm py-2 px-4 font-poppins hover:cursor-pointer hover:scale-95"
                        btnContent="Submit"
                        type="submit"
                    />
                </form>
            </article>
        </section>

    );
};

export default ServicesPage;