import React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Block>
          <h1>We help</h1>
          <h1>build ideas.</h1>
          <span>
            It can be complicated to turn ideas into products, we make
            things easy.
          </span>
          <button>
            Find out more
          </button>
        </Block>
      </Layout>
    );
  }
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  
  > span {
    font-size: 95%;
  }
  
  > button {
    width: 8em;
    margin-top: 1em;
  }
`;