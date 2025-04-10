import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeItems } from '../../data/resume';
import CaretDownIcon from '../../images/caret-down.svg';
import CaretUpIcon from '../../images/caret-up.svg';

interface ResumeSectionProps {
  title: string;
  type: 'Work Experience' | 'Volunteering' | 'Project' | 'Education' | 'Other' | 'Recognition' | 'Certification';
  selectedAreas: string[];
  yearRange: [number, number];
  isFirstSection?: boolean;
}

const ExpandButton: React.FC<{
  isExpanded: boolean;
  onClick: () => void;
}> = ({ isExpanded, onClick }) => {
  return (
    <button onClick={onClick} className="pl-1 inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
      {isExpanded ? (
        <CaretUpIcon />
      ) : (
        <CaretDownIcon />
      )}
    </button>
  );
};

const ResumeSection: React.FC<ResumeSectionProps> = ({
  title,
  type,
  selectedAreas,
  yearRange,
}) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const filteredItems = resumeItems
    .filter(item => item.type === type)
    .filter(item => 
      selectedAreas.length === 0 
        ? item.significant === true // only show significant items when no areas selected
        : item.areaOfFocus.some(area => selectedAreas.includes(area)) // only show items with matching areas when areas are selected
    )
    .filter(item => {
      const currentYear = new Date().getFullYear();
      const startYear = parseInt(item.startDate.split(' ')[1] || item.startDate);
      const endYear = item.endDate 
        ? parseInt(item.endDate.split(' ')[1] || item.endDate)
        : currentYear;
      
      // Show if there's any overlap between the ranges
      return !isNaN(startYear) && !isNaN(endYear) && 
        startYear <= yearRange[1] && // item starts before filter end
        endYear >= yearRange[0];     // item ends after filter start
    });

  // Group items by organization
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.organization]) {
      acc[item.organization] = [];
    }
    acc[item.organization].push(item);
    return acc;
  }, {} as Record<string, typeof filteredItems>);

  // Sort items within each group by end date
  Object.values(groupedItems).forEach(group => {
    group.sort((a, b) => {
      const aDate = a.endDate || a.startDate;
      const bDate = b.endDate || b.startDate;
      return new Date(bDate).getTime() - new Date(aDate).getTime();
    });
  });

  // Sort organizations by most recent end date in each group
  const sortedGroups = Object.entries(groupedItems).sort(([, aGroup], [, bGroup]) => {
    const aLatestDate = aGroup[0].endDate || aGroup[0].startDate;
    const bLatestDate = bGroup[0].endDate || bGroup[0].startDate;
    return new Date(bLatestDate).getTime() - new Date(aLatestDate).getTime();
  });

  // Flatten the groups back into a single array
  // If Education, reverse the order of the items
  const sortedItems = sortedGroups.flatMap(([, group]) => group);
  if (type === 'Education') {
    sortedItems.reverse();
  }

  const toggleExpand = (id: number) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  if (sortedItems.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <h3 className="text-base font-semibold mb-4">
        <span className="inline-block bg-[--primary-color] px-4 py-2 text-white uppercase rounded-sm">
          {title}
        </span>
      </h3>
      <div className="space-y-2">
        <AnimatePresence mode="popLayout">
          {sortedItems.map((item, index) => {
            const isFirstInGroup = index === 0 || sortedItems[index - 1].organization !== item.organization;
            const isLastInGroup = index === sortedItems.length - 1 || sortedItems[index + 1].organization !== item.organization;
            const hasMultipleInGroup = !isFirstInGroup || !isLastInGroup;
            
            return (
              <React.Fragment key={item.id}>
                {isFirstInGroup && hasMultipleInGroup && (
                  <div className="font-semibold text-sm mb-2">
                    {<a href={item.organizationLink} target="_blank" rel="noopener noreferrer">{item.organization}</a>}
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  layout
                  className={`relative ${hasMultipleInGroup ? 'pl-6' : ''}`}
                >
                  {/* Vertical line */}
                  {hasMultipleInGroup && !isLastInGroup && (
                    <div 
                      className="absolute left-[0.25rem] bottom-[-1rem] w-0.5 bg-[--primary-color] opacity-25"
                      style={{ top: '0.5rem', bottom: '-1rem' }}
                    />
                  )}
                  
                  {/* Bullet point */}
                  {hasMultipleInGroup && (
                    <div className="absolute left-0 top-[0.3rem] w-2.5 h-2.5 rounded-full bg-[--primary-color]" />
                  )}
                  
                  <div className="pb-2">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex-grow">
                        {(item.areaOfFocus.includes('Quartet') || item.areaOfFocus.includes('Chorus')) ? (
                          <p className="font-bold">
                            {item.title} {!hasMultipleInGroup && item.organization !== 'Quartets' && item.organization !== 'Choruses' && `- ${item.organization}`
                            }
                            {item.description && (
                              <ExpandButton
                                isExpanded={expandedItems.includes(item.id)}
                                onClick={() => toggleExpand(item.id)}
                              />
                            )}
                          </p>
                        ) : (
                          <>
                            <div>
                              <p className="font-bold">
                                {item.title}
                                {item.description && (
                                  <ExpandButton
                                    isExpanded={expandedItems.includes(item.id)}
                                    onClick={() => toggleExpand(item.id)}
                                  />
                                )}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              {!hasMultipleInGroup && (
                                <a href={item.organizationLink} target="_blank" rel="noopener noreferrer"><p className="font-medium text-gray-700 dark:text-gray-300">{item.organization}</p></a>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          {item.startDate == item.endDate ? item.startDate : item.endDate ? `${item.startDate} - ${item.endDate}` : item.startDate + ' - Present'}
                        </p>
                      </div>
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt={`${item.organization} logo`}
                          className="w-12 h-12 object-contain ml-4"
                        />
                      )}
                    </div>

                    {item.description && (
                      <AnimatePresence>
                        {expandedItems.includes(item.id) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 ml-4 [&_li]:list-disc [&_li]:ml-4 [&_a]:underline [&_p]:mb-2"
                          >
                            <div dangerouslySetInnerHTML={{ __html: item.description }} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResumeSection; 