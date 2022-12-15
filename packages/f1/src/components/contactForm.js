import React from "react";
import comma from "../../../../assets/cro/comma.png"
import { connect, styled } from "frontity";

const ContactForm = ({ state, libraries, image , description, author, designation }) => {
  const data = state.source.get("/contact-form");
  const contactForm = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <ContactContainer>
        <div className="blob"></div>
      <div className="contact_form">
        <Html2React html={contactForm.content.rendered} />
      </div>
      <div className="right__content">
        <img className="comma" src={comma} alt="" />
        <div className="views">{description}</div>
        <div className="author">{author}</div>
        <div className="designation">{designation}</div>
        <div className="taj__img">
          <img src={image} alt="" />
        </div>
      </div>
    </ContactContainer>
  );
};

export default connect(ContactForm);

const ContactContainer = styled.div`
display: flex;
max-width: 1240px;
padding: 0 20px;
margin: 0 auto;
justify-content: space-around;
align-items: center;
position: relative;
padding-top: 20px;
@media (max-width: 768px) {
  flex-direction: column-reverse;
}
.blob{
      position: absolute;
      width: 787px;
      top: -18px;
      background: linear-gradient(229.04deg, rgba(130, 18, 196, 0.1) 13.43%, rgba(22, 152, 208, 0.1) 34.46%, rgba(190, 171, 102, 0.1) 59.84%, rgba(79, 31, 236, 0.1) 83.04%);
      box-shadow: 6px 6px 20px rgba(146, 146, 146, 0.25);
      z-index: -1;
      right: 0;
      @media (max-width: 1099px) {
        right: 19px;
      }
      @media (max-width: 818px) {
        right: 0;
        left: 0;
        width: 100%;
      }
      @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
      }
    }
  .contact_form {
    max-width: 532px;
    flex: 1;
    @media (max-width: 1099px) {
      padding-right: 20px;
    }
    @media (max-width: 768px) {
        padding-right: 0px;
        width: 85%;
        margin-top: 30px;
      }
    @media (max-width: 400px) {
        width: 95%;
      }
      .screen-reader-response{
        display: none;
      }
    span {
      color: #D65050;
      /* display: block; */
      input {
        width: 100%;
        padding: 0px 18px;
        border: 1px solid #E6E6E6;
        font-size: 14px;
        font-weight: 500;
        color:  #888888;
        border-radius: 0;
        outline: 0;
        height: 60px;
        margin-bottom: 9px;
        font-family: "Inter", sans-serif;
        @media (max-width:400px) {
          height: 45px;
        }
      }
    }
    .wpcf7-submit {
      color: #ffffff;
      outline: 0;
      border: 0;
      font-size: 22px;
      font-weight: 500;
      font-family: "Inter", sans-serif;
      margin-top: 17px;
      width: 100%;
      height: 60px;
      background: linear-gradient(180deg, rgba(131, 28, 207, 0.87) 0%, rgba(47, 88, 219, 0.87) 100%);
      border-radius: 100px;
      &:hover{
        background: linear-gradient(95.4deg, #D78403 9.09%, #EEAD46 93.37%);
      }
      @media (max-width:400px) {
          height: 45px;
      }
    }
    label {
      font-size: 18px;
      font-family: "Inter", sans-serif;
      padding-left: 5px;
    }
    br{
        display:none;
    }
    p{
        margin-bottom:0
    }
    .wpcf7-form{
        /* padding-right:75px; */
    }
    .form{
      max-width: 532px;
      background-color: #ffffff;
      border-top: 4px solid #8200c2;
      padding: 14px 30px 20px;
      border-radius: 0;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      @media (max-width:768px) {
        padding-top: 24px;
      }
      @media (max-width:400px) {
        padding-right: 11px;
        padding-left: 11px;
      }
    }
  }
  .right__content{
    font-family: "Inter", sans-serif;
    max-width: 442px;
    @media (max-width: 1099px) {
        flex: 1;
        padding-left: 20px;
        max-width: 500px;
      }
      @media (max-width: 480px) {
        padding-left: 20px;
        max-width: 400px;
      }
    .comma{
      margin-bottom: 22px;
      @media (max-width: 768px) {
        margin-top: 22px;
      }
    }
    .views{
      font-weight: 500;
      font-size: 24px;
      margin-bottom: 28px;
      line-height: 1.1;
      @media (max-width: 1099px) {
        font-size: 18px;
        padding-right: 10px;
        margin-bottom: 13px;
      }
    }
    .author{
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 10px;
      @media (max-width: 1099px) {
       margin-bottom: 21px;
      }
    }
    .designation{
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 12px;
    }
  }
`;
