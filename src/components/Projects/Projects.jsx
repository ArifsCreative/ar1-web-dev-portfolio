import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.darkLight};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.8;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button`
  padding: 0.6rem 1.5rem;
  background: ${({ active, theme }) => 
    active ? theme.colors.gradient : 'rgba(26, 26, 46, 0.6)'
  };
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ active, theme }) => 
    active ? theme.colors.primary : 'rgba(108, 99, 255, 0.2)'
  };
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(26, 26, 46, 0.6);
  border: 1px solid rgba(108, 99, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(108, 99, 255, 0.3);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(10, 10, 15, 0.8));
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
`;

const TechTag = styled.span`
  padding: 0.3rem 0.8rem;
  background: rgba(108, 99, 255, 0.1);
  border: 1px solid rgba(108, 99, 255, 0.2);
  border-radius: 20px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  padding: 0.5rem 1.2rem;
  background: ${({ primary, theme }) => 
    primary ? theme.colors.gradient : 'rgba(108, 99, 255, 0.1)'
  };
  color: ${({ theme }) => theme.colors.light};
  border: ${({ primary, theme }) => 
    primary ? 'none' : '1px solid rgba(108, 99, 255, 0.2)'
  };
  border-radius: 8px;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with cart, payments, and admin dashboard.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'React',
      demo: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: '📋',
      tags: ['React', 'Firebase', 'Tailwind'],
      category: 'React',
      demo: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with live data and visualizations.',
      image: '🌤️',
      tags: ['JavaScript', 'API', 'CSS3'],
      category: 'JavaScript',
      demo: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and responsive design.',
      image: '🎨',
      tags: ['React', 'Styled Components', 'Framer Motion'],
      category: 'React',
      demo: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      description: 'Search and discover recipes with detailed instructions and ingredients.',
      image: '🍳',
      tags: ['JavaScript', 'API', 'HTML/CSS'],
      category: 'JavaScript',
      demo: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Track workouts, set goals, and monitor progress with charts.',
      image: '💪',
      tags: ['React', 'Node.js', 'Chart.js'],
      category: 'React',
      demo: '#',
      github: '#',
    },
  ];

  const categories = ['All', 'React', 'JavaScript', 'Node.js', 'CSS'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <ProjectsSection id="projects">
      <Container ref={ref}>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Here are some of my recent works
        </SectionSubtitle>

        <FilterContainer
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <ProjectImage>{project.image}</ProjectImage>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechTags>
                  {project.tags.map((tag) => (
                    <TechTag key={tag}>{tag}</TechTag>
                  ))}
                </TechTags>
                <ProjectLinks>
                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    primary
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;