import { useState } from 'react';
import { AccordionItems } from '../../data';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      {AccordionItems.map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 bg-black">
          <button
            className={`flex justify-between items-center w-full py-4 px-2 text-left font-medium transition-colors ${activeIndex === index ? 'text-purple-600' : 'text-white hover:text-purple-500'}`}
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`accordion-panel-${index}`}
          >
            <span className='text-white'>{item.title}</span>
            <svg
              className={`w-5 h-5 text-white transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            id={`accordion-panel-${index}`}
            className={`overflow-hidden bg-white px-2 transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 pb-4' : 'max-h-0'}`}
            aria-hidden={activeIndex !== index}
          >
            <div className="text-gray-600">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;