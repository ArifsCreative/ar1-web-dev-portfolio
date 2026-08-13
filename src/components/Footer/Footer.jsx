import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaArrowUp } from 'react-icons/fa';

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.colors.dark};
  border-top: 1px solid rgba(108, 99, 255, 0.1);
  padding: 3rem 2rem 1.5rem;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Logo = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

const BrandDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.8;
  max-width: 350px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ColumnTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 0.5rem;
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.gray};
  transition: ${({ theme }) => theme.transitions.smooth};
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateX(0);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(108, 99, 255, 0.1);
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border: 1px solid rgba(108, 99, 255, 0.2);
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    background: ${({ theme }) => theme.colors.gradient};
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(108, 99, 255, 0.1);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const BackToTop = styled(motion.button)`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaCode />, url: 'https://stackoverflow.com' },
  ];

  return (
    <FooterSection>
      <Container>
        <FooterGrid>
          <BrandColumn>
            <Logo
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              AR1
            </Logo>
            <BrandDescription>
              Building exceptional digital experiences with modern web technologies.
              Let's create something amazing together.
            </BrandDescription>
            <SocialLinks>
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </BrandColumn>

          <LinksColumn>
            <ColumnTitle>Quick Links</ColumnTitle>
            {navLinks.map((link) => (
              <NavLink
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ x: 5 }}
              >
                {link}
              </NavLink>
            ))}
          </LinksColumn>

          <LinksColumn>
            <ColumnTitle>Resources</ColumnTitle>
            <NavLink
              href="#"
              whileHover={{ x: 5 }}
            >
              Blog
            </NavLink>
            <NavLink
              href="#"
              whileHover={{ x: 5 }}
            >
              GitHub
            </NavLink>
            <NavLink
              href="#"
              whileHover={{ x: 5 }}
            >
              Resume
            </NavLink>
            <NavLink
              href="#contact"
              whileHover={{ x: 5 }}
            >
              Contact
            </NavLink>
          </LinksColumn>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} <span>AR1</span>. All rights reserved.
          </Copyright>
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </BackToTop>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;