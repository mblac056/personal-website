import { motion } from 'framer-motion';

interface CrosswordPuzzleProps {
  description?: string;
  puzzleId: string;
}

const CrosswordPuzzle = ({ description, puzzleId }: CrosswordPuzzleProps) => {
  const PUZZLE_SET = '5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4';
  const iframeSrc = `https://puzzleme.amuselabs.com/pmm/crossword?id=${puzzleId}&set=${PUZZLE_SET}&embed=1`;

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
            className="dark:text-white [&_p]:mb-2 [&_a]:font-bold custom-link" 
            dangerouslySetInnerHTML={{ __html: description }} 
          />
        )}
      </div>
      
      <div className="w-full">
        <iframe
          height="700px"
          width="100%"
          allow="web-share; fullscreen"
          className="border-none w-full block m-0"
          style={{
            border: 'none',
            position: 'static'
          }}
          src={iframeSrc}
          aria-label="Puzzle Me Game"
        />
      </div>
    </motion.div>
  );
};

export default CrosswordPuzzle; 