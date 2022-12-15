import React, {useEffect} from "react";
import { connect, styled } from "frontity";
import PopupContact from "../customComponents/popup-contact";
import contactBg from "../../../../../assets/homepage/contactbg.png"

const ContactUs = ({ state, libraries, handleClick}) => {


  return (
    <Contactpage>
      <div className="contactpage_form">
      <div className="contactpage_form__container">
        <img src={contactBg} alt="about background" loading="lazy" />
      </div>
          <PopupContact />
      </div>
    </Contactpage>
  );
};

export default connect(ContactUs);

const Contactpage = styled.div`
  .contactpage_form__container {
    position: absolute;
    z-index: -1;
    width: 100%;
    top: 0;
    left: 0;
    height: 904px;
    right: 0;
    /* max-width: 1440px; */
    margin: 0 auto;
    @media (max-width: 805px) {
        height: 1300px;
    }
    @media (max-width: 768px) {
        height: 1300px;
        img{
            object-position: right;
        }
    }
    @media (max-width: 492px) {
        height: 1350px;
    }
    @media (max-width: 340px) {
        height: 1400px;
    }
    @media (max-width: 282px) {
        height: 1450px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .contactpage_form{
          .popupcontact_form {
              background-color: transparent;
              height: auto;
              justify-content: center;
              .close__icon{
                  svg{
                      display: none;
                  }
              }
              .heading,p{
                      color: #ffffff !important;
                  }
            }
        }
`
