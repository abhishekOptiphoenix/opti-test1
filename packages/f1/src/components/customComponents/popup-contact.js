import React, {useEffect} from "react";
import { connect, styled } from "frontity";
import ReviewedForm from "./ReviewedForm";
import {MdOutlineClose} from "react-icons/md";
import {ContactImages} from "../data"

const Popupcontact = ({ state, libraries, handleClick}) => {

  const data = state.source.get("/main-contact-us");
  const contactForm = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;

  useEffect(()=>{
    const reviewedForm = document.querySelector(".wpcf7-submit");
    /**
     * when click on the submit button then hide 
     * the success or error message in 4second
     */ 
    reviewedForm.addEventListener( 'click', function( event ) {
      setTimeout(()=>{
        const errorMessage  = document.querySelector(".css-1v5tu5l-ErrorMessage")
        if(errorMessage){
            errorMessage.classList.add("hide")
          }
        const successMessage = document.querySelector(".css-xwf3m5-SuccessMessage");
        if(successMessage){
          successMessage.classList.add("hide")
        }
       }, 4000);

  });
},[])

  return (
    <Maincontactform>
      <div className="popupcontact_form">
      <div className="close__icon">
        <div className="heading">
          Get in Touch
        </div>
          <MdOutlineClose onClick={handleClick} />
      </div>
      <p>We can help you improve your website conversion rate, revenue per visitor by providing CRO, Analytics, data driven redesign and AB Test Development services.</p>
      <div className="container">
         
        <div className="bottom__container">
          <div className="left__form">
            <Html2React html={contactForm.content.rendered} />
          </div>
          <div className="right__images">
            <div className="right__image__content">
              <div className="contact_rigth_heading">We work with world's renowned brands</div>
              <div className="img__content">
              {ContactImages.map((contactImage)=>(
                <div className={`contact__img ${contactImage.name}`} key={contactImage.id}>
                  <img src={contactImage.img} />
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Maincontactform>
  );
};

export default connect(Popupcontact);

const Maincontactform = styled.div`
display: flex;
margin: 0 auto;
/* max-width: 1090px; */
justify-content: space-around;
align-items: center;
position: relative;
height: 100%;
@media (max-width:768px) {
    height: auto;
  }
.popupcontact_form{
  background-color: #ffffff;
  padding: 25px 49px 43px;
  height: 100vh;
  /* border-radius: 30px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
  @media (max-width:768px) {
    border-radius: 0;
    height: 100%;
  }
  @media (max-width:480px) {
    padding-left: 19px;
    padding-right: 19px;
  }
  @media (max-width:340px) {
    height: 100%;
    padding-left: 15px;
    padding-right: 15px;
    overflow-y: auto;
  }
  .close__icon{
    position: relative;
    margin-bottom: 11px;
    text-align: center;
    .heading{
      font-weight: 400;
      font-size: 36px;
      line-height: 1;
      font-family: 'Merriweather Sans';
      text-align: center;
      color: #000000;
      @media  (max-width:992px){
       font-size: 27px;
      }
    }
    svg{
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: #000000;
      position: absolute;
      right: 0;
      top: 0%;
      @media (max-width:500px) {
        width: 19px;
        height:19px
      }
    }
  }
  p{
    font-weight: 500;
    font-size: 18px;
    max-width:881px;
    /* line-height: 1; */
    color: #28292D;
    text-align: center;
    margin: 0 auto 40px auto;
    font-family: "Inter", sans-serif;
    @media (max-width:600px) {
      font-size: 15px;
    }
  }
  .main_form {
    width: auto;
    height: auto;
    margin: 0;
    .form{
      max-width: auto; 
      margin: 0; 
      border-top:0;
      padding: 0; 
      border-radius:0;
      box-shadow:none;
    }
    span {
      display: block;
      input {
        width: 100%;
        color: #4A4B4F;
        padding: 9px 10px;
        border: 1px solid #c6c6c8;
        font-size: 14px;
        border-radius: 0;
        outline: 0;
        margin-bottom: 12px;
        border-radius: 4px;
        height: 54px;
      }
      /* input:not([type="submit"]) {
        color: #7f7f7f !important;
      } */
    }
    .wpcf7-form-control-wrap{
      textarea{
        height: 91px;
        resize: none;
        width: 100%;
        font-size: 14px;
        padding: 9px 10px;
        border: 1px solid #c6c6c8;
        resize: none;
        color: #4A4B4F;
        border-radius: 4px;
      }
    }
    .wpcf7-submit {
      background: linear-gradient(95.4deg, #D78403 9.09%, #EEAD46 93.37%);
      color: #ffffff;
      height: 40px;
      font-size: 18px;
      outline: 0;
      border: 0;
      font-family: "Inter", sans-serif;
      margin-top: 10px;
      width: 100%;
      border-radius: 30px;
      &:hover{
      }
      @media (max-width:340px) {
        height: 47px;
        margin-top: 24px;
      }
    }
    label {
      font-size: 18px;
      font-family: "Inter", sans-serif;
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
  }
  .container{
    
    .bottom__container{
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width:768px) {
        flex-direction: column;
      }
      .left__form{
        flex: 1;
        max-width: 450px;
        width: 100%;
        background: #ffffff;
        padding: 29px 37px 20px;
        .screen-reader-response{
          display: none;
        }
        filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.25));
        border-radius: 20px;
        @media (max-width:400px) {
          padding: 20px; 
        }
        @media (max-width:768px) {
          max-width: inherit;
        }
        @media (min-width:768px) and (max-width:900px) {
        flex: 40%;
        }

      }
      .right__images{
        width: 100%;
        max-width: 511px;
        @media (max-width:768px) {
          width: 100%;
          max-width: inherit;
        }
        @media (min-width:768px) and (max-width:900px) {
        flex: 60%;
        }
        .right__image__content{
          position: relative;
          background: linear-gradient(180deg, #EEF3FF 0%, #A3BCFA 100%);
          border-radius: 0px 100px 100px 0px;
          height: 406px;
          padding: 0 49px 0 26px;
          @media (max-width:768px) {
            border-radius: 0px 0px 50px 50px;
            width: 92%;
            margin: 0 auto;
            padding: 0 20px;
          }
          .contact_rigth_heading{
            text-align: left;
            font-weight: 600;
            font-size: 16px;
            padding-top: 10px;
            color: #28292D;
            @media (max-width:505px) {
              text-align : center;
            }
          }
          .contact__img{
            position: absolute;
            &.taj{
              top:44px;
              @media  (max-width:505px){
                top: 70px;
              }
              img{
                @media  (max-width:540px){
                  width: 10vw;
                }
                @media  (max-width:450px){
                  width: 19vw;
                }
              }
            }
            &.jabra{
              top: 86px;
              left: 35%;
              @media  (max-width:540px){left: 37%;}
              @media  (min-width:768px) and  (max-width:947px) {
                left: 24%;
              }
              @media  (max-width:768px){
                left: 40%;
              }
              img{
                @media  (max-width:540px){
                  width: 16vw;
                }
                @media  (max-width:450px){
                  width: 24vw;
                }
              }
            }
            &.infidel{
              top: 51px;
              right: 16%;
              @media  (max-width:768px){
                right: 7%;
              }
              @media  (max-width:540px){
                right: 6%;
                img{
                  width: 10vw;
                  @media  (max-width:450px){
                    width: 16vw;
                  }
                }
              }
              @media  (max-width:409px){
                top: 77px;
              }
            }
            &.butcher{
              top: 128px;
              @media  (max-width:409px){
                top: 154px;
              }
              img{
                @media  (min-width:768px)and  (max-width:890px) {
                  width: 100px;
                }
              }
              img{
                @media  (max-width:540px){
                  width: 20vw;
                }
                @media  (max-width:450px){
                  width: 28vw;
                }
              }
            }
            &.kamoeleon{
              top: 137px;
              right: 9%;
              @media  (max-width:409px){
                top: 163px;
              }
              @media (min-width:768px)and (max-width:890px) {
                right: 4%;
                img{
                  width: 120px;
                } 
              }
              @media  (max-width:540px){
                right: 6%;
                img{
                  width: 27vw;
                  @media  (max-width:450px){
                    width: 34vw;
                  }
                }
              }
            }
            &.jellyfish{
              bottom: 153px;
              img{
                @media  (max-width:540px){
                  width: 19vw;
                }
                @media  (max-width:450px){
                  width: 23vw;
                }
              }
            }
            &.henkan{
              bottom: 166px;
              left: 36%;
              @media (max-width:947px) {
                left: 55%;
              }
              @media  (max-width:540px){
                left: 63%;
              }
              @media  (max-width:450px){
                left: 55%
              }
              @media  (max-width:409px){
                bottom: 140px;
              }
              @media (min-width:768px) and (max-width:947px) {
                right: 0;
                left: 0;
                text-align: end;
              }
              img{
                @media  (max-width:540px){
                  width: 22vw;
                }
                @media  (max-width:450px){
                  width: 32vw;
                }
              }
            }
            &.deloitte{
              bottom: 69px;
              img{
                @media  (max-width:540px){
                  width: 26vw;
                }
                @media  (max-width:450px){
                  width: 35vw;
                }
              }
            }
            &.wfunnel{
              bottom: 103px;
              right: 8%;
              @media  (max-width:409px){
                bottom: 87px;
              }
              img{
                @media  (max-width:540px){
                  width: 24vw;
                }
                @media  (max-width:450px){
                  width: 32vw;
                }
              }
            }
            &.inchape{
              bottom: 34px;
              right: 18%;
              @media  (max-width:540px){
                right: 13%;
              }
              @media  (max-width:450px){
                right: 6%;
              }
              @media  (max-width:409px){
                bottom: 18px;
              }
              @media (min-width:768px) and (max-width:947px) {
                bottom: 30px;
              }
              img{
                @media  (max-width:540px){
                  width: 26vw;
                }
                @media  (max-width:450px){
                  width: 34vw;
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
