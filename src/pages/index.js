import React from 'react'
import styled from 'styled-components';
import Contact from "../components/contact"

import Features from '../components/features'
import HeroBlock from "../components/hero"
import Layout from '../components/layout'

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Block>
          <HeroBlock />
        </Block>

        <SecondBlock id='services'>
          <Features />
        </SecondBlock>

        {/*<ThirdBlock>*/}
        {/*  <div>*/}
        {/*    HEllo*/}
        {/*  </div>*/}
        {/*</ThirdBlock>*/}

        <ContactBlock id='contact'>
          <Contact />
        </ContactBlock>
      </Layout>
    );
  }
}

const Block = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 1em);
  min-height: 350px;
  background: #1C2230;
`;

const SecondBlock = styled(Block)`
  margin: 0;
  padding: 5em;
  background-color: #181E2A;
`;

const ContactBlock = styled(Block)`
  margin: 0;
  padding: 13em;
  background-color: #181E2A;
  > div > span { color: inherit; }
`;

const ThirdBlock = styled(Block)`
  margin: 0;
  padding: 13em;
  background-color: #181E2A;
  
  color: #EBF1F8;
`;