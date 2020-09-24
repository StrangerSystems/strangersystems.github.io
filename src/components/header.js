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
          <a href='/'>
            <h3 style={{ margin: '1em 0' }}>
              {siteTitle}
            </h3>
          </a>
          <Nav>
            <StyledLink to='#'>
              Services
            </StyledLink>

            <StyledLink to='#'>
              Products
            </StyledLink>

            <StyledLink to='#'>
              About Us
            </StyledLink>

            <StyledLink to='#'>
              Contact
            </StyledLink>
          </Nav>
        </Main>
      </Container>
    );
  }
}

const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  text-decoration: none;
  margin-right: 1em;
`;


const Container = styled.header`
  background: none;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 1 40%;
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}