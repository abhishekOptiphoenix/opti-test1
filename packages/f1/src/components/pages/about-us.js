import React, {useEffect} from "react";
import { connect, styled } from "frontity";
import aboutBg from "../../../../../assets/aboutus/about-bg.png";
import { founders, leaders, goGroups } from "../data";
import rocket from "../../../../../assets/aboutus/rocket.png"
import goGroup from "../../../../../assets/aboutus/gogroup.png"
import teamwork from "../../../../../assets/aboutus/teamwork.png"
import testimonial from "../../../../../assets/aboutus/testimonial.png"
import topArrow from "../../../../../assets/aboutus/topArrow.png"
import downArrow from "../../../../../assets/aboutus/downArrow.png"
import bussinessman from "../../../../../assets/aboutus/Businessman.png"
import dot from "../../../../../assets/aboutus/dot.png"
import ContactMap from "../customComponents/contactMap";
import CommonSlider from "../customComponents/commonSlider";

const AboutUs = () => {

  useEffect(()=>{
    var wpcf7Form = document.querySelector( '.wpcf7-submit' );
    if(wpcf7Form){
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
    }
  },[])

  return (
    <Aboutcontainer>
      <div className="aboutusImg_container">
        <img src={aboutBg} alt="about background" loading="lazy" />
      </div>
      <div className="aboutus_container">
        <div className="first_section_aboutus">
          <div className="first_section_aboutus__content">
          <div>We are a leading CRO and Experimentation company in India</div>
          <p>Experimentation is our DNA. We have helped brands all over the world to make better decisions.</p>
          </div>
        </div>
        <div className="second_section_aboutus">
          <div className="second_section_aboutus__content">
            <div className="heading">About Optiphoenix</div>
            <div className="aboutOptiphoenix__container">
              <div className="aboutOptiphoenix__content">
                <div className="img__container img">
                  <img src={rocket} alt="rocket" />
                </div>
                  <div className="about__heading">
                  Foundation
                  </div>
                  <div className="para">
                  Founded in 2015 with a passion to make a difference
                  </div>
              </div>
              <div className="aboutOptiphoenix__content">
                <div className="img__container down">
                  <img src={downArrow} alt="down arrow" />
                </div>
              </div>
              <div className="aboutOptiphoenix__content">
                <div className="img__container img">
                  <img src={testimonial} alt="testimonial" />
                </div>
                  <div className="about__heading">
                  150+ Clients
                  </div>
                  <div className="para">
                  Client's Revenue increased by more than $500 Million
                  </div>
              </div>
              <div className="aboutOptiphoenix__content">
                <div className="img__container top">
                  <img src={topArrow} alt="top arrow" />
                </div>
              </div>
              <div className="aboutOptiphoenix__content">
                <div className="img__container img">
                  <img src={teamwork} alt="rocket" />
                </div>
                  <div className="about__heading">
                  Team
                  </div>
                  <div className="para">
                  Grown from 3 to 50 strong team and still growing
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutOptiphoenix__container__bottom">
            <div className="aboutOptiphoenix__content__bottom">
              <div className="img__container img">
                <img src={bussinessman} alt="about" />
              </div>
              <div className="list__content">
                <ul style={{  listStyleImage: `url(${dot})` }}>
                  <li>Have built innovative methods to do experimentation  and provide results.</li>
                  <li>Team is a perfect mix of Data Research Analysts, Engineers, and UX Experts</li>
                  <li>Over 20 years of  combined experience in  CRO, Website Research  & Analysis, and Online  User Psychology</li>
                </ul>
              </div>
            </div>
        </div>
        <div className="third_section_aboutus">
          <div className="third_section_aboutus__content">
            <div className="heading">Founders</div>
          <div className="third_section_aboutus__indicontainer">
            {founders.map((founder)=>(
              <div className="founder__indi" key={founder.id}>
                <div className="img__content">
                  <img src={founder.img} alt={founder.name} />
                </div>
                <div className="name">{founder.name}</div>
                <div className="position">{founder.position}</div>
              </div>
              ))
            }
            </div>
          </div>
        </div>
        <div className="forth_section_aboutus">
          <div className="heading">Meet the leaders</div>
          <div className="forth_section_aboutus__content">
            {leaders.map((leader)=>(
              <div className="forth_section_aboutus__indi">
                <div className="limg__container">
                  <img src={leader.img} alt={leader.name} />
                </div>
                <div className="lname">{leader.name}</div>
                <div className="lposition">{leader.position}</div>
              </div>
            ))
            }
          </div>
        </div>
        <div className="fifth_section_aboutus">
          <CommonSlider />
        </div>
        <div className="sixth_section_aboutus">
          <div className="sixth_section_inner">
          <div className="left__content">
            <div className="logo">
              <img src={goGroup} alt="go group" />
            </div>
            <div className="sub_heading">
            An international network of world's best CRO agencies for knowledge and resource sharing.
            </div>
          </div>
          <div className="right__content">
            <div className="right__content__inner">
              {goGroups.map((goGroup)=>(
                <div className="goGroup__card" key={goGroup.id}>
                  <img src={goGroup.img} alt="" />
                  <p>{goGroup.country}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
        <div className="seventh_section_aboutus">
          <ContactMap />
        </div>
      </div>
    </Aboutcontainer>
  );
};

const Aboutcontainer = styled.div`
  p,
  h2,
  h3,
  li {
    margin: 0;
    font-family: "Inter", sans-serif;
  }
  div{
    line-height: 1;
  }
  .margin-top {
    margin-top: 100px !important;
  }
  .container {
    max-width: 1240px;
    padding: 0 20px;
    margin: 0 auto;
    font-family: "Inter", sans-serif;
  }
  .aboutusImg_container {
    position: absolute;
    z-index: -1;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    max-width: 1440px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 700px;
      object-fit: cover;
      @media (min-width: 1920px) {
        object-position: top;
      }
    }
  }
`;

export default AboutUs;
