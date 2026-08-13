import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobile, FaServer, FaCloud, FaUsers, FaRocket } from 'react-icons/fa';

const AboutSection = styled.section`
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BioTitle = styled(motion.h3)`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BioText = styled(motion.p)`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.8;
  font-size: 1.05rem;
`;

const HighlightText = styled.span`
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled(motion.div)`
  background: rgba(26, 26, 46, 0.6);
  border: 1px solid rgba(108, 99, 255, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    border-color: rgba(108, 99, 255, 0.3);
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const InfoLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.85rem;
  margin-bottom: 0.3rem;
`;

const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;
  font-size: 1.1rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SkillTitle = styled(motion.h4)`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
`;

const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const SkillItem = styled.div`
  width: 100%;
`;

const SkillLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: 0.95rem;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(108, 99, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 10px;
  position: relative;
  width: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(26, 26, 46, 0.6);
  border: 1px solid rgba(108, 99, 255, 0.1);
  padding: 2rem 1.5rem;
  border-radius: 16px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    border-color: rgba(108, 99, 255, 0.3);
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const StatNumber = styled(motion.h3)`
  font-size: 2.5rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.95rem;
  margin-top: 0.3rem;
`;

const StatIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 80 },
    { name: 'Git/GitHub', level: 85 },
  ];

  const stats = [
    { icon: '🚀', number: '20+', label: 'Projects Completed' },
    { icon: '💻', number: '3+', label: 'Years Experience' },
    { icon: '👥', number: '15+', label: 'Happy Clients' },
    { icon: '🏆', number: '5+', label: 'Awards Won' },
  ];

  return (
    <AboutSection id="about">
      <Container ref={ref}>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get to know me better and what I can do for you
        </SectionSubtitle>

        <AboutGrid>
          <BioContainer>
            <BioTitle
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Who Am I?
            </BioTitle>

            <BioText
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm a passionate <HighlightText>Web Developer</HighlightText> with a love for creating 
              beautiful, functional, and user-friendly digital experiences. 
              I specialize in building modern web applications using the latest technologies.
            </BioText>

            <BioText
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With a strong background in <HighlightText>front-end development</HighlightText> 
              and a keen eye for design, I bring ideas to life through clean code 
              and intuitive interfaces.
            </BioText>

            <InfoGrid>
              <InfoItem
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <InfoLabel>Name</InfoLabel>
                <InfoValue>AR1</InfoValue>
              </InfoItem>

              <InfoItem
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <InfoLabel>Location</InfoLabel>
                <InfoValue>Remote</InfoValue>
              </InfoItem>

              <InfoItem
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <InfoLabel>Email</InfoLabel>
                <InfoValue>ar1@dev.com</InfoValue>
              </InfoItem>

              <InfoItem
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <InfoLabel>Availability</InfoLabel>
                <InfoValue>Open to Work</InfoValue>
              </InfoItem>
            </InfoGrid>
          </BioContainer>

          <SkillsContainer>
            <SkillTitle
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My Skills
            </SkillTitle>

            <SkillGroup>
              {skills.map((skill, index) => (
                <SkillItem key={skill.name}>
                  <SkillLabel>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </SkillLabel>
                  <SkillBar>
                    <SkillProgress
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    />
                  </SkillBar>
                </SkillItem>
              ))}
            </SkillGroup>
          </SkillsContainer>
        </AboutGrid>

        <StatsContainer>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                {stat.number}
              </StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsContainer>
      </Container>
    </AboutSection>
  );
};

export default About;