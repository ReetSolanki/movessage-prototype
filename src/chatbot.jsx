import React from 'react';
import { Container, Webchat, WebchatProvider, useClient } from '@botpress/webchat';
import { theme } from './theme';
import './style.css';

const clientId = 'a9dc14b6-c8b9-4ccd-a31d-36075b44193b';

const configuration = {
  botName: 'movessage',
  botAvatar: 'https://miro.medium.com/v2/resize:fit:2400/1*nr1iwA9GvaP2B4VMZVc01Q.png',
  botDescription: 'Hi! 👋 Welcome to movessage.',
  email: {
    title: 'randomEmail@boptress.com',
    link: 'mailto:randomEmail@boptress.com',
  },
  phone: {
    title: '555-555-5555',
    link: 'tel:555-555-5555',
  },
  website: {
    title: 'https://botpress.com',
    link: 'https://botpress.com',
  },
  termsOfService: {
    title: 'Terms of service',
    link: 'https://botpress.com/terms',
  },
  privacyPolicy: {
    title: 'Privacy policy',
    link: 'https://botpress.com/privacy',
  },
}

function Chatbot() {
  const client = useClient({ clientId });

  return (
    <WebchatProvider client={client} theme={theme} configuration={configuration}>
      <Container>
        <Webchat />
      </Container>
    </WebchatProvider>
  );
}

export default Chatbot;
