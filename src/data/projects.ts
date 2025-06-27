export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  year?: number;
}

export const projects: Project[] = [
  {
    id: 'personal-website',
    title: "Personal Website",
    description: "A personal website I made for myself, featuring a dynamic resume and project showcase. The one you're looking at right now!",
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://michael-black.com',
    githubUrl: 'https://github.com/mblac056/personal-website',
  },
  {
    id: 'piktok',
    title: 'PikTok',
    description: 'A React-based communication board PWA designed to assist with non-verbal communication. The app has a grid-based interface with customizable buttons that can display images and play audio when activated. It also includes a tune tapper game that plays music as long as the user taps the highlighted button.',
    technologies: ['React', 'TypeScript', 'Firebase']
    },
  {
    id: 'ringside-seat',
    title: 'Ringside Seat',
    description: 'A show tracking PWA designed for livestock expos, competitions and shows, allowing users to access up-to-the-second details about the status of each class and heat and results.',
    technologies: ['React', 'Javascript', 'Firebase', 'Tailwind CSS', 'Material UI'],
    liveUrl: 'https://ringsideseat.live',
  },
  {
    id: 'scoresheet-tools',
    title: 'Scoresheet Tools',
    description: 'A Python tool for parsing barbershop competition scoresheets from PDF format into CSV and JSON formats. This tool can handle both single-round and multi-round competition scoresheets.',
    technologies: ['Python'],
    liveUrl: 'https://scoresheet.tools/',
    githubUrl: 'https://github.com/mblac056/scoresheet-tools-backend',
  },
  {
    id: 'whos-up-live',
    title: "Who's Up Live",
    description: "An event tracking application specifically designed for barbershop conventions, allowing users to access up-to-the-second details about the status of each performer. It includes an optional self-scoring feature for attendees to track their scores against the official panel.",
    technologies: ['React', 'Javascript', 'Firebase', 'Tailwind CSS', 'Material UI'],
    liveUrl: 'https://whosup.live',
  },
  {
    id: 'steve-armstrong-arrangements',
    title: 'Steve Armstrong Arrangements Site',
    description: 'Website design and development for Steve Armstrong Arrangements, showcasing existing barbershop arrangements and offering custom arrangement services.',
    technologies: ['WordPress', 'HTML', 'CSS', 'PHP'],
    liveUrl: 'https://arrangements.armstrongconsulting.ca/',
  },
  {
    id: 'bd-custom-metal-fabricators',
    title: 'B&D Custom Metal Fabricators Site',
    description: 'Website design and development for B&D Custom Metal Fabricators, highlighting their custom metalworking services and projects.',
    technologies: ['WordPress', 'HTML', 'CSS', 'PHP'],
    liveUrl: 'https://bdcustommetalfabricators.com/',
  },
  {
    id: 'bronwynne-wilton-municipal',
    title: 'Bronwynne Wilton Municipal Campaign Site',
    description: 'Campaign website for Bronwynne Wilton\'s municipal election run, emphasizing platform details and voter engagement.',
    technologies: ['WordPress', 'HTML', 'CSS', 'PHP'],
    liveUrl: 'https://bronwynnewilton.ca/',
  },
  {
    id: 'bronwynne-wilton-provincial',
    title: 'Bronwynne Wilton Provincial Campaign Site',
    description: 'Campaign website for Bronwynne Wilton\'s provincial election run, providing policy positions, volunteer opportunities, and contact information.',
    technologies: ['WordPress', 'HTML', 'CSS', 'PHP'],
    liveUrl: 'https://bronwynnewilton.ca/',
  },
  {
    id: 'lily-nye-music',
    title: 'Lily Nye Music Site',
    description: 'Website for country music artist Lily Nye, featuring her music releases, tour dates, and media content.',
    technologies: ['WordPress', 'HTML', 'CSS', 'PHP'],
    liveUrl: 'https://lilynyemusic.com/',
  },
  {
    id: 'rainbow-excelsior',
    title: 'Rainbow Excelsior Site',
    description: 'Website for Rainbow Excelsior, showcasing products and providing company information for customers and partners.',
    technologies: ['WordPress', 'HTML', 'CSS', 'PHP'],
    liveUrl: 'https://rainbowexcelsior.com/',
  },
  {
    id: 'voices-music',
    title: 'Voices Music Site',
    description: 'Website for Voices Music, promoting music education and performance initiatives through an easy-to-navigate platform.',
    technologies: ['WordPress', 'HTML', 'CSS', 'PHP'],
    liveUrl: 'https://voicesmusic.ca/',
  },
  {
    id: 'wilson-machine-knife',
    title: 'Wilson Machine Knife Site',
    description: 'Website design and development for Wilson Machine Knife, highlighting their machine knife products and services.',
    technologies: ['WordPress', 'HTML', 'CSS', 'PHP'],
    liveUrl: 'https://wilsonmachineknife.com/',
  },
  {
    id: 'alma-optimists',
    title: 'Alma Optimists Site',
    description: 'Website for the Alma Optimists, providing information about community service initiatives, events, and membership.',
    technologies: ['WordPress', 'HTML', 'CSS', 'PHP'],
    liveUrl: 'https://almaoptimist.club/',
  },

]; 