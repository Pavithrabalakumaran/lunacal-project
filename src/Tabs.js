// src/components/Tabs.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  border-radius: 10px;
  padding: 10px;
  width: 400px;
`;

const TabButton = styled.button`
  flex: 1;
  background-color: ${({ active }) => (active ? '#555' : '#333')};
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;

const TabContent = styled.div`
  margin-top: 20px;
  color: white;
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <div>
      <TabContainer>
        <TabButton active={activeTab === 'About Me'} onClick={() => setActiveTab('About Me')}>
          About Me
        </TabButton>
        <TabButton active={activeTab === 'Experiences'} onClick={() => setActiveTab('Experiences')}>
          Experiences
        </TabButton>
        <TabButton active={activeTab === 'Recommended'} onClick={() => setActiveTab('Recommended')}>
          Recommended
        </TabButton>
      </TabContainer>
      <TabContent>
        {activeTab === 'About Me' && <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>}
        {activeTab === 'Experiences' && <p>Experience 1: ...</p>}
        {activeTab === 'Recommended' && <p>Recommended: ...</p>}
      </TabContent>
    </div>
  );
};

export default Tabs;
