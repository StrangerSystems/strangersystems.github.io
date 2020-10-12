import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header';
import Footer from './footer';

import './layout.css'

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}

      render={data => (
        <Page>
          <Top>
            <Header siteTitle={data.site.siteMetadata.title} />

            <Main>
              <main>{children}</main>
            </Main>
          </Top>

          <Bottom>
            <Footer />
          </Bottom>
        </Page>
      )}
    />
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  fex: 1 0 auto;
`;

const Bottom = styled.div`
  flex: 0 1 10%;
  background: #1C2230;
`;

const Main = styled.div`
  max-width: 960px;
`;
