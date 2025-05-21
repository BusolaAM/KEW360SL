import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ContactForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [],
    message: '',
  });

  const timeSlots = [
    '9:00 – 9:30 AM', '10:00 – 10:30 AM', '11:00 – 11:30 AM',
    '1:00 – 1:30 PM', '2:00 – 2:30 PM', '3:00 – 3:30 PM',
  ];

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((s) => s !== value),
    }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      date: selectedDate,
      time: selectedTime,
    };
    console.log(finalData);
    // Submit logic here (e.g., send to API)
  };

  return (
    <section className='bg-zinc-950 pt-[4rem] p-4 pb-4 md:py-[8rem] lg:py-[6rem]'>
        <div className='max-w-xl mx-auto lg:mt-8'> 
            <h1 className='text-sm font-extrabold text-sky-400 mb-2'>MEETING REQUEST FORM</h1>
            <p className='text-xl mb-6 text-white'>We look forward to meeting with you</p> 
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-4 bg-sky-100 shadow-md rounded">
            <div>
                <label className="font-semibold block mb-1">Name <span className="text-red-500">*</span></label>
                <input name="name" value={formData.name} onChange={handleChange} required className="border w-full p-2 rounded" />
            </div>

            <div>
                <label className="font-semibold block mb-1">Email address <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="border w-full p-2 rounded" />
            </div>

            <div>
                <label className="font-semibold block mb-1">Phone number <span className="text-red-500">*</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="border w-full p-2 rounded" />
            </div>

            <div>
                <label className="font-semibold block mb-1">Which service or services are you interested in?</label>
                {['EnforcementTech', 'LegalTech', 'SME solutions'].map((service) => (
                <div key={service} className="flex items-center gap-2">
                    <input type="checkbox" value={service} onChange={handleCheckboxChange} />
                    <label>{service}</label>
                </div>
                ))}
            </div>

            <div>
                <label className="font-semibold block mb-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="border w-full p-2 rounded" />
            </div>

            {/* Date Picker */}
            <div>
                <label className="font-semibold block mb-1">Select a date <span className="text-red-500">*</span></label>
                <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                placeholderText="Choose a date"
                className="border p-2 rounded w-full"
                required
                />
            </div>

            {/* Time Slots */}
            <div>
                <label className="font-semibold block mb-1">Select a time slot <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                    <button
                    type="button"
                    key={slot}
                    className={`border p-2 rounded ${selectedTime === slot ? 'bg-sky-400 text-white' : 'bg-white hover:bg-gray-100'}`}
                    onClick={() => setSelectedTime(slot)}
                    >
                    {slot}
                    </button>
                ))}
                </div>
            </div>

            <button type="submit" className="w-full bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 rounded">
                SUBMIT
            </button>
        </form>
    </section>
  );
};

export default ContactForm;
