import React from 'react'
import styled from 'styled-components';

import Features from '../components/features'
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

        <SecondBlock id='services'>
          <Features />
        </SecondBlock>

        {/*<ThirdBlock>*/}
        {/*  <div>*/}
        {/*    HEllo*/}
        {/*  </div>*/}
        {/*</ThirdBlock>*/}

        <ContactBlock id='contact'>
          <Content>
            <div>
              <h3>Contact Us</h3>
              <span>Get in touch with us for a consultation.</span>
            </div>

            <Form>
              <form
                action='https://formspree.io/mleoeyja'
                method='POST'
              >
                <label>
                  Your email:
                  <input type='text' name='_replyto' />
                </label>
                <label>
                  Your message:
                  <textarea name='message'/>
                </label>

                <button type='submit'>Send</button>
              </form>
            </Form>
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
  width: 100%;
  background: #252344;
  top: -7.3em;
  height: 500px;
  z-index: -1;
  position: absolute;
  background: linear-gradient(130deg, rgba(2,0,36,1) 0%, rgba(37,35,68,1) 20%, rgba(16,127,192,1) 74%, rgba(40,198,208,1) 100%, rgba(16,127,192,1) 100%);
  
  @media screen and (max-width: 589px) {
    top: -8.5em;
  }
`;

const Block = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 1em);
  min-height: 350px;
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
  font-size: 3.5em;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.3em;
  
  > span > b {
    color: #28C6D0;
  }
`;

const SecondBlock = styled(Block)`
  margin-top: 5em;
  margin-bottom: 3em;
`;

const ContactBlock = styled(Block)`
  margin-top: 5em;
  > div > span { color: inherit; }
  
  > ${Content} {
    flex-direction: row;
    
    @media screen and (max-width: 48em) {
      flex-direction: column;
    }
    
    > div:first-child {
        flex: 1 1 20%;
        display: flex;
        flex-direction: column;
        
        @media screen and (max-width: 48em) {
          margin-bottom: 2em;
        }
    }
  }
`;

const Form = styled.div`
  background: white;
  filter: drop-shadow(0.9px 0.9px 0.9px #eeeeee);
  padding: 1em;
  flex: 1 1 60%;
  
  > form {
    display: flex;
    flex-direction: column;
    
    input[type=text], textarea {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2.5px rgb(40 198 208 / 49%);
      }
    }
    
    button[type=submit] {
      width: 50%;
      background-color: #28C6D0;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      
      &:hover,
      &:active {
        background-color: #107FC0;
      }
    }
  }
`;

const ThirdBlock = styled(Block)`
  background: #252344;
  
  color: #EBF1F8;
`;