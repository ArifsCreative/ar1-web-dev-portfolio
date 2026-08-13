import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarker, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaCode,
  FaPaperPlane
} from 'react-icons/fa';

const ContactSection = styled.section`
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
  margin: 0 auto 4rem;
  line-height: 1.8;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled(motion.div)`
  background: rgba(26, 26, 46, 0.6);
  border: 1px solid rgba(108, 99, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    border-color: rgba(108, 99, 255, 0.3);
    transform: translateX(10px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const InfoIcon = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 12px;
  background: rgba(108, 99, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.85rem;
  margin-bottom: 0.2rem;
`;

const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;
  font-size: 1.05rem;
`;

const SocialContainer = styled(motion.div)`
  margin-top: 1rem;
`;

const SocialTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(108, 99, 255, 0.1);
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  border: 1px solid rgba(108, 99, 255, 0.2);
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    background: ${({ theme }) => theme.colors.gradient};
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const FormContainer = styled(motion.div)`
  background: rgba(26, 26, 46, 0.6);
  border: 1px solid rgba(108, 99, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  background: rgba(10, 10, 15, 0.6);
  border: 2px solid rgba(108, 99, 255, 0.1);
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 20px rgba(108, 99, 255, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  background: rgba(10, 10, 15, 0.6);
  border: 2px solid rgba(108, 99, 255, 0.1);
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 20px rgba(108, 99, 255, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.05rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: ${({ theme }) => theme.transitions.smooth};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(108, 99, 255, 0.1);
  border: 1px solid rgba(108, 99, 255, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'ar1@dev.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: <FaMapMarker />,
      label: 'Location',
      value: 'Remote / Available Worldwide',
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaCode />, url: 'https://stackoverflow.com' },
  ];

  return (
    <ContactSection id="contact">
      <Container ref={ref}>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Have a question or want to work together? Let's talk!
        </SectionSubtitle>

        <ContactGrid>
          <InfoContainer>
            {contactInfo.map((info, index) => (
              <InfoCard
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <InfoIcon>{info.icon}</InfoIcon>
                <InfoContent>
                  <InfoLabel>{info.label}</InfoLabel>
                  <InfoValue>{info.value}</InfoValue>
                </InfoContent>
              </InfoCard>
            ))}

            <SocialContainer
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <SocialTitle>Connect With Me</SocialTitle>
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
            </SocialContainer>
          </InfoContainer>

          <FormContainer
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {isSubmitted ? (
              <SuccessMessage
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                🎉 Thank you! Your message has been sent successfully!
              </SuccessMessage>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Your Name</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Your Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Message</Label>
                  <TextArea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <SubmitButton
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  {isLoading ? 'Sending...' : 'Send Message'}
                </SubmitButton>
              </Form>
            )}
          </FormContainer>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;