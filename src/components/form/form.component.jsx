import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
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
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true
    });
  }, []);

  return (
    <form id='contact' onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4 sm:p-6 space-y-4 flex-1 w-full md:max-w-xl" data-aos="fade-right">
        {/* <h2 className="text-lg sm:text-xl font-semibold text-center text-blue-900">Contact Us</h2> */}
        <h1 className=" text-lg font-medium text-sky-600 ">
            <small>GET IN TOUCH</small>
        </h1>
        <p className="text-lg mb-4 sm:text-md font-bold leading-tight text-dark ">We're here to help you succeed!</p>

        <div>
            <label className="block text-sm font-medium text-gray-700 after:content-['*'] after:text-red-400 after:px-1">Name</label>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Jerry Jane'
            required
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 after:content-['*'] after:text-red-400 after:px-1">Email</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='email@website.com'
            required
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 after:content-['*'] after:text-red-400 after:px-1">Phone Number</label>
            <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder='+234-555-5555-555'
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
        </div>

        <div className="flex items-start">
            <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 mr-2 accent-blue-950"
            />
            <label className="text-sm text-gray-600 after:content-['*'] after:text-red-400 after:px-1">
            I allow this website to store my submission so they can respond to my inquiry.
            </label>
        </div>

        <button
            type="submit"
            className="w-full bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-900 transition"
        >
            Submit
        </button>
    </form>

  );
};

export default ContactForm;
