import React from 'react';
import styled from 'styled-components';

export default class Contact extends React.Component {
  render() {
    return (
      <Block>
        <h1>
          Contact Us
        </h1>
        <span>Get in touch with us for a consultation.</span>
        <Content>
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
    margin-bottom: 1em;
  }
  
  > span {
    font-size: 1.3em;
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  margin-top: 2em;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
  width: 100%;
  max-width: 1080px;
  padding: 3em;
  display: flex;
  flex-direction: column;
    
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
    
  > span {
    font-size: 95%;
    color: #EBF1F8;
  }
`;


const Form = styled.div`
  background: #343550;
  padding: 1em;
  flex: 1 1 60%;
  
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    
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
      background-color: #715CEF;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      
      &:hover,
      &:active {
        background-color: #4937b6;
      }
    }
  }
`;
