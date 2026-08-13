import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 2rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ scrolled, theme }) => 
    scrolled 
      ? 'rgba(10, 10, 15, 0.85)' 
      : 'rgba(10, 10, 15, 0.3)'
  };
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(20px)' : 'blur(10px)'
  };
  border-bottom: ${({ scrolled, theme }) => 
    scrolled ? `1px solid rgba(108, 99, 255, 0.1)` : 'none'
  };
  transition: ${({ theme }) => theme.transitions.smooth};
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: ${({ theme }) => theme.transitions.smooth};
    border-left: 1px solid rgba(108, 99, 255, 0.2);
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  font-weight: 400;
  position: relative;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.smooth};

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    transition: ${({ theme }) => theme.transitions.smooth};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.8rem;
  z-index: 1001;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <Logo
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          AR1
        </Logo>

        <HamburgerButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </HamburgerButton>

        <NavLinks isOpen={isOpen}>
          {navItems.map((item, index) => (
            <NavLink
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </NavLink>
          ))}
        </NavLinks>
      </HeaderContainer>

      <MobileOverlay isOpen={isOpen} onClick={closeMenu} />
    </>
  );
};

export default Header;