import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";

import logo from '../../../../../assets/hero-images/logo.png'


const Header = ({ state }) => {
  return (
    <>
      <BrandContainer>
        <StyledLink link="/">
          <Title>
            <img src={logo} alt="OptiPhoenix logo" />
          </Title>
        </StyledLink>
        <MobileMenu />
      </BrandContainer>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--brand);
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    width: auto;
  }
`;

const Title = styled.div`
  margin: 0;
  width: 251px;
  @media (max-width:480px) {
    width: 200px;
  }
  span {
    font-weight:800;
  }
  img{
    width: 100%;
    height: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color:var(--brand);
  transition: all 0.3s ease;
  &:hover {
    color:var(--black);
  }
`;
