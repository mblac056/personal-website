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
    liveUrl: 'https://ringsideseat.com',
  },
  {
    id: 'barbershop-scores-parser',
    title: 'Barbershop Scores Parser',
    description: 'A Python tool for parsing barbershop competition scoresheets from PDF format into CSV and JSON formats. This tool can handle both single-round and multi-round competition scoresheets.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/mblac056/barbershop-scores-parser',
  },
  {
    id: 'whos-up-live',
    title: "Who's Up Live",
    description: "An event tracking application specifically designed for barbershop conventions, allowing users to access up-to-the-second details about the status of each performer. It includes an optional self-scoring feature for attendees to track their scores against the official panel.",
    technologies: ['React', 'Javascript', 'Firebase', 'Tailwind CSS', 'Material UI'],
    liveUrl: 'https://whosuplive.com',
  }
]; 