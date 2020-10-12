import React from 'react';
import styled from 'styled-components';
import heroSvg from "../images/development.svg"
import waveSvg from '../images/wave.svg'
import Button from './button'

export default class HeroBlock extends React.Component {
  render() {
    return (
      <>
        <Content>
          <div>
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
              background='#715CEF'
            >
              Find out more
            </StyledButton>
          </div>

          <div>
            <img src={heroSvg} alt='Hero' />
          </div>
        </Content>

        <Waves>
          <img src={waveSvg} alt='Waves'/>
        </Waves>
      </>
    );
  }
}

const Waves = styled.div`
  width: 100%;
  display: flex;
  z-index: 1;

  > img {
    width: 100%;
    margin: 0;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2em;
`;

const Content = styled.div`
  margin-top: 3em;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -5em;
  width: 100%;
  max-width: 1080px;
  padding: 0 3em;
  display: flex;
  align-items: center;
  z-index: 2;
    
  > span {
    font-size: 95%;
    color: #EBF1F8;
  }
  
  > div:last-child {
    width: 100%;
  }
`;

const Byline = styled.div`
  color: white;
  font-weight: bold;
  font-size: 3.5em;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.3em;
  
  > span > b {
    color: #28C6D0;
  }
`;
