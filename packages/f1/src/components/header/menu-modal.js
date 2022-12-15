import React, {useState} from "react";
import { styled, connect } from "frontity";
import Link from "../link";
import {HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi"
import PopUp from "../customComponents/popup-contact";

const MenuModal = ({ state, actions }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = ()=>{
    setShowForm(!showForm);

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
      setShowForm(!showForm);
  }


  const [navState, setNavState] = useState(false)
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;
  return (
    <>
      <SecondOvelay onClick={actions.theme.toggleMobileMenu} />
      <MenuOverlay />
      <MenuContent as="nav">
      <div className="main__links">
        <div className="link" onClick={(e)=> setNavState(!navState)}>
          Services {navState ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </div>
        <div className="submenu__container" style={{display:`${navState?"block":"none"}`}}>
                <div className="submenu">
                  <MenuLink link="/cro-plan/"  aria-current={state.router.link === "/cro-plan/" ? "page" : undefined}>
                    CRO
                  </MenuLink>
                  <MenuLink link="/ab-tests/"  aria-current={state.router.link === "/ab-tests/" ? "page" : undefined}>
                    A B Testing
                  </MenuLink>
              </div>
              </div>
      </div>
        {isThereLinks &&
          menu.map(([name, link]) => (
            <>
            <div className="main__links" style={{display: `${name==="Services" ? "none":"block"}`}}>
            <MenuLink 
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
              >
              {name} 
            </MenuLink> 
            </div>
            </>
          ))}
              <div style={{marginBottom: "23px"}}>
                  <a className="custom_link congnitive__bias" href="https://congnitive-biases-app.web.app/" target="_blank" rel="noopener noreferrer">Cognitive bias</a>
              </div>
              <div className=" custom_link contact__us" onClick={handleClick}>
                  Contact us
              </div>
            {showForm ?
              <div className="popup__container">
                <div className="popUp__bg"></div>
                <div className="popContainer__main">
                  <PopUp handleClick={handleClick} />
                </div>
              </div>
              :null
            }
      </MenuContent>
    </>
  );
};

const SecondOvelay = styled.div`
  /* width: 100vw; */
  /* left: 0; */
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    /* overflow: hidden auto; */
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    width: 100%;
    @media (max-width:380px) {
      height: 103vh;
      width: 102%;
    }
    @media (min-width:993px) {
      display: none;
    }
`;

const MenuOverlay = styled.div`
  /* width: 100vw; */
  /* left: 0; */
    background-color: #323B9F;
    height: 100vh;
    overflow: hidden auto;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    min-width: 207px;
    @media (max-width:380px) {
      height: 103vh;
    }
    @media (min-width:993px) {
      display: none;
    }
`;

const MenuContent = styled.div`
  z-index: 3;
  display:flex;
  flex-direction: column;
  /* width: 100%; */
  position: fixed;
  right: 37px;
  top: 93px;
  .custom_link{
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    color:#c0c0c0;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
      color: #ffffff;
    }
  }
  .popup__container{
    position: fixed;
    z-index: 999;
    top: 0%;
    left: 0%;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:768px) {
      overflow-y: auto;
    }
    .popUp__bg{
    position: fixed;
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    left: 0;
    top: 0;
    height: 100vh;
    @media (max-width:768px) {
        display: none;
      }
    @media (max-width:400px) {
        top: -7px;
        height: 103vh;
      }
    }
    .popContainer__main{
      width: 100%;
      @media (max-width:768px) {
        height: 100%;
      }
    }
}
  @media (min-width:993px) {
      display: none;
    }
    .main__links{
      &:not(:last-of-type){
        margin-bottom: 23px;
      }
      .link{
        font-weight: 500;
        font-size: 16px;
        text-align: left;
        text-transform: uppercase;
        /* padding: 1.2rem 0; */
        color:#c0c0c0;
        svg{
          margin-left: 6px;
        }
      }
      &:first-of-type{
        /* pointer-events: none; */
        .submenu__container{
          margin-top: 16px;
          transform: translateX(23px);
          .submenu{
            display: flex;
            flex-direction: column;
            a{
              pointer-events: all;
              &[aria-current="page"] {
                color: #ffffff;
              }
              font-weight: 500;
              font-size: 14px;
              color: #C0c0c0;
              transition:  all 0.3s ease 0s;
              &:hover, &:focus{
                text-decoration: underline;
                color: #ffffff;
              }
              &:not(:last-of-type){
                margin-bottom: 17px;
              }
            }
          }
        }
      }
    }
`;

const MenuLink = styled(Link)`
  width: 100%;
  outline: 0;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  text-transform: uppercase;
  /* padding: 1.2rem 0; */
  color:#c0c0c0;
    display: block;
    position: relative;
    z-index: 999;
    transition: all 0.3s ease 0s;
    &:hover,
    &:focus {
      color:#ffffff;
      text-decoration: underline;
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: #ffffff;
  }
`;

export default connect(MenuModal);
