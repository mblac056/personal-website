import { motion } from 'framer-motion';
import headshot from '../../images/headshot.jpg';

const Home = () => {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="mb-6 max-w-4xl mx-auto">
        <img 
          src={headshot} 
          alt="Michael Black" 
          className="mx-auto md:float-left md:mr-8 mb-4 w-60 h-60 rounded-full shadow-xl border-2 border-[--primary-color] block" 
        />
        <h1 className="text-4xl font-medium mb-4 text-center clear-left md:clear-none">Hi, I'm Michael Black</h1>
        <div className="text-lg font-thin text-gray-600 mb-6">       
        <p className="mb-4">I'm a web developer, project manager, barbershop harmony enthusiast, and trivia lover based in Fergus, Ontario.</p>

          <p className="mb-4">Right now I'm a Full Stack Developer with <a href="https://farmhealthguardian.com/" className="font-medium" target="_blank" rel="noopener noreferrer">Farm Health Guardian</a>, based in nearby Guelph, where I build digital tools that help strengthen biosecurity in the agri-food sector.</p>

          <p className="mb-4">I'm also proud to serve as Chair of the Board for the <a href="https://www.tessresearch.org/" className="font-medium" target="_blank" rel="noopener noreferrer">TESS Research Foundation</a>, a patient-led non-profit working to improve the lives of families affected by SLC13A5 Epilepsy. <a href="https://youtu.be/FjhdkjMSZA0?si=h6kjV0RvwHNuCsGw" className="font-medium" target="_blank" rel="noopener noreferrer">Here's a quick video</a> if you want to learn more.</p>

          <p className="mb-4">Outside of work, you'll usually find me hanging out with my wife Amber and son Rowan, solving or building crossword puzzles, working on custom websites, enjoying a good beer, 3D printing something, or listening to a podcast. Always looking for the next great project — if you've got an idea, <a href="mailto:michael@michael-black.com" className="font-medium" target="_blank" rel="noopener noreferrer">drop me a line</a>. I love a new challenge!</p>

          <p className="text-lg text-[--primary-color]">
            Like what I do? Please consider <a href="https://www.buymeacoffee.com/michael.black" className="font-medium" target="_blank" rel="noopener noreferrer">buying me a coffee</a>.
          </p>
        </div>
      </section>

    </motion.div>
  );
};

export default Home; 