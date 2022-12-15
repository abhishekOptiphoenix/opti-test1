import React, {useState, useEffect} from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import {HiOutlineChevronDown } from "react-icons/hi"
import PopUp from "../customComponents/popup-contact";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) =>{ 
  const [showForm, setShowForm] = useState(false);
    const body= document.querySelector("body")
    showForm ? body.classList.add("js-scroll") : body.classList.remove("js-scroll")
  const handleClick = ()=>{
    /**
     * if error or success message already there then remove 
     * them when click on the contact us header link in 1ms
     */ 
    setTimeout(()=>{
      const errorMessage  = document.querySelector(".css-1v5tu5l-ErrorMessage")
        if(errorMessage){
          errorMessage.classList.add("hide")
        }
      const successMessage = document.querySelector(".css-xwf3m5-SuccessMessage");
      if(successMessage){
        successMessage.classList.add("hide")
      }
     }, 1);
     //  open popup form when click on contact us header link
    setShowForm(!showForm);
  }


  return (
  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;
      return (
        <>
        <NavItem key={link}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name} {name==="Services"? <HiOutlineChevronDown />: null}
          </Link>
          {name==="Services" ?
          <div className="submenu__container">
            <div className="submenu">
              <Link link="/cro-plan" aria-current={state.router.link === "/cro-plan/" ? "page" : undefined}>
              Conversion Rate Optimization
              </Link>
              <Link link="/ab-tests" aria-current={state.router.link === "/ab-tests/" ? "page" : undefined}>
              AB Test Development
              </Link>
          </div>
          </div>
          : null
          }
        </NavItem>
       </>
      );
    })}
    <NavItem className="cognitive_bias">
        <a href="https://congnitive-biases-app.web.app/" target="_blank" rel="noopener noreferrer" style={{cursor:"pointer"}}>Cognitive bias</a>
    </NavItem>
    <NavItem className="contact__us">
        <button onClick={handleClick}>Contact Us</button>
    </NavItem>
    {showForm ?
    <div className="popup__container">
      {/* <div className="popUp__bg"></div> */}
      <div className="popContainer__main">
        <PopUp handleClick={handleClick} />
      </div>
    </div>
    :null
    }
  </NavContainer>
)}

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  /* padding: 0 24px; */
  margin: 0;
  align-items: baseline;
  /* overflow-x: auto; */
  font-family: "Inter", sans-serif;

  @media screen and (max-width: 992px) {
    display: none;
  }
  .popup__container{
  position: fixed;
    z-index: 99;
    top: 0%;
    left: 0%;
    height: 100vh;
    width: 100%;
    /* transform: translate(-50%, -50%); */
    display: flex;
    align-items: center;
    justify-content: center;
    .popUp__bg{
    position: fixed;
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    left: 0;
    top: 0;
    height: 100vh;
    }
    .popContainer__main{
      width: 100%;
    }
}
  .contact__us{
    padding-right: 0 !important;
    button{
      color:var(--white);
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      text-align: center;
      width: 165px;
      height: 37px;
      outline: none;
      border: none;
      background: linear-gradient(95.4deg, #D78403 9.09%, #EEAD46 93.37%);
      border-radius: 30px;
      &:hover{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }
  }
`;

const NavItem = styled.div`
  /* padding: 0.1rem; */
  /* margin: 0 16px; */
  color: var(--brand);
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  &:not(:last-of-type){
    padding-right: 25px;
    @media (max-width:1030px) {
     padding-right :  16px;
    }
  }
  .submenu__container{
    display: none;
    opacity: 0;
    left: -53%;
    position: absolute;
    z-index: 1;
    background-color: #323B9F;
    padding: 13px 19px 15px 13px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(100px);
    border-radius: 5px;
    width: 234px;
    .submenu{
      display: flex;
      flex-direction: column;
      & > a{
        &[aria-current="page"] {
        color:var(--primary);
        }
        color: #ffffff;
        &:hover{
          color: var(--primary);
        }
        &:not(:last-of-type){
          padding-bottom: 10px;
        }
      }
    }
  }

  /* &:last-of-type{
   
  } */

  & > a {
    display: inline-block;
    line-height: 2em;
    color:var(--white);
    transition: all 0.3s ease;

    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      color:var(--primary);
    }
    &:hover {
      color:var(--primary);
    }
  }

  &:first-of-type {
    margin-left: 0;
    position: relative;
    a{
      pointer-events: none;
    }
    &:hover{
      .submenu__container{
        display: block;
        opacity: 0.95;
        .submenu{
          & > a{
            pointer-events: all;
          }
        }
      }
    }
  }
`;
