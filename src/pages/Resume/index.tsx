import { motion } from 'framer-motion';
import { useState } from 'react';
import ResumeSection from './ResumeSection';
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import phone from '/images/phone.svg';
import email from '/images/email.svg';
import home from '/images/home.svg';


const sliderStyle = `
  .multi-range-slider .thumb::before {
    box-shadow: none !important;
  }

  .multi-range-slider {
    border: none;
    box-shadow: none;
    padding: 15px 10px;
  }

  .multi-range-slider .thumb .caption * {
    background-color: var(--primary-color) !important;
    box-shadow: none !important;
  }

  .multi-range-slider .bar-left, .multi-range-slider .bar-right {
    box-shadow: none !important;
    background-color: gray !important;
  }

    .multi-range-slider .bar-inner {
    box-shadow: none !important;
    border: none !important;
    background-color: var(--primary-color) !important;
  }
`;

const ResumePage = () => {
  const currentYear = new Date().getFullYear();
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [yearRange, setYearRange] = useState<[number, number]>([2000, currentYear]);
  const minYear = 2000;
  const maxYear = currentYear;

  const areasOfFocus = [
    'Project Management',
    'Web Development',
    'Agriculture',
    'Governance',
    'Leadership',
    'Barbershop',
    'Just for Fun', 
    'Other',
    // 'WordPress',
    // 'React'
  ];

  const toggleArea = (area: string) => {
    setSelectedAreas(prev =>
      prev.includes(area)
        ? prev.filter(a => a !== area)
        : [...prev, area]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <style>{sliderStyle}</style>

      <section className="mb-16 max-w-4xl mx-auto lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
        <div className="mb-8 lg:mb-0 lg:sticky lg:top-4 lg:self-start">
          <h2 className="text-3xl font-bold mb-6">Resume</h2>
          <div className="flex flex-wrap gap-2">
            {areasOfFocus.map(area => (
              <button
                key={area}
                onClick={() => toggleArea(area)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedAreas.includes(area) 
                    ? 'bg-[--primary-color] text-white' 
                    : 'bg-gray-300 text-gray-900 hover:bg-gray-400'
                }`}
              >
                {area}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-4">

            <div className="flex flex-col gap-2">
              <span className="text-base font-bold text-gray-700">
                Year range: <span className="font-normal">{yearRange[0]} to {yearRange[1]}</span>
              </span>
              <MultiRangeSlider
                min={minYear}
                max={maxYear}
                step={1}
                minValue={yearRange[0]}
                maxValue={yearRange[1]}
                onChange={(e: ChangeResult) => {
                  setYearRange([e.minValue, e.maxValue]);
                }}
                label={false}
                ruler={false}
                canMinMaxValueSame={true}
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 shadow-md px-6 py-8 text-xs sm:px-12 sm:py-12">
          <h2 className="text-3xl font-bold mb-2 text-center"><span className="font-thin">Michael</span> Black</h2>
          <div className="flex justify-between gap-6 text-xs">
              <div className="flex items-center gap-2 sm:flex-row flex-col"><img src={phone} alt="Phone" className="w-4 h-4" /><a href="tel:226-343-5363">226-343-5363</a></div> 
              <div className="flex items-center gap-2 sm:flex-row flex-col"><img src={email} alt="Email" className="w-4 h-4" /><a href="mailto:michael@michaelblack.ca">michael@michaelblack.ca</a></div>
              <div className="flex items-center gap-2 sm:flex-row flex-col"><img src={home} alt="Home" className="w-4 h-4" />Fergus, Ontario</div>
          </div>
          <hr className="border-t border-gray-300 mt-2 mb-4" />
          <ResumeSection
            title="Education"
            type="Education"
            selectedAreas={selectedAreas}
            yearRange={yearRange}
          />
          <ResumeSection
            title="Work Experience"
            type="Work Experience"
            selectedAreas={selectedAreas}
            yearRange={yearRange}
          />
          <ResumeSection
            title="Volunteering"
            type="Volunteering"
            selectedAreas={selectedAreas}
            yearRange={yearRange}
          />
          <ResumeSection
            title="Certifications"
            type="Certification"
            selectedAreas={selectedAreas}
            yearRange={yearRange}
          />
          <ResumeSection
            title="Projects"
            type="Project"
            selectedAreas={selectedAreas}
            yearRange={yearRange}
          />
          
          <ResumeSection
            title="Other"
            type="Other"
            selectedAreas={selectedAreas}
            yearRange={yearRange}
          />
          <ResumeSection
            title="Recognitions"
            type="Recognition"
            selectedAreas={selectedAreas}
            yearRange={yearRange}
          />
        </div>
      </section>
    </motion.div>
  );
};

export default ResumePage;