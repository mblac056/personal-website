import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects, Project } from '../../data/projects';
import github from '../../images/github.svg';
import external from '../../images/external-link.svg';

const ProjectsPage = () => {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);

  // Get unique technologies from projects
  const technologies = [...new Set(projects.flatMap(project => project.technologies))].sort((a, b) => a.localeCompare(b));
  
  // Filter projects by selected technology
  const filteredProjects = selectedTechnology 
    ? projects.filter(project => project.technologies.includes(selectedTechnology))
    : projects;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      {/* Technology filter */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Filter by Technology</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTechnology(null)}
            className={`text-sm px-2 py-1 rounded-full transition-colors ${
              selectedTechnology === null 
                ? 'bg-[--primary-color] text-white' 
                : 'bg-gray-300 text-gray-900 hover:bg-gray-400'
            }`}
          >
            All
          </button>
          {technologies.map(technology => (
            <button
              key={technology}
              onClick={() => setSelectedTechnology(technology)}
              className={`text-sm px-2 py-1 rounded-full transition-colors ${
                selectedTechnology === technology 
                  ? 'bg-[--primary-color] text-white' 
                  : 'bg-gray-300 text-gray-900 hover:bg-gray-400'
              }`}
            >
              {technology}
            </button>
          ))}
        </div>
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      {project.imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{project.year}</span>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <img src={github} alt="GitHub" className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <img src={external} alt="Live Site" className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
