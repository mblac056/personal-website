export interface ResumeItem {
  id: number;
  type: 'Work Experience' | 'Volunteering' | 'Project' | 'Education' | 'Other' | 'Recognition' | 'Certification';
  areaOfFocus: string[];
  role?: string;
  logo?: string;
  startDate: string;
  endDate?: string;
  title: string;
  organization: string;
  organizationLink?: string;
  description?: string;
  link?: string;
  significant?: boolean;
}

export const resumeItems: ResumeItem[] = [
  // Current Roles
  {
    id: 1,
    type: 'Work Experience',
    areaOfFocus: ['Web Development', 'Agriculture'],
    title: 'Full Stack Developer - Junior',
    organization: 'Farm Health Guardian',
    organizationLink: 'https://farmhealthguardian.com/',
    startDate: 'Feb 2025',
    description: `<ul><li>Develop and maintain full-stack applications, contributing to all stages of the product lifecycle, including design, development, deployment, and maintenance.</li><li>Build user-friendly, mobile-responsive front-end interfaces and well-functioning back-end architectures using C#, .NET Core, Mithril.js, and Azure services.</li><li>Collaborate with the development team to ensure system consistency, enhance user experience, and implement best practices in coding, security, and performance optimization.</li><li>Write and maintain technical documentation, troubleshoot and debug issues, and create efficient APIs and database solutions (Azure SQL, MySQL, MSSQL).</li><li>Stay up-to-date with new technologies, proactively recommending and integrating improvements to strengthen product stability and performance.</li></ul>`,
    significant: true
  },
  {
    id: 2,
    type: 'Work Experience',
    areaOfFocus: ['Project Management', 'Leadership', 'Agriculture'],
    title: 'Technology Team Lead',
    organization: 'Farm Health Guardian',
    organizationLink: 'https://farmhealthguardian.com/',
    startDate: 'Jun 2022',
    endDate: 'Jun 2024',
    description: 'Led technology team, oversaw projects, managed developers, maintained tools for biosecurity initiatives.'
  },
  {
    id: 3,
    type: 'Work Experience',
    areaOfFocus: ['Web Development', 'Project Management', 'Agriculture'],
    title: 'Digital Team Lead',
    organization: 'Synthesis Agri-Food Network',
    organizationLink: 'https://synthesis.ag/',
    startDate: 'Sep 2019',
    endDate: 'Feb 2025',
    description: `<ul><li>Supervise the development team (3 developers, 1 customer service) and any outsourced IT services</li><li>Oversee digital/web-based projects, including executing the overall project plan, managing all project dependencies, defining and prioritizing issues, problems and opportunities, managing risks, delegating tasks, controlling scope, and adhering to schedule and budget.</li><li>Provide input into planning for projects, including developing initiations, cost/work estimates, and project plans.</li></ul>`,
    significant: true
  },
  {
    id: 4,
    type: 'Work Experience',
    areaOfFocus: ['Web Development', 'Project Management', 'Agriculture'],
    title: 'Digital Project Manager and Business Analyst',
    organization: 'Synthesis Agri-Food Network',
    organizationLink: 'https://synthesis.ag/',
    startDate: 'Oct 2018',
    endDate: 'Sep 2019',
    description: `<ul><li>Oversaw digital/web-based projects, including executing the overall project plan, managing all project dependencies, defining and prioritizing issues, problems and opportunities, managing risks, delegating tasks, controlling scope, and adhering to schedule and budget.</li><li>Provided input into planning for projects, including developing initiations, cost/work estimates, and project plans.</li><li>Acted as intermediary between client and IT teams in technical solution design activities (e.g. clarifying requirements, refining/documenting data and business rules, communicating technology constraints, creating proposals and negotiating alternative solutions, and defining recommendations).</li></ul>`,
    significant: true
  },
  {
    id: 5,
    type: 'Work Experience',
    areaOfFocus: ['Agriculture'],
    title: 'Research and Data Analyst',
    organization: 'Synthesis Agri-Food Network',
    organizationLink: 'https://synthesis.ag/',
    startDate: 'Aug 2016',
    endDate: 'Oct 2018',
    significant: true
  },
  {
    id: 6,
    type: 'Work Experience',
    areaOfFocus: ['Project Management', 'Agriculture'],
    title: 'Consulting Project Coordinator',
    organization: 'Synthesis Agri-Food Network',
    organizationLink: 'https://synthesis.ag/',
    startDate: 'May 2013',
    endDate: 'Aug 2016',
    description: `<ul><li>As technical support lead, provided information technology and software support for staff, as well as basic server and database maintenance</li><li>Provided support to clients and internal team through data analysis, research, analysis, business writing, survey preparation, and project management.</li><li>Wrote, edited, and formated research reports, briefing notes, new business proposals, and presentations</li><li>Managed projects, including project budgeting and co-ordinating various tasks to be completed by internal staff or outside services providers</li><li>Stayed current on issues and trends impacting the food and agriculture sector</li></ul>`,
    significant: true
  },
  {
    id: 7,
    type: 'Volunteering',
    areaOfFocus: ['Governance', 'Leadership'],
    title: 'Chair',
    organization: 'TESS Research Foundation',
    organizationLink: 'https://tessresearch.org/',
    startDate: 'Jan 2025',
    significant: true
  },
  {
    id: 8,
    type: 'Volunteering',
    areaOfFocus: ['Governance', 'Leadership'],
    title: 'Vice Chair',
    organization: 'TESS Research Foundation',
    organizationLink: 'https://tessresearch.org/',
    startDate: 'May 2023',
    endDate: 'Dec 2024',
    significant: true
  },
  {
    id: 10,
    type: 'Volunteering',
    areaOfFocus: ['Web Development', 'Barbershop'],
    title: 'Website Manager',
    organization: 'Harmonize 4 Speech',
    organizationLink: 'https://harmonize4speech.org/',
    startDate: 'March 2022'
  },
  {
    id: 11,
    type: 'Volunteering',
    areaOfFocus: ['Web Development'],
    title: 'Website Manager',
    organization: 'Sustainable Waterloo Region',
    organizationLink: 'https://sustainablewaterlooregion.ca/',
    startDate: 'Mar 2020',
    endDate: 'Jan 2025',
    significant: true
  },
  {
    id: 12,
    type: 'Volunteering',
    areaOfFocus: ['Web Development', 'Barbershop'],
    title: 'Webmaster',
    organization: 'Ontario District of the Barbershop Harmony Society',
    organizationLink: 'https://www.ontariosings.com/',
    startDate: 'Apr 2012',
    description: `<p><a href="https://www.ontariosings.com/">www.ontariosings.com</a></p>
<ul>
  <li>Serve as webmaster, managing and maintaining the district website to support recruitment, event promotion, and organizational initiatives.</li>
  <li>Led a full website redesign and restructuring to adopt emerging technologies, improve user experience, and transition to a new domain aligned with the organization's mission.</li>
  <li>Ensure all content is optimized for Search Engine Optimization (SEO) and accessible across devices.</li>
  <li>Conduct ongoing reporting and analysis of website performance, using insights to drive improvements and strategic decisions.</li>
  <li>Research and evaluate new technologies to anticipate challenges, identify opportunities, and enhance the site's effectiveness.</li>
</ul>`,
    significant: true
  },
  {
    id: 13,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Barbershop', 'Governance'],
    title: 'Chair - Bylaws, Operations and Procedures Committee',
    organization: 'Ontario District of the Barbershop Harmony Society',
    organizationLink: 'https://www.ontariosings.com/',
    startDate: '2023',
    significant: true
  },
  {
    id: 14,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Barbershop'],
    title: 'Chair - History and Archives Committee',
    organization: 'Ontario District of the Barbershop Harmony Society',
    organizationLink: 'https://www.ontariosings.com/',
    startDate: '2024',
    significant: true
  },
  {
    id: 15,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Barbershop', 'Governance'],
    title: 'President',
    organization: 'Ontario District of the Barbershop Harmony Society',
    organizationLink: 'https://www.ontariosings.com/',
    startDate: '2020',
    endDate: '2021',
    significant: true
  },
  {
    id: 16,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Barbershop', 'Governance'],
    title: 'Executive Vice President',
    organization: 'Ontario District of the Barbershop Harmony Society',
    organizationLink: 'https://www.ontariosings.com/',
    startDate: '2018',
    endDate: '2019',
    significant: true
  },
  {
    id: 17,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Barbershop', 'Governance'],
    title: 'Immediate Past President',
    organization: 'Ontario District of the Barbershop Harmony Society',
    organizationLink: 'https://www.ontariosings.com/',
    startDate: '2022',
    endDate: '2023',
    significant: true
  },
  {
    id: 18,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Barbershop'],
    title: 'VP Marketing and PR',
    organization: 'Ontario District of the Barbershop Harmony Society',
    organizationLink: 'https://www.ontariosings.com/',
    startDate: 'Oct 2015',
    endDate: 'Dec 2019',
    significant: true
  },
  {
    id: 19,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Governance', 'Barbershop'],
    title: 'Board Member',
    organization: 'Sing Canada Harmony',
    organizationLink: 'https://singcanadaharmony.ca/',
    startDate: 'Nov 2014',
    endDate: 'Nov 2020',
    significant: true
  },
  {
    id: 20,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Governance', 'Barbershop', 'Strategic Planning'],
    title: 'Chair - Strategic Planning Committee',
    organization: 'Sing Canada Harmony',
    organizationLink: 'https://singcanadaharmony.ca/',
    startDate: 'Nov 2018',
    endDate: 'Nov 2019'
  },
  {
    id: 101,
    type: 'Volunteering',
    areaOfFocus: ['Web Development'],
    title: 'Webmaster',
    organization: 'Sing Canada Harmony',
    organizationLink: 'https://singcanadaharmony.ca/',
    startDate: 'Nov 2020'
  },
  {
    id: 21,
    type: 'Volunteering',
    areaOfFocus: ['Governance', 'Agriculture'],
    title: 'Board Member',
    organization: 'AgScape',
    organizationLink: 'https://agscape.ca/',
    startDate: 'May 2024',
    description: `<ul>
    <li>Serve as a member of the Board of Directors for AgScape, providing governance oversight and strategic guidance to support agricultural education initiatives across Ontario.</li>
    <li>Contribute to policy development, organizational planning, and advocacy efforts</li>
  </ul>`,
    significant: true
  },
  {
    id: 22,
    type: 'Other',
    areaOfFocus: ['Barbershop'],
    title: 'Lead Section Leader',
    organization: 'Toronto Northern Lights',
    organizationLink: 'https://northernlightschorus.com/',
    startDate: 'Dec 2013',
    endDate: 'Feb 2020'
  },
  {
    id: 23,
    type: 'Other',
    areaOfFocus: ['Barbershop'],
    title: 'Tenor Section Leader',
    organization: 'Toronto Northern Lights',
    organizationLink: 'https://northernlightschorus.com/',  
    startDate: 'March 2020',
    endDate: 'Dec 2022'
  },
  {
    id: 25,
    type: 'Other',
    areaOfFocus: ['Barbershop'],
    title: 'Member',
    organization: 'Toronto Northern Lights',
    organizationLink: 'https://northernlightschorus.com/',
    startDate: 'Feb 2011',
    endDate: 'Dec 2024'
  },
  {
    id: 26,
    type: 'Volunteering',
    areaOfFocus: ['Barbershop'],
    title: 'Candidate Administrative Judge',
    organization: 'Barbershop Harmony Society',
    organizationLink: 'https://barbershop.org/',
    startDate: '2024',
    significant: true
  },
  {
    id: 27,
    type: 'Other',
    areaOfFocus: ['Other'],
    title: 'Snare Drummer',
    organization: 'Fergus Pipe Band',
    organizationLink: 'https://www.ferguspipeband.com/',
    startDate: 'Aug 2023'
  },
  {
    id: 102,
    type: 'Volunteering',
    areaOfFocus: ['Web Development'],
    title: 'Co-Webmaster',
    organization: 'Fergus Pipe Band',
    organizationLink: 'https://www.ferguspipeband.com/',
    startDate: 'Jan 2022'
  },
  {
    id: 103,
    type: 'Volunteering',
    areaOfFocus: ['Web Development', 'Barbershop'],
    title: 'Webmaster',
    organization: 'Toronto Northern Lights',
    organizationLink: 'https://northernlightschorus.com/',
    startDate: 'Apr 2018'
  },
  {
    id: 28,
    type: 'Other',
    areaOfFocus: ['Just for Fun'],
    title: 'Trivia Host',
    organization: 'Outpost Bottle Shop',
    startDate: 'March 2025'
  },
  {
    id: 29,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Lead - \'Shoptimus Prime',
    organization: 'Quartets',
    organizationLink: 'https://shoptimusprimequartet.com/',
    startDate: '2011',
    description: '<ul><li>2012 Ontario District Quartet Champion</li><li>2015, International Collegiate Silver Medalist</li><li>2017 International Quartet Representative</li></ul>',
    significant: true
  },
  {
    id: 30,
    type: 'Other',
    areaOfFocus: ['Barbershop'],
    title: 'Member',
    organization: 'Barbershop Harmony Society',
    organizationLink: 'https://barbershop.org/',
    startDate: 'Feb, 2009'
  },
  {
    id: 31,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Chorus'],
    title: 'Member - Royal City Ambassadors',
    organization: 'Choruses',
    organizationLink: 'https://www.royalcityambassadors.com/pub/',
    startDate: '2009'
  },
  {
    id: 32,
    type: 'Other',
    areaOfFocus: ['Barbershop'],
    title: 'Contributor - Crossword Constructor',
    organization: 'The Harmonizer',
    organizationLink: 'https://www.barbershop.org/news/the-harmonizer-magazine',
    description: `<p><a href="https://michael-black.com/crosswords/?tag=Barbershop" target="_blank" rel="noopener noreferrer">Try solving these crosswords here</a></p>`,
    startDate: '2021'
  },
  {
    id: 33,
    type: 'Project',
    areaOfFocus: ['Web Development', 'Agriculture'],
    title: 'Co-Founder',
    organization: 'Ringside Seat',
    organizationLink: 'https://ringsideseat.live/',
    startDate: '2024',
    description: `<p><a href="https://ringsideseat.live/">ringsideseat.live</a></p>
    <ul>
  <li>Ringside Seat is a live event management platform designed for livestock shows, providing real-time tracking of participants and event progress.</li>
  <li>The platform offers mobile-friendly, swipeable interfaces for audience engagement, with live updates on classes, judging status, and results.</li>
  <li>Built on a scalable React and Firebase architecture to support shows of all sizes with minimal setup and real-time data synchronization.</li>
  <li>Customizable for different event types, including cattle shows, horse shows, and other agricultural exhibitions, with support for multi-day events.</li>
</ul>`,
    significant: true
  },
  {
    id: 34,
    type: 'Project',
    areaOfFocus: ['Web Development', 'Barbershop'],
    title: 'Principal',
    organization: 'Who\'s Up Live',
    organizationLink: 'https://whosup.live/',
    startDate: '2024',
    description: `<p><a href="https://whosup.live/">whosup.live</a></p>
<ul>
  <li>Who’s Up is a live event management platform built for barbershop singing competitions, delivering real-time performer tracking and stage status updates.</li>
  <li>The platform features mobile-friendly, swipeable interfaces that keep audiences, competitors, and organizers informed about contest progress.</li>
  <li>Developed with a scalable React and Firebase architecture to ensure fast, synchronized updates across devices and support multi-session events.</li>
  <li>Customizable for various contest formats, including quartets, choruses, and specialty festivals, with tools for session management and flexible scheduling.</li>
</ul>`,
    significant: true
  },
  {
    id: 35,
    type: 'Education',
    areaOfFocus: ['Project Management', 'Web Development', 'Leadership'],
    title: 'Bachelor of Commerce, Management Information Systems',
    organization: 'University of Ottawa',
    organizationLink: 'https://uottawa.ca/',
    startDate: '2009',
    endDate: '2013',
    description: `<ul><li>Graduated cum laude</li></ul>`,
    significant: true
  },
  {
    id: 36,
    type: 'Certification',
    areaOfFocus: ['Project Management', 'Web Development'],
    title: 'eLearning Certificate Program',
    organization: 'University of Toronto School of Continuing Studies',
    organizationLink: 'https://learn.utoronto.ca/',
    startDate: '2016',
    endDate: '2016'
  },
  {
    id: 37,
    type: 'Certification',
    areaOfFocus: ['Project Management', 'Web Development'],
    title: 'Business Analysis Certificate Program',
    organization: 'University of Toronto School of Continuing Studies',
    organizationLink: 'https://learn.utoronto.ca/',
    startDate: '2018',
    endDate: '2018'
  },
  {
    id: 38,
    type: 'Education',
    areaOfFocus: ['Other'],
    title: 'Ontario Secondary School Diploma',
    organization: 'St. James Catholic High School',
    startDate: 'Sep 2005',
    endDate: 'May 2009'
  },
  {
    id: 39,
    type: 'Certification',
    areaOfFocus: ['Certification'],
    title: 'AWS Certified Cloud Practitioner',
    organization: 'AWS',
    organizationLink: 'https://aws.amazon.com/',
    startDate: 'May 2021',
    significant: true
  },
  {
    id: 40,
    type: 'Recognition',
    areaOfFocus: ['Barbershop'],
    title: 'Barbershopper of Renown',
    organization: 'Ontario District of the Barbershop Harmony Society', 
    organizationLink: 'https://www.ontariosings.com/',
    startDate: '2018',
    endDate: '2018'
  },
  {
    id: 41,
    type: 'Work Experience',
    areaOfFocus: ['Project Management', 'Leadership', 'Agriculture'],
    title: 'Digital Team Lead',
    organization: 'AgNition Inc.',
    startDate: 'Sep 2019',
    endDate: 'Sep 2021',
    significant: true
  },
  {
    id: 42,
    type: 'Work Experience',
    areaOfFocus: ['Agriculture'],
    title: 'Business Development Coordinator',
    organization: 'AgNition Inc.',
    startDate: 'Dec 2017',
    endDate: 'Sep 2019',
    description: `<ul><li>Increasing growth in our digital products with existing clients and position AgNition as a solution provider to new clients</li><li>Conducting market research to determine product-market fit and prioritize customer needs for AgNition digital products</li><li>Managing our digital products by developing recommendations for new function/features, clarifying process flow and user experience design, and maintaining documentation</li></ul>`
  },
  {
    id: 43,
    type: 'Volunteering',
    areaOfFocus: ['Barbershop'],
    title: 'Member - Barbershopper of the Year Selection Committee',
    organization: 'Barbershop Harmony Society',
    organizationLink: 'https://www.barbershop.org/society-awards-2020',
    startDate: '2020',
    endDate: '2020'
  },
  {
    id: 44,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Lead - Xtremities',
    organization: 'Quartets',
    startDate: '2010',
    endDate: '2010'
  },
  {
    id: 45,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Lead - Basses Loaded',
    organization: 'Quartets',
    startDate: '2011',
    endDate: '2013',
    description: '<ul><li>Spring 2011 Ontario District Novice Champion</li></ul>'
  },
  {
    id: 46,
    type: 'Work Experience',
    areaOfFocus: ['Other'],
    title: 'Owner / Operator',
    organization: 'Bricks and Wedges Cheese',
    startDate: 'May 2010',
    endDate: 'Sep 2011',
    description: `<ul><li>Satisfied client requests with a service-minded, professional attitude</li><li>Effectively managed the challenging schedule demands of operating a start-up sole proprietorship built around the early-morning hours-of-operation of Farmers’ Markets</li><li>Interacted with and marketed to customers and other vendors on a daily basis</li><li>Recognized growth opportunities and expanded operations to another product line, resulting in a 30-50% increase in daily profit</li><li>Inventoried, summarized, and forecasted daily and weekly net sales</li><li>Calculated regular and sale prices to maximize return</li></ul>`
  },
  {
    id: 47,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Chorus'],
    title: 'Member - Ottawa Capital City Chorus',
    organization: 'Choruses',
    organizationLink: 'https://capitalcitychorus.org/',
    startDate: 'Sep 2009',
    endDate: 'May 2013'
  },
  {
    id: 48,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Barbershop'],
    title: 'VP Finance',
    organization: 'Ottawa Capital City Chorus',
    organizationLink: 'https://capitalcitychorus.org/',
    startDate: '2011',
    endDate: '2011'
  },
  {
    id: 49,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Barbershop'],
    title: 'VP Marketing and PR',
    organization: 'Ottawa Capital City Chorus',
    organizationLink: 'https://capitalcitychorus.org/',
    startDate: '2012',
    endDate: '2012'
  },
  {
    id: 50,
    type: 'Volunteering',
    areaOfFocus: ['Barbershop', 'Governance'],
    title: 'Member - CEO Search Committee',
    organization: 'Barbershop Harmony Society',
    organizationLink: 'https://barbershop.org/',
    startDate: '2024',
    endDate: '2025'
  },
  {
    id: 51,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Chorus'],
    title: 'Member - Cross Canada Chorus',
    organization: 'Choruses',
    startDate: '2010',
    endDate: '2011'
  },
  {
    id: 52,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Chorus'],
    title: 'Member - Director Search Committee',
    organization: 'Toronto Northern Lights',
    organizationLink: 'https://northernlightschorus.com/',
    startDate: '2021',
    endDate: '2021'
  },
  {
    id: 53,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Lead - Future Presentation',
    organization: 'Quartets',
    startDate: '2009',
    endDate: '2010'
  },
  {
    id: 54,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Chorus'],
    title: 'Member - Hamilton Harbourtown Sound',
    organization: 'Choruses',
    organizationLink: 'https://www.harbourtownsound.ca/',
    startDate: '2023',
    endDate: '2024'
  },
  {
    id: 55,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Chorus'],
    title: 'Member - Hamilton Harbourtown Sound',
    organization: 'Choruses',
    organizationLink: 'https://www.harbourtownsound.ca/',
    startDate: '2013',
    endDate: '2014'
  },
  {
    id: 56,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Tenor - Liner Notes',
    organization: 'Quartets',
    startDate: '2016',
    endDate: '2018'
  },
  {
    id: 57,
    type: 'Volunteering',
    areaOfFocus: ['Other'],
    title: 'VP Internal',
    organization: 'Management Information Systems Association',
    startDate: 'Sep 2011',
    endDate: 'May 2012'
  },
  {
    id: 58,
    type: 'Volunteering',
    areaOfFocus: ['Other'],
    title: 'VP Communications',
    organization: 'Management Information Systems Association',
    startDate: 'Sep 2012',
    endDate: 'May 2013'
  },
  {
    id: 59,
    type: 'Volunteering',
    areaOfFocus: ['Other'],
    title: 'VP Finance',
    organization: 'Management Information Systems Association',
    startDate: 'Sep 2010',
    endDate: 'May 2011'
  },
  {
    id: 60,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Chorus'],
    title: 'Member - No Borders Youth Chorus',
    organization: 'Choruses',
    startDate: '2011',
    endDate: '2011'
  },
  {
    id: 61,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Chorus'],
    title: 'Member - Nepean Northern Stars Chorus',
    organization: 'Choruses',
    organizationLink: 'https://www.northernstarschorus.ca/',
    startDate: '2011',
    endDate: '2011'
  },
  {
    id: 62,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Barbershop'],
    title: 'Chair - Nominations Committee',
    organization: 'Ontario District of the Barbershop Harmony Society',
    organizationLink: 'https://www.ontariosings.com/',
    startDate: '2022',
    endDate: '2023'
  },
  {
    id: 63,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Barbershop'],
    title: 'Interim Trillium Editor',
    organization: 'Ontario District of the Barbershop Harmony Society',
    organizationLink: 'https://www.ontariosings.com/',
    startDate: 'Sep 2017',
    endDate: 'Jul 2018'
  },
  {
    id: 64,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Chorus'],
    title: 'Member - Ontario Youth Acappella Chorus',
    organization: 'Choruses',
    startDate: '2010',
    endDate: '2015'
  },
  {
    id: 65,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Tenor - Playback',
    organization: 'Quartets',
    startDate: '2019',
    endDate: '2019',
    description: '<ul><li>International 2019 Quartet Representatives - Substitute Tenor</li></ul>'
  },
  {
    id: 66,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Tenor - Smokeshow',
    organization: 'Quartets',
    startDate: '2023',
    endDate: '2024',
    description: '<ul><li>International 2025 Quartet Representatives</li></ul>'
  },
  {
    id: 67,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Lead - The Nines',
    organization: 'Quartets',
    startDate: '2011',
    endDate: '2011'
  },
  {
    id: 68,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Tenor - The Right Swipes',
    organization: 'Quartets',
    startDate: '2017',
    endDate: '2017'
  },
  {
    id: 69,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Tenor - The Six/Four',
    organization: 'Quartets',
    startDate: '2022',
    endDate: '2023'
  },
  {
    id: 70,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Tenor - Those Meddling Kids',
    organization: 'Quartets',
    startDate: '2016',
    endDate: '2016',
    description: '<ul><li>2016 Ontario District Collegiate Representatives</li></ul>'
  },
  {
    id: 71,
    type: 'Work Experience',
    areaOfFocus: ['Other'],
    title: 'Student Ambassador',
    organization: 'University of Ottawa',
    organizationLink: 'https://uottawa.ca/',
    startDate: 'Sep 2012',
    endDate: 'Apr 2013',
    description: `<ul><li>Represented the uOttawa student body by leading campus tours, tele-counselling, recruiting new students, and organizing campus events.</li><li>Identified data integrity and completeness issues within the University of Ottawa CRM system and assisted in correcting them</li><li>Sought out and performed additional responsibilities of managing and assisting with the University-wide CRM system of contacts, potential students, and current students</li><li>Introduced data-entry time saving measures to the Ambassador team to make entering new contacts more efficient</li></ul>`,
    significant: true
  },
  {
    id: 72,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Lead - Voicebox',
    organization: 'Quartets',
    startDate: '2010',
    endDate: '2010',
    description: '<ul><li>Spring 2010 Ontario District Novice Champion</li></ul>'
  },
  {
    id: 73,
    type: 'Other',
    areaOfFocus: ['Barbershop', 'Quartet'],
    title: 'Tenor - X-Factor',
    organization: 'Quartets',
    startDate: '2013',
    endDate: '2013',
    description: '<ul><li>2013 Ontario District Quartet Champion</li></ul>'
  },
  {
    id: 74,
    type: 'Volunteering',
    areaOfFocus: ['Barbershop'],
    title: '2012 Faculty Quartet',
    organization: 'Ontario Harmony Explosion Camp',
    startDate: '2012',
    endDate: '2012'
  },
  {
    id: 75,
    type: 'Volunteering',
    areaOfFocus: ['Barbershop'],
    title: '2013 Faculty Quartet',
    organization: 'Ontario Harmony Explosion Camp',
    startDate: '2013',
    endDate: '2013'
  },
  {
    id: 76,
    type: 'Volunteering',
    areaOfFocus: ['Barbershop'],
    title: '2014 Faculty Quartet',
    organization: 'Ontario Harmony Explosion Camp',
    startDate: '2014',
    endDate: '2014'
  },
  {
    id: 77,
    type: 'Volunteering',
    areaOfFocus: ['Barbershop'],
    title: 'Faculty Member',
    organization: 'Ontario Harmony Academy',
    startDate: '2017',
    endDate: '2017'
  },
  {
    id: 78,
    type: 'Volunteering',
    areaOfFocus: ['Barbershop'],
    title: 'Faculty Member / Organizer',
    organization: 'Ontario Harmony Academy',
    startDate: '2019',
    endDate: '2019'
  },
  {
    id: 79,
    type: 'Volunteering',
    areaOfFocus: ['Barbershop'],
    title: 'Dean / Organizer',
    organization: 'Ontario Harmony Academy',
    startDate: '2020',
    endDate: '2020'
  },
  {
    id: 80,
    type: 'Volunteering',
    areaOfFocus: ['Barbershop'],
    title: 'Dean / Organizer',
    organization: 'Ontario Virtual Harmony Academy',
    startDate: '2021',
    endDate: '2021'
  },
  {
    id: 81,
    type: 'Volunteering',
    areaOfFocus: ['Barbershop'],
    title: 'Faculty Member',
    organization: 'NED Online Leadership Academy',
    startDate: '2022',
    endDate: '2022'
  },
  {
    id: 82,
    type: 'Volunteering',
    areaOfFocus: ['Strategic Planning', 'Barbershop'],
    title: 'Member - Strategic Planning Committee',
    organization: 'Ontario District of the Barbershop Harmony Society',
    organizationLink: 'https://www.ontariosings.com/',
    startDate: '2024'
  },
  {
    id: 83,
    type: 'Volunteering',
    areaOfFocus: ['Leadership', 'Barbershop'],
    title: 'VP Finance',
    organization: 'Ontario Harmony Brigade',
    startDate: '2011',
    endDate: '2011'
  },
  {
    id: 84,
    type: 'Work Experience',
    areaOfFocus: ['Other'],
    title: 'Tourism Information Representative',
    organization: 'Centre Wellington Chamber of Commerce/ Elora-Fergus Tourism',
    startDate: 'Feb 2007',
    endDate: 'Sep 2009'
  },
  {
    id: 85,
    type: 'Recognition',
    areaOfFocus: ['Other'],
    title: 'Aramark Services Scholarship Recipient',
    organization: 'St. James Catholic High School',
    startDate: '2009',
    endDate: '2009'
  },
  {
    id: 86,
    type: 'Recognition',
    areaOfFocus: ['Other'],
    title: 'Outstanding Student Award - Grade 9',
    organization: 'St. James Catholic High School',
    startDate: '2006',
    endDate: '2006'
  },
  {
    id: 87,
    type: 'Recognition',
    areaOfFocus: ['Other'],
    title: 'Outstanding Student Award - Grade 10',
    organization: 'St. James Catholic High School',
    startDate: '2007',
    endDate: '2007'
  },
  {
    id: 88,
    type: 'Recognition',
    areaOfFocus: ['Other'],
    title: 'Honour Roll Student, Grades 9 –12',
    organization: 'St. James Catholic High School',
    startDate: '2006',
    endDate: '2009'
  },
  {
    id: 89,
    type: 'Recognition',
    areaOfFocus: ['Other'],
    title: 'St. Joseph CWL Scholarship Recipient',
    organization: 'St. James Catholic High School',
    startDate: '2009',
    endDate: '2009'
  },
  {
    id: 90,
    type: 'Other',
    areaOfFocus: ['Other'],
    title: 'Student Council President',
    organization: 'St. James Catholic High School',
    startDate: '2008',
    endDate: '2009'
  },
  {
    id: 91,
    type: 'Other',
    areaOfFocus: ['Other'],
    title: 'Student Council Vice President',
    organization: 'St. James Catholic High School',
    startDate: '2007',
    endDate: '2008'
  },
  {
    id: 92,
    type: 'Other',
    areaOfFocus: ['Other'],
    title: 'Student Council Treasurer',
    organization: 'St. James Catholic High School',
    startDate: '2006',
    endDate: '2007'
  },
  {
    id: 93,
    type: 'Other',
    areaOfFocus: ['Agriculture'],
    title: 'Member',
    organization: '4-H Ontario',
    startDate: '2002',
    endDate: '2008'
  },
  {
    id: 94,
    type: 'Other',
    areaOfFocus: ['Agriculture'],
    title: 'Attendee - 4-H Member\'s Conference',
    organization: '4-H Ontario',
    startDate: '2008',
    endDate: '2008'
  },
  {
    id: 95,
    type: 'Certification',
    areaOfFocus: ['Other'],
    title: 'Grade Eight Piano Certification',
    organization: 'Royal Conservatory of Music',
    startDate: '2009',
    endDate: '2009'
  },
  {
    id: 96,
    type: 'Certification',
    areaOfFocus: ['Other'],
    title: 'Rudimentary Musical Theory Examinations',
    organization: 'Royal Conservatory of Music',
    startDate: '2000',
    endDate: '2000'
  },
  {
    id: 97,
    type: 'Certification',
    areaOfFocus: ['Other'],
    title: 'Primary Musical Theory Examinations',
    organization: 'Royal Conservatory of Music',
    startDate: '2003',
    endDate: '2003'
  },
  {
    id: 98,
    type: 'Certification',
    areaOfFocus: ['Other'],
    title: 'Secondary Musical Theory Examinations',
    organization: 'Royal Conservatory of Music',
    startDate: '2005',
    endDate: '2005'
  },
  {
    id: 99,
    type: 'Other',
    areaOfFocus: ['Just for Fun'],
    title: 'Proprietor',
    organization: 'Irvine River Ceaser Bar',
    startDate: '2020'
  }, 
  {
    id: 100,
    type: 'Work Experience',
    areaOfFocus: ['Other'],
    title: 'Membership Value and Enhancement Coordinator',
    organization: 'Centre Wellington Chamber of Commerce',
    organizationLink: 'https://cwchamber.ca/',
    description: `<ul><li>Assisted in creating a strong, visible social networking presence for the Chamber</li><li>Produced a template for a quarterly business news magazine to ensure ease of assembly and consistency among the regular issues</li><li>Researched the viability of producing a quarterly magazine for members and presented the results to the CWCC Board of Directors and executive</li></ul>`,
    startDate: 'Jun 2011',
    endDate: 'Aug 2011',
    significant: true
  },
  {
    id: 103,
    type: 'Other',
    areaOfFocus: ['Just for Fun'],
    title: 'Champion',
    organization: 'Lord Wellington Cup Tournament',
    startDate: '2012',
    endDate: '2012'  
  },
  {
    id: 104,
    type: 'Volunteering',
    areaOfFocus: ['Agriculture', 'Governance'],
    title: 'Member - Governance Committee',
    organization: 'AgScape',
    organizationLink: 'https://agscape.ca/',
    startDate: 'May 2024'
  },
  {
    id: 105,
    type: 'Volunteering',
    areaOfFocus: ['Agriculture'],
    title: 'Member - Fundraising Committee',
    organization: 'AgScape',
    organizationLink: 'https://agscape.ca/',
    startDate: 'May 2024'
  },
  {
    id: 106,
    type: 'Certification',
    areaOfFocus: ['Project Management'],
    title: 'Project Management Fundamentals certification',
    organization: 'University of Waterloo - Centre for Extended Learning',
    startDate: '2013',
    endDate: '2013'
  },
  {
    id: 107,
    type: 'Certification',
    areaOfFocus: ['Leadership'],
    title: 'Essential Skills for New and Potential Supervisors certification',
    organization: 'University of Waterloo - Centre for Extended Learning',
    startDate: '2019',
    endDate: '2019'
  }
]; 