import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import logo from '../images/gatsby-icon.png'

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            style={{
              width: '100px',
            }}
            src={logo}
            alt=""
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
