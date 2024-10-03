import React, { useState } from 'react';
import styled from 'styled-components';
import useEscClose from 'hooks/useEscKey';
import { media } from 'utils/media';
import Button from './Button';
import CloseIcon from './CloseIcon';
import Container from './Container';
import Input from './Input';
import Overlay from './Overlay';
import { EnvVars } from 'env';

export interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEscClose({ onClose });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const combinedMessage = `${message1}\n\n${message2}`.trim();
    const formData = {
      fullName,
      companyName,
      email,
      phone,
      industry,
      message: combinedMessage,
      website: EnvVars.SITE_NAME,
    };

    try {
      const response = await fetch('https://autonoweb-newsletter.youssef02bigra.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form fields
        setFullName('');
        setCompanyName('');
        setEmail('');
        setPhone('');
        setIndustry('');
        setMessage1('');
        setMessage2('');
        // Close the modal after a short delay
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Overlay>
      <Container>
        <Card onSubmit={onSubmit}>
          <CloseIconContainer>
            <CloseIcon onClick={onClose} />
          </CloseIconContainer>
          <Title>Contact Us</Title>
          {submitStatus === 'success' ? (
            <SuccessMessage>Thank you for your message. We'll be in touch soon!</SuccessMessage>
          ) : (
            <>
              <Row>
                <CustomInput
                  value={fullName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  required
                />
                <CustomInput
                  value={companyName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)}
                  placeholder="Company Name"
                  required
                />
              </Row>
              <Row>
                <CustomInput
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  required
                />
                <CustomInput
                  value={phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                  placeholder="Phone Number (optional)"
                  type="tel"
                />
              </Row>
              <Row>
                <CustomInput
                  value={industry}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIndustry(e.target.value)}
                  placeholder="Industry"
                  required
                />
              </Row>
              <Row>
                <CustomTextarea
                  value={message1}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage1(e.target.value)}
                  placeholder="How can we help you? (Part 1)"
                  required
                />
              </Row>
              <Row>
                <CustomTextarea
                  value={message2}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage2(e.target.value)}
                  placeholder="Additional details (Part 2)"
                />
              </Row>
              <Row>
                <CustomButton as="button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </CustomButton>
              </Row>
              {submitStatus === 'error' && <ErrorMessage>An error occurred. Please try again later.</ErrorMessage>}
            </>
          )}
        </Card>
      </Container>
    </Overlay>
  );
}

const Card = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  padding: 5rem 5rem;
  background: rgb(var(--modalBackground));
  border-radius: 0.6rem;
  max-width: 70rem;
  overflow: hidden;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    padding: 7.5rem 2.5rem;
  }
`;

const CloseIconContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;

  svg {
    cursor: pointer;
    width: 2rem;
  }
`;

const Title = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--text));
  margin-bottom: 2rem;

  ${media('<=tablet')} {
    font-size: 2.6rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
`;

const SuccessMessage = styled.p`
  color: rgb(var(--successColor));
  font-size: 1.8rem;
  margin: 1rem 0;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
  padding: 1.8rem;
  box-shadow: var(--shadow-lg);
`;

const CustomInput = styled(Input)`
  width: 48%;

  ${media('<=tablet')} {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const CustomTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 0.6rem;
  border: 1px solid rgb(var(--inputBackground));
  background: rgb(var(--inputBackground));
  font-size: 1.6rem;
  color: rgb(var(--text));
  resize: vertical;
  min-height: 10rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: rgb(var(--primary));
  }
`;