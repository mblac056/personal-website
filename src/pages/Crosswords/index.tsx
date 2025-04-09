import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import CrosswordPuzzle from './CrosswordPuzzle';
import { crosswords, Crossword } from '../../data/crosswords';

const AVAILABLE_TAGS = [
  { name: 'Barbershop', emoji: '💈' },
  { name: 'NYT Rejects', emoji: '📰' }
] as const;

const getTagEmoji = (tagName: string) => {
  return AVAILABLE_TAGS.find(tag => tag.name === tagName)?.emoji || '';
};

const Crosswords = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { puzzleId } = useParams();
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string | null>(
    searchParams.get('tag')
  );
  const [selectedPuzzle, setSelectedPuzzle] = useState<Crossword | null>(null);
  const [isSolving, setIsSolving] = useState(false);

  // Find the puzzle by ID if puzzleId is in the URL
  useEffect(() => {
    if (puzzleId) {
      const puzzle = crosswords.find(p => p.id === puzzleId);
      if (puzzle) {
        setSelectedPuzzle(puzzle);
        setIsSolving(true);
      } else {
        // If puzzle not found, redirect to the crosswords page
        navigate('/crosswords');
      }
    } else {
      // Reset state when navigating back to the list
      setSelectedPuzzle(null);
      setIsSolving(false);
    }
  }, [puzzleId, navigate]);

  useEffect(() => {
    if (selectedTag) {
      setSearchParams({ tag: selectedTag });
    } else {
      setSearchParams({});
    }
  }, [selectedTag, setSearchParams]);

  const sortedCrosswords = crosswords.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const filteredCrosswords = selectedTag
    ? sortedCrosswords.filter(puzzle => puzzle.tags.includes(selectedTag))
    : sortedCrosswords;

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const handlePuzzleSelect = (puzzle: Crossword) => {
    navigate(`/crosswords/${puzzle.id}`);
  };

  const handleBackToList = () => {
    navigate('/crosswords');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >


      {!isSolving ? (
        <>
              <section className="mb-8 max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Crossword Puzzles</h1>
              <p className="text-lg text-gray-600 mb-6">
                A collection of crossword puzzles I've constructed.
              </p>
      
              {/* Tag filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {AVAILABLE_TAGS.map(tag => (
                  <button
                    key={tag.name}
                    onClick={() => handleTagClick(tag.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                      selectedTag === tag.name
                        ? 'bg-[--primary-color] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <span>{tag.emoji}</span>
                    <span>{tag.name}</span>
                  </button>
                ))}
              </div>
            </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {filteredCrosswords.map((puzzle) => (
            <motion.div
              key={puzzle.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              whileHover={{ y: -4 }}
            >
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{puzzle.title}</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {puzzle.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1"
                    >
                      <span>{getTagEmoji(tag)}</span>
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mb-2">{puzzle.date}</p>
                {puzzle.description && (
                  <p className="text-gray-600 mb-4 text-sm [&_p]:mb-2 [&_a]:font-bold [&_a]:text-gray-700 [&_a]:hover:text-gray-900">
                    <div dangerouslySetInnerHTML={{ __html: puzzle.description }} />
                  </p>
                )}
                <button
                  onClick={() => handlePuzzleSelect(puzzle)}
                  className="w-full bg-[--primary-color] text-white py-2 px-4 rounded-md hover:bg-[--primary-color] transition-colors"
                >
                  Solve Puzzle
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        </>
      ) : (
        <div className="bg-base-200 rounded-lg p-6 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{selectedPuzzle?.title}</h2>
            <button
              className="btn btn-ghost"
              onClick={handleBackToList}
            >
              Back to List
            </button>
          </div>
          
          {selectedPuzzle && (
            <CrosswordPuzzle
              description={selectedPuzzle.description}
              puzFile={selectedPuzzle.puzFile}
            />
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Crosswords; 