import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiTailwindcss,
  SiGraphql,
  SiFirebase
} from 'react-icons/si';

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.dark};
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
  margin: 0 auto 4rem;
  line-height: 1.8;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(26, 26, 46, 0.6);
  border: 1px solid rgba(108, 99, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    border-color: rgba(108, 99, 255, 0.3);
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1.5rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SkillIcon = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(108, 99, 255, 0.1);
  border-radius: 10px;
  flex-shrink: 0;
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  font-size: 0.95rem;

  span:last-child {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const SkillBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(108, 99, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 10px;
  width: 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
      ],
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
        { name: 'Python', icon: <FaPython />, level: 75 },
        { name: 'GraphQL', icon: <SiGraphql />, level: 70 },
        { name: 'Firebase', icon: <SiFirebase />, level: 85 },
      ],
    },
    {
      name: 'Database & DevOps',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
        { name: 'SQL', icon: <FaDatabase />, level: 75 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Docker', icon: <FaDocker />, level: 70 },
        { name: 'AWS', icon: <FaAws />, level: 65 },
      ],
    },
  ];

  return (
    <SkillsSection id="skills">
      <Container ref={ref}>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies and tools I work with
        </SectionSubtitle>

        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCard
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <CategoryTitle>{category.name}</CategoryTitle>
              <SkillItems>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skill.name}>
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillInfo>
                      <SkillName>
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </SkillName>
                      <SkillBar>
                        <SkillProgress
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.3 + (categoryIndex * 0.1) + (skillIndex * 0.05)
                          }}
                        />
                      </SkillBar>
                    </SkillInfo>
                  </SkillItem>
                ))}
              </SkillItems>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;