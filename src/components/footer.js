import React from 'react'
import styled from 'styled-components'

export default class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Mission>
          We're on a mission to build a better idk what else to write
        </Mission>
        <Contact>
          P.O Box, idk Some email
          12540 braddok drive hehehe
          89839890809
        </Contact>
        <Icons>
          <a href='#'>Twitter</a>
        </Icons>
      </StyledFooter>
    );
  }
}

const StyledFooter = styled.footer`
  max-width: 960px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  > div {
    margin-right: 2em;
  } 
`;

const Mission = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 85%;
  max-width: 30%;
  padding: 1em;
`;

const Contact = styled.div`
  font-size: 85%;
  max-width: 30%;
  padding: 1em;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 30%;
  padding; 1em;
  font-size: 90%;

  > a {
    color: black;
    text-decoration: none;
  }
`;