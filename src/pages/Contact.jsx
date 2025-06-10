import contactImg from '../assets/images/contact.jpg';
import { MapPin, Clock, Phone } from "lucide-react";
const ContactUsPage = () => {

    return(
        <section>
            <article className='flex justify-center items-center' style={{ background: `url(${contactImg}) center`, backgroundSize: 'cover' , height:'50vh', overflow:'hidden' }}>
                <div className='text-center flex flex-col gap-4'>
                    <h2 className="text-5xl font-semibold text-white mb-4 text-shadow-[2px_2px_4px_hsl(282,44%,47%)]">
                        Stay Connected
                    </h2>
                    <p className=' text-lg font-bold mb-4'>Join our community for the latest updates and insights.</p>
                </div>
            </article>
            <article className="bg-gray-100 py-16 px-4 md:px-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-2">Visit Us</h2>
                    <p className="text-center text-gray-600 mb-10">
                    We look forward to welcoming you at our office. Check our hours and plan your visit.
                    </p>

                    <div className="grid gap-10 lg:grid-cols-3">

                        <form
                            action=""
                            method=""
                            className="space-y-4"
                        >
                            <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            ></textarea>
                            <button
                            type="submit"
                            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                            >
                            Submit
                            </button>
                        </form>

                        <div className="w-full h-72 lg:h-full">
                            <iframe
                            title="Google Map"
                            src="https://www.google.com/maps?q=Abuja,Nigeria&output=embed"
                            className="w-full h-full border-none rounded"
                            allowFullScreen
                            loading="lazy"
                            ></iframe>
                        </div>

                        <div className="space-y-6 text-gray-700">
                            <div className="flex items-start gap-3">
                            <MapPin className="text-black mt-1" />
                            <p>
                                Plot x Central District,
                                <br />
                                Abuja, Nigeria
                            </p>
                            </div>
                            <div className="flex items-start gap-3">
                            <Clock className="text-black mt-1" />
                            <p>Mon–Fri 10am–5pm, Sat 1pm–5pm</p>
                            </div>
                            <div className="flex items-start gap-3">
                            <Phone className="text-black mt-1" />
                            <p>+234 700 0000 000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ContactUsPage;