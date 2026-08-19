import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.dark};
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    padding-top: 4rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Greeting = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.gray};
  max-width: 500px;
  line-height: 1.8;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  padding: 0.8rem 2rem;
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const SecondaryButton = styled(motion.a)`
  padding: 0.8rem 2rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.light};
  border: 2px solid rgba(108, 99, 255, 0.3);
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(108, 99, 255, 0.1);
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: ${({ theme }) => theme.transitions.smooth};
  border: 1px solid rgba(108, 99, 255, 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.gradient};
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    order: -1;
  }
`;

const ProfileImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  padding: 5px;
  animation: float 6s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`;

const ImageInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const FloatingBadge = styled(motion.div)`
  position: absolute;
  background: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(10px);
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  border: 1px solid rgba(108, 99, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <HeroSection id="home">
      <HeroContent>
        <TextContainer>
          <Greeting
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            👋 Hello, I'm
          </Greeting>

          <Name
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GradientText>AR1</GradientText>
          </Name>

          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Web Developer & Designer
          </Title>

          <Description
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I build exceptional and accessible digital experiences
            with modern web technologies.
          </Description>

          <ButtonGroup
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <PrimaryButton
              href="#projects"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode /> View My Work
            </PrimaryButton>
            <SecondaryButton
              href="#contact"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload /> Contact Me
            </SecondaryButton>
          </ButtonGroup>

          <SocialLinks
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <SocialLink
              href="https://github.com"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://twitter.com"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </SocialLink>
          </SocialLinks>
        </TextContainer>

        <ImageContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ProfileImage>
            <ImageInner>
              👨‍💻
            </ImageInner>
          </ProfileImage>

          <FloatingBadge
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{ top: '10%', right: '-10%' }}
          >
            ⚡ 3+ Years
          </FloatingBadge>

          <FloatingBadge
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            style={{ bottom: '15%', left: '-10%' }}
          >
            🚀 20+ Projects
          </FloatingBadge>
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;