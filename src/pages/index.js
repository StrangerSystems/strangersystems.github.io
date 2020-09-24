import React from 'react'
import styled from 'styled-components';

import Layout from '../components/layout'
import Button from '../components/button'

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Block>
          <Skew/>
          <Content>
            <Byline>
              <span>We help</span>
              <span>build <b>ideas.</b></span>
            </Byline>

            <span>
              It can be complicated to turn ideas into products, we make
              things easy.
            </span>

            <StyledButton
              width='9em'
              fontWeight='bold'
              padding='0.5em 0.8em'
              background='#107FC0'
            >
              Find out more
            </StyledButton>
          </Content>
        </Block>

        <SecondBlock>
          <Content>
            HEllo
          </Content>
        </SecondBlock>

        {/*<ThirdBlock>*/}
        {/*  <div>*/}
        {/*    HEllo*/}
        {/*  </div>*/}
        {/*</ThirdBlock>*/}

        <ContactBlock>
          <Content>
            <h3>Contact Us</h3>
            <span>Email:</span>
            <span>Phone: </span>
          </Content>
        </ContactBlock>
      </Layout>
    );
  }
}

const StyledButton = styled(Button)`
  margin-top: 1em;
`;

const Skew = styled.div`
  transform: skewY(-3.5deg);
  transform-origin: top left;
  width: 100vw;
  background: #252344;
  top: 0;
  height: 480px;
  z-index: -1;
  position: absolute;
  background: linear-gradient(130deg, rgba(2,0,36,1) 0%, rgba(37,35,68,1) 20%, rgba(16,127,192,1) 74%, rgba(40,198,208,1) 100%, rgba(16,127,192,1) 100%);
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  // background: #252344;
`;

const Content = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1080px;
    padding: 3em;
    display: flex;
    flex-direction: column;
    
    > span {
      font-size: 95%;
      color: #EBF1F8;
    }
`;

const Byline = styled.div`
  color: #EBF1F8;
  font-weight: bold;
  font-size: 3em;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.3em;
  
  > span > b {
    color: #28C6D0;
  }
`;

const SecondBlock = styled(Block)`
  margin-top: 4.5em;
`;

const ContactBlock = styled(Block)`
  background: white;
  > div > span { color: inherit; }
`;

const ThirdBlock = styled(Block)`
  background: #252344;
  
  color: #EBF1F8;
`;