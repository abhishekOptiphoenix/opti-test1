import React from "react";
import { styled, connect, Global } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import MenuModal from "./menu-modal";

function MobileMenu({ state, actions }) {
  const { isMobileMenuOpen } = state.theme;
  return (
    <>
      <MenuToggle style={isMobileMenuOpen ? {position: 'fixed'} : {position:'absolute'}} onClick={actions.theme.toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            {/* <Global styles={{ body: { overflowY: "hidden" } }} /> */}
            <CloseIcon color="black" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="black" size="20px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal />}
    </>
  );
}

const MenuToggle = styled.button`
  position: absolute;
  right: 24px;
  top: 15px;
  background: transparent;
  border: 0;
  z-index: 3;
  height: 40px;
  width: 40px;
  display: none;
  outline:0;
  transition: all 0.3s ease;
  &:focus {
    outline:0;
  }
  .opensvg, .closesvg {
    transition: all 0.3s ease;
    color:#ffffff;
  }
  &:hover {
    .opensvg {
      color:var(--white);
    }
    .closesvg {
      color:var(--white);
    }
  }
  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
    padding-right: 0;
    padding-left: 0;
    right: 7px;
  }
  @media (max-width: 480px) {
    height: 35px;
    /* margin-top: 24px; */
  }
`;

export default connect(MobileMenu);
