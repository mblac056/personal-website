import { motion } from 'framer-motion';

interface CrosswordPuzzleProps {
  description?: string;
  puzFile: string;
}

const CrosswordPuzzle = ({ description, puzFile }: CrosswordPuzzleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="max-w-4xl mx-auto">
        {description && (
          <p 
            className="text-gray-600 dark:text-white [&_p]:mb-2 [&_a]:font-bold [&_a]:text-gray-700 [&_a]:hover:text-gray-900" 
            dangerouslySetInnerHTML={{ __html: description }} 
          />
        )}
      </div>
      
      <div 
        className="w-full"
        dangerouslySetInnerHTML={{ __html: puzFile }}
      />
    </motion.div>
  );
};

export default CrosswordPuzzle; 