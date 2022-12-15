import React, {useEffect} from "react";
import { connect, styled } from "frontity";
import {MdDoubleArrow} from 'react-icons/md'
import Link from "../link";
import {
  GrFacebookOption,
  GrLinkedinOption,
  GrTwitter,
  GrInstagram
} from "react-icons/gr";
import logo from "../../../../../assets/hero-images/logo.png";
import { SingleArrow } from "../../../../../assets/icons";

// simplest form (only email)

const Footer = ({ state, libraries }) => {
  const data = state.source.get("/footer-newsletter");
  const newsletterForm = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;

  useEffect(()=>{
    var wpcf7Form = document.querySelector( '.subscribe' );
    wpcf7Form.addEventListener('click', ()=>{
        setTimeout(()=>{
          const errorMessage  = document.querySelector(".css-1v5tu5l-ErrorMessage")
          if(errorMessage){
            errorMessage.classList.add("hide")
          }
        }, 4000);
        setTimeout(()=>{
        const successMessage = document.querySelector(".css-xwf3m5-SuccessMessage");
        console.log(successMessage)
        if(successMessage){
          successMessage.classList.add("hide")
          }
      }, 4000);
      })
        
    },[])

  return (
    <>
      <Container>
      {/* <Html2React html={contactForm.content.rendered} /> */}
        <div className="footer__row">
          <div className="footer__inner">
          <div className="footer-widget widget-one">
            <div className="footer_img">
              <img src={logo} alt="OptiPhoenix logo" />
            </div>
            <p>
            Our optimization strategies along with data and experimentation capabilities by our leading experts, make even the most complicated problems simple and easy.
            </p>
            <div className="footer_social_icons">
              <div className="icons_container">
                <a href="https://www.facebook.com/optiphoenix" target="_blank">
                  <GrFacebookOption className="social_icons" />
                </a>
              </div>
              <div className="icons_container">
                <a href="https://twitter.com/optiphoenix_cro" target="_blank">
                  <GrTwitter className="social_icons" />
                </a>
              </div>
              <div className="icons_container">
                <a href="https://www.linkedin.com/company/optiphoenix" target="_blank">
                  <GrLinkedinOption className="social_icons" />
                </a>
              </div>
              <div className="icons_container">
                <a href="https://www.instagram.com/optiphoenix" target="_blank">
                  <GrInstagram className="social_icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-widget widget-two">
            <h4 className="widget-title">Company</h4>
            <ul className="widget-list">
              <li>
                <Link className="widget-list-link" link="/jobs/">
                 <MdDoubleArrow /> Careers
                </Link>
              </li>
              <li>
                <Link className="widget-list-link" link="/about-us/">
                <MdDoubleArrow /> About us
                </Link>
              </li>
              <li>
                <div className="widget-list-link" style={{pointerEvents: "none"}}>
                <MdDoubleArrow /> Services
                </div>
                <ul className="subLinks">
                  <li>
                  <Link className="widget-list-link" link="/ab-tests/">
                   <SingleArrow /> AB Test Development
                  </Link>
                  </li>
                  <li>
                    <Link className="widget-list-link" link="/cro-plan/">
                    <SingleArrow /> Conversion Rate Optimization
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer-widget widget-three">
            <h4 className="widget-title">Stay Updated</h4>
            <ul className="widget-list">
              <li>
                <Link className="widget-list-link" link="/blogs/">
                <MdDoubleArrow /> Blog
                </Link>
              </li>
              <li>
                <a className="widget-list-link" href="https://congnitive-biases-app.web.app/" target="_blank">
                 <MdDoubleArrow /> Congnitive Bias
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget widget-four">
            <h4 className="widget-title">Newsletter</h4>
            <p>
              Subscribe our newsletter to get our update. We don't send span
              email to you.
            </p>
            <div className="input-group mb-3 footer__subscribe">
            <div className="contact_form">
              <Html2React html={newsletterForm.content.rendered} />
              </div>
            </div>
          </div>
          </div>
        </div>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`   
  max-width:1240px;
  margin: 0 auto;
  padding:4rem 20px;
  color:var(--white);
  .footer__row{
    /* justify-content: space-between;
    gap: 10px;
    margin-right: 0;
    margin-left: 0; */
    .footer__inner{
      display: grid;
      /* grid-template-columns: repeat(auto-fit,minmax(272px,1fr)); */
      gap: 35px; 
      @media (min-width:554px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width:828px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width:1103px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
  h4{
    font-weight: 600;
  }
  .footer_social_icons{
    display: flex;
    align-items: center;
    
    .icons_container{
    background: #ffffff;
    margin-right: 20px;
    border-radius: 59%;
    height: 30px;
    width: 30px;
    padding: 6px;
    &:hover{
        background: #fc9f2a;
        transition: all 0.3s ease;
        svg.social_icons{
            fill: #fff;
            transition: all 0.3s ease;
        }
    }

    svg.social_icons {
    fill: #A100FB;
    vertical-align: baseline;
    height: 100%;
    width: 100%;
      }
    }
  }
  .footer__subscribe{
    .contact_form{
      position: relative;
      form{
        p{
          margin-bottom: 0;
        }
        /* display: flex;
        width: 85%; */
        .subscribe{
          position: absolute;
          top: 0;
          right: 0;
          text-transform: capitalize;
          &:hover{
            background: linear-gradient(95.4deg, #D78403 9.09%, #EEAD46 93.37%);
          }
        }
      }
      .css-1v5tu5l-ErrorMessage, .css-dp40ev-Processing, .css-xwf3m5-SuccessMessage{
          padding: 0.25rem 1rem !important;
          margin-top: 9px !important;
        }
    }

  .subscribe{
    background: #8200C2;
    border: none;
    /* line-height: 3; */
    padding: 0 1.5rem;
    color: #ffffff;
    border-radius: 0px 50px 50px 0px;
    height: 48px;
  }
    .wpcf7-email{
        border-radius: 50px;
        height: 48px;
        padding: 0.375rem 0rem 0.375rem 0.9rem;
        border: none;
        width: 100%;
        font-size: 14px;
        &:focus{
          outline: 0;
        }
      }
    span{
    width: 100%;
    border-radius: 0px 50px 50px 0px;
    }
}
  .footer-widget {
    margin-bottom:1rem;
    .widget-title {
      color:var(--white);
      margin-bottom:1.2rem;
    }
    p {
      font-size:1rem;
    }
    .widget-list {
      list-style:none;
      padding-left:0;
      li {
        margin-bottom:0.5rem;
        font-size: 16px;
        .widget-list-link {
          text-decoration:none;
          transition: all 0.3s ease;
          color:var(--white);
          &:hover {
            color:#2a91ff;
          }
        }
        .subLinks{
          padding-left: 10px;
          list-style: none;
          margin-top: 0.5rem;
          li{
            a{
              font-size: 15px;
            }
          }
        }
      }
    }
  }
  .widget-four{
    max-width: 276px;
  }
  .widget-one {
    .footer_img{
      width:160px;
      img{
        margin-bottom: 6px;
        width: 100%;
        height: 100%;
      }
    }
    p {
      @media (min-width: 768px) {
        max-width: 251px;
      }
    }
  }
`;
