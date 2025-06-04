import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import ExploreLegalCard from "../components/exploreLegalCard/exploreLegalCardPreview.component";
import Accordion from "../components/accordion/accordion.component";
import SuccessCard from "../components/success-story/success-story.component";
import webinar from '../assets/images/webinar.PNG'

import 'react-datepicker/dist/react-datepicker.css';

const ResourcesPage = () => {
    const [startDate, setStartDate] = useState(null);

    return(
        <section className="p-4">
            <article className="mt-4">
                <div className='text-center flex flex-col gap-4'>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-shadow-[2px_2px_4px_hsl(282,44%,47%)]">
                        Exploring Legal Tech Innovations
                    </h2>
                    <p className='text-lg mb-4'>Stay informed with the latest insights and trends in legal technology.</p>
                </div>
                <div>
                    <ExploreLegalCard /> 
                </div>
            </article>

            <article className="mt-12">
                <div className='text-center flex flex-col gap-4'>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-shadow-[2px_2px_4px_hsl(282,44%,47%)]">
                        Common Queries
                    </h2>
                    <p className='text-lg mb-4'>Find answers to the most frequently asked questions about our services.</p>
                </div>
                <div>
                    <Accordion /> 
                </div>
            </article>

            <article className="mt-16">
                <div className='text-center flex flex-col gap-4'>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-shadow-[2px_2px_4px_hsl(282,44%,47%)]">
                        Success Stories
                    </h2>
                    <p className='text-lg mb-4'>Explore real-world examples of how our technology has made a difference.</p>
                </div>
                <div>
                    <SuccessCard /> 
                </div>
            </article>

            <article className="mt-16 mb-10">
                <div className='text-center flex flex-col gap-4'>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-shadow-[2px_2px_4px_hsl(282,44%,47%)]">
                        Join Our Webinars
                    </h2>
                    <p className='text-lg mb-4'>Engage with industry experts and enhance your knowledge.</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center mx-auto gap-10 max-w-5xl bg-silver p-6 rounded-lg shadow-lg">
                    <img
                    src={webinar}
                    alt="Webinar"
                    className="w-full lg:w-1/2 object-cover rounded-md shadow-md"
                    />

                    <div className="lg:w-1/2 space-y-5">
                    <h3 className="text-lg font-semibold">Navigating Legal Tech: Trends and Insights</h3>
                    <p className="text-gray-600 border-l-4 pl-4 border-gray-400 italic">
                        Join us for an insightful webinar where our experts will discuss the latest trends in legal technology. 
                        This session will cover key innovations, practical applications, and how organizations can adopt these 
                        technologies to stay ahead in a competitive landscape.
                    </p>

                    {/* DateTime Picker */}
                    <div className="flex items-center border px-2 py-2 rounded-md bg-white w-full">
                        <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        timeIntervals={30}
                        dateFormat="Pp"
                        placeholderText="Select date and time"
                        className="w-full outline-none"
                        minDate={new Date()} 
                        />
                    </div>

                    <p className="text-sm text-gray-500">
                        Event time zone: <span className="text-black">West African Time GMT+08:00</span>
                    </p>
                    </div>
                </div>

            </article>

        </section>
    );
};

export default ResourcesPage;