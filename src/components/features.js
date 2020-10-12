import React from 'react';
import styled from 'styled-components';

import designSvg from '../images/design.svg'
import implementationSvg from '../images/implementation.svg'
import prototypeSvg from '../images/prototype.svg'

export default class Features extends React.Component {
  render() {
    return (
      <Block>
        <h1>
          Services
        </h1>
        <StyledFeatures>
          <Feature>
            <ImageHolder>
              <img src={designSvg} alt='Architecture & Design'/>
            </ImageHolder>

            <div>
              <h3>Architecture & Design</h3>
              <span>Start your tech off right</span>
            </div>
          </Feature>

          <Feature>
            <ImageHolder>
              <img src={prototypeSvg} alt='Proof of Concept'/>
            </ImageHolder>

            <div>
              <h3>Proof of Concepts</h3>
              <span>Bring your dreams to life</span>
            </div>
          </Feature>

          <Feature>
            <ImageHolder>
              <img src={implementationSvg} alt='Implementation'/>
            </ImageHolder>

            <div>
              <h3>Implementation</h3>
              <span>Engineering your success</span>
            </div>
          </Feature>
        </StyledFeatures>
      </Block>
    );
  }
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  > h1 {
    margin-bottom: 3em;
  }
`;

const StyledFeatures = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 280px);
  justify-content: center;
  column-gap: 30px;
  row-gap: 1em;
  margin-bottom: 6em;
`;

const Feature = styled.div`
  background-color: #414556;
  padding: 1.3em;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  > div:last-child {
    margin-top: 1em;
    flex: 1 1 10%;
  }
`;

const ImageHolder = styled.div`
   flex: 1 1 50%;
   
   > img {
      max-height: 100%;
   }
`;