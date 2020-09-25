import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import { Link } from "gatsby"

export default class Header extends React.Component {
  render() {
    const { siteTitle } = this.props;

    return (
      <Container>
        <Main>
          <Name href='/'>
            <h3 style={{ margin: '1em 0' }}>
              {siteTitle}
            </h3>
          </Name>
          <Nav>
            <StyledLink to='#services'>
              Services
            </StyledLink>

            <StyledLink to='#'>
              Products
            </StyledLink>

            <StyledLink to='#'>
              About Us
            </StyledLink>

            <StyledLink to='#contact'>
              Contact
            </StyledLink>
          </Nav>
        </Main>
      </Container>
    );
  }
}

const StyledLink = styled(props => <Link {...props} />)`
  color: white !important;
  font-weight: bold;
  text-decoration: none;
  margin-right: 1em;
`;

const Container = styled.header`
  background: transparent;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: calc(1080px - 3em);
  width: 100%;
  padding: 1.5em;

  @media screen and (max-width: 48em) {
    flex-wrap: wrap;
  }
`;

const Name = styled.a`
  > h3 { color: #28C6D0; }

  @media screen and (max-width: 48em) {
    margin-right: 2em;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 1 50%;

  @media screen and (max-width: 48em) {
    flex: 1 1 50%;
  }
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}