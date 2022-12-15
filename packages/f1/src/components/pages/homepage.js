import React, {useState, useEffect} from "react";
import { connect, styled} from "frontity";
import Link from "../link";
import { clients, HomeReview } from "../data";
import {cards} from "../data";
import { achievements } from "../data";
import quote from "../../../../../assets/homepage/Quote.png";
import Slider from "react-slick";
import graph from "../../../../../assets/homepage/graph.png";
import setup from "../../../../../assets/homepage/setup.png";
import achievementBg from "../../../../../assets/homepage/achievementBg.png";
import homePageBg from "../../../../../assets/hero-images/homepageBg.png";
import arrow from "../../../../../assets/homepage/arrow.png";
import check from '../../../../../assets/homepage/check.png'
import { tools } from "../data";
import Sliders from "../customComponents/Sliders";
import ReviewedForm from "../customComponents/ReviewedForm";
import Progress from "../customComponents/progressBar/progress";
import { GrowthIcon } from "../../../../../assets/icons";
import { Link as ScrollLink } from 'react-scroll'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import ReactTyped from "react-typed";


const HomePage = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      },
    ]
  };

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
    <Homepagecontainer>
      <div className="homepageImg_container">
        <img src={homePageBg} alt="about background" loading="lazy" />
      </div>
      <div className="homepage_container">
        <div className="first_section container">
          <div className="top_section">
            <Heading>Boost your revenue with <br/><span className="main_name">Experimentation</span>
            <ReactTyped 
            strings={["Experimentation", "AB Testing", "CRO"]} 
            typeSpeed={100}
            backSpeed={100}
            smartBackspace
            backDelay={1}
            fadeOut={false}
            fadeOutDelay={100}
            loopCount={0}
            showCursor
            cursorChar="|"
            className="typing"
            loop
            />
            </Heading>
            <div className="test_links_container">
              <Progress />
            </div>
            <div className="cta_btn">
              <ScrollLink activeClass="active" to="homepage__form" spy={true} smooth={true} offset={-65} duration={1500}>
                <button className="touch_btn">Get in touch</button>
              </ScrollLink>
              <ScrollLink activeClass="active" to="homepage__service" spy={true} smooth={true} offset={0} duration={500}>
              <button className="service_btn">Our Services</button>
              </ScrollLink>
            </div>
          </div>
          <div className="bottom_section">
            <div className="bottom_section_content">
              {clients.map((client) => (
                <div className="indi_client_data" key={client.id}>
                  <div className="main__content">
                    <div className="left__content">
                  <div className="client_img">
                    <img src={client.img} alt={client.img} />
                  </div>
                  <p style={{display: "flex", alignItems: "center", justifyContent:"center"}} className="percent">{client.percent}
                    <div className="growth__icon" style={{marginLeft:"5px"}}>
                      <GrowthIcon />
                    </div>
                  </p>
                  <p className="para">{client.para}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="second_section margin-top container">
        <Reviewslidercontainer>
        <Slider {...settings}>
          {HomeReview.map((HomeRevie)=>(
            <div className="single_review" style={{ marginBottom: "100px" }} key={HomeRevie.id}>
            <img src={quote} alt="quote-image" />
            <p
              style={{
                fontSize: "20px",
                fontStyle: "italic",
                marginTop: "10px",
                textAlign:'center'
              }}
              >
              {HomeRevie.para}
            </p>
            <div className="bottom_content">
              <div className="profile_img">
                <img src={HomeRevie.img} alt="profile-image" />
              </div>
              <div className="profile_details">
                <p className="name">{HomeRevie.name}</p>
                <p className="role">
                  {HomeRevie.desg}
                </p>
              </div>
            </div>
          </div>
            ))}
            </Slider>
          </Reviewslidercontainer>
          {/* <hr style={{ opacity: "0.1", border: "1px solid #4654F6" }} /> */}
        </div>
        <div className="third_section margin-top  container" id="homepage__service">
          <div className="testing_service">
            <div className="heading">
              <h1>AB Testing Services</h1>
            </div>
            <div className="top_content">
              <div className="graph_img_container">
                <div className="graph_img">
                  <img style={{objectFit:"contain"}} src={graph} alt="graph" />
                </div>
              </div>
              <div className="graph_desc">
                <h3>Conversion Rate Optimization</h3>
                <p>
                Achieve higher growth and better conversion rate with our CRO program. This include building an optimization strategy and framework, analysing user behaviour, designing and coding AB Tests.
                </p>
                <Link link="/cro-plan/">Learn More</Link>
              </div>
            </div>
            <div className="bottom_content">
              <div className="graph_desc">
                <div className="setup_desc">
                  <h3>A/B Test Setup</h3>
                  <p>
                  Outsource your AB Test Development. We have 10+ years of experience in building AB Tests in almost all AB Test platforms at a fraction of the price.
                  </p>
                  <Link link="/ab-tests/">Learn More</Link>
                </div>
              </div>
              <div className="graph_img_container">
                <div className="graph_img setup">
                  <img src={setup} alt="setup-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fourth_section margin-top  container">
          <div className="details_card">
            <div className="details_card_content">
              {cards.map((card) => (
                <div
                  className="indi_card_data"
                  key={card.id}
                  style={{ background: card.background}}
                >
                  <div className="top_card_data">
                    <div className="card_img">
                      <img src={card.img} alt={card.heading} />
                    </div>
                    <h4>{card.heading}</h4>
                    <p className="para">{card.para}</p>
                  </div>
                  {/* <StyledLink link="/ab-tests">
                    <div className="link">{card.link}</div>
                  </StyledLink> */}
                </div>
              ))}
            </div>
          </div>
        </div>
         <div className="fifth_section margin-top  container">
          <Sliders text={"Clients love working with us"} />
        </div>
        <div className="sixth_section margin-top">
          <div className="achievement_img">
            <img src={achievementBg} alt="Achievement" />
          </div>
          <div
            className="achievements_detail_content"
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "144px 20px 0",
            }}
          >
            <div className="achievements_detail_top">
              {achievements.map((achievement) => (
                <div className="achievements_detail_indi" key={achievement.id}>
                  <div className="user_img">
                    <img src={achievement.img} alt={achievement.para} />
                  </div>
                  <h2><CountUp start={viewPortEntered ? null : 0}
                  end={achievement.number}
                  prefix={achievement.prefix ? achievement.prefix: ""}
                  suffix={achievement.suffix ? achievement.suffix : ""} >
                     {({ countUpRef, start }) => (
                   <VisibilitySensor  active={!viewPortEntered}  onChange={isVisible => {
                    if (isVisible) {
                      setViewPortEntered(true);
                    }
                  }}
                  delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                  </CountUp>
                  </h2>
                  <p>{achievement.para}</p>
                </div>
              ))}
            </div>
            <hr style={{ opacity: "0.4", border: "1px solid #FFFFFF", margin:'0' }} />
            <div
              className="heading"
              style={{ marginTop: "100px", textAlign: "center" }}
            >
              <h2>Get in touch today, and get FREE website review worth $900</h2>
            </div>
            <div className="achievements_detail_bottom">
              <div className="achievements_details_left">
                <div className="top_heading">
                  <h3>Fill out this form to get free website review</h3>
                  <div className="arrow_img">
                    <img src={arrow} alt="Arrow" />
                  </div>
                </div>
                <p>Why Choose Optiphoenix?</p>
                <ul>
                  <li>
                    Certified CRO experts with international certifications from
                    Conversion XL
                  </li>
                  <li>7 Years of CRO experience</li>
                  <li>900+ Winning experiments deployed</li>
                  <li>Research Analysts with technical knowledge</li>
                  <li>Costs Less than any other CRO agencies</li>
                </ul>
              </div>
              <div className="achievements_contact_form" id="homepage__form" >
                <ReviewedForm />
              </div>
            </div>
          </div>
        </div>
        <div className="seventh_section">
          <div className="reason_to_join container">
            <div className="joining_benefits">
              <div className="benefit_container">
                {tools.map((tool) => (
                  <div className="benefit_content" key={tool.id}>
                    <div className="img_container">
                      <img src={tool.img} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Homepagecontainer>
  );
};

export default connect(HomePage);

const Homepagecontainer = styled.div`
  p,
  li {
    margin: 0;
    font-family: "Inter", sans-serif;
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
  .homepageImg_container{
    position: absolute;
    z-index: -1;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    img{
      object-fit: cover;
      width: 100%;
      height: 691px;
      @media (max-width:457px) {
          height: 560px;
      }
    }
  }
  .homepage_container {
    color: #ffffff;
    .first_section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 44px;
      .top_section {
        text-align: center;
        margin-bottom: 107px;
        @media (max-width:768px){
          height: 521px;
          margin-top: 100px;
          margin-bottom: 0;
        }
        @media (max-width:457px) {
          margin-top: 0px;
        }
        .test_links_container {
          margin-bottom: 78px;
          @media (max-width: 639px) {
              display: none;
            }
          }
        .cta_btn {
          button {
            width: 193px;
            outline: none;
            border-radius: 30px;
            height: 58px;
            border: none;
            font-size: 18px;
            font-weight: 600;
            @media (max-width:457px) {
               width: 100%;
            }
          }
          .touch_btn {
            background: linear-gradient(95.4deg, #d78403 9.09%, #eead46 93.37%);
            color: #ffffff;
            margin-right: 32px;
            border: 1px solid #d68435;
            &:hover{
               box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
            }
            @media (max-width:457px) {
              margin-right :0px ;
              margin-bottom: 20px;
            }
          }
          .service_btn {
            background: #ffffff;
            color: #28292d;
            border: 1px solid #ffffff;
            &:hover{
               box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
            }
          }
        }
      }
      .bottom_section {
        .bottom_section_content {
          & > * + *{
            margin-left: 20px;
          }
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            @media (max-width:919px) {
              justify-content: space-around;
            }
          .main__content {
              display: flex;
              align-items: flex-end;
              justify-content: center;
            }
          .indi_client_data {
            background: #ffffff;
            padding: 1.5rem;
            box-shadow: 0px 3px 26px rgba(25, 64, 187, 0.11);
            border-radius: 16px;
            text-align: center;
            &:last-of-type{
              @media (max-width:919px) {
                  margin-top: 30px;
                }
              @media (max-width:899px) {
                  margin-left: 0;
                }
            }
            &:nth-of-type(3){
              @media (max-width:694px) {
                margin-top: 30px;
              }
              @media (max-width:551px) {
                margin-left: 0;
                margin-right: 20px;
              }
            }
            &:first-of-type{
              @media (max-width:694px) {
                margin-left: 20px;
              }
              @media (max-width:551px) {
                margin-left: 0;
              }
              @media (max-width:489px) {
                margin-bottom: 30px;
              }
            }
            @media (max-width:489px) {
              width: 100%;
              margin-left: 0;
              &:nth-of-type(3){
               margin-right : 0 ;
              }
            }
            .client_img {
              width: 157px;
              height: 54px;
              margin: 0 auto 10px;
              img {
                object-fit: contain;
                height: 100%;
                width: 100%;
              }
            }
            p {
              color: #28292d;
            }
            .percent {
              font-size: 23px;
              font-weight: 600;
              margin-bottom: 2px;
            }
            .para {
              font-size: 15px;
              line-height: 1;
            }
          }
        }
      }
    }
    .second_section {
      margin-bottom: 150px;
      .single_review {
        p {
          color: #28292d;
        }
        .bottom_content {
          margin-top: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          .profile_img {
            width: 65px;
            height: 65px;
            overflow: hidden;
            border-radius: 50%;
            margin-right: 16px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .profile_details {
            .name,
            .role {
              font-size: 16px;
            }
            .name {
              font-weight: 600;
            }
          }
        }
      }
    }
    .third_section {
      .testing_service {
        .heading {
          margin-bottom: 100px;
          text-align: center;
          @media (max-width:768px) {
            margin-bottom: 50px;
          }
          h1 {
            font-size: 48px;
            font-weight: 400;
            font-family: 'Merriweather Sans', sans-serif;
            @media (max-width:768px) {
              font-size: 30px;
            }
          }
        }
        .top_content,
        .bottom_content {
          display: flex;
          align-items: flex-start;
          @media (max-width:768px) {
            flex-direction: column;
            align-items: center;
          }
          .graph_img_container {
            flex: 1;
            .graph_img {
              @media (max-width:768px) {
                width: auto;
                height: auto;
              }
              max-width: 541px;
              height: 334px;
              overflow: hidden;
              
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            .graph_img.setup{
              @media (max-width:768px) {
                width: auto;
                height: auto;
              }
              width: 488px;
              height: 288px;
              overflow: hidden;
              @media (max-width:992px) {
                max-width: 488px;
                width: auto;
                }

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                @media (max-width:992px) {
                 object-fit : contain ;
                }
              }
            }
          }
          .graph_desc {
            width: 476px;
            @media (max-width:768px) {
                width: auto;
            }
            @media (max-width:992px) {
                 flex: 1;
              }
            h3 {
              font-weight: 400;
              font-size: 33px;
              font-family: 'Merriweather Sans', sans-serif;
              margin-bottom: 24px;
              @media (max-width:768px) {
              margin-top: 25px ;
              font-size: 25px;
            }
            }
            p {
              font-weight: 400;
              color: #28292d;
              margin-bottom: 26px;
              @media (max-width:768px) {
              font-size: 15px;
            }
            }
            a {
              width: 167px;
              height: 54px;
              line-height: 54px;
              text-align: center;
              display: block;
              border-radius: 30px;
              outline: none;
              border: none;
              color: #ffffff;
              background: linear-gradient(95.4deg, #8212C4 9.09%, #4654F6 93.37%);
              &:hover{
                background: linear-gradient(
                95.4deg,
                #d78403 9.09%,
                #eead46 93.37%
              );
              }
              @media (max-width:768px) {
                width: 100%;
              }
            }
          }
        }
        .top_content{
          margin-bottom: 80px;
          @media (max-width:768px) {
            margin-bottom: 40px;
          }
          .graph_desc{
            max-width:476px;
          }
        }
        .bottom_content {
          @media (max-width:768px) {
            flex-direction: column-reverse;
          }
          .graph_desc {
            width: 100% !important;
            .setup_desc {
              width: 476px;
              @media (max-width:992px) {
                max-width: 476px;
                width: auto;
              }
              @media (max-width:768px) {
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
    .fourth_section {
      margin-top: 80px !important;
      .details_card {
        .details_card_content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          & > * + * {
            margin-left: 20px;
          }
          @media (max-width:1187px) {
            justify-content: space-around;
          }
          .indi_card_data {
            box-shadow: 0px 7px 24px rgba(25, 64, 187, 0.25);
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            align-items: baseline;
            padding:37px 20px 20px;
            justify-content: space-between;
            max-width: 272px;
            @media (max-width:1187px) {
              max-width: 300px;
              &:last-of-type{
                margin-left: 0;
                margin-top: 30px;
              }
            }
            @media (max-width:979px) {
              max-width: 420px;
            }
            @media (max-width:899px) {
              max-width: 360px; 
            }
            @media (max-width:779px) {
              max-width: 300px; 
            }
            @media (max-width:659px) {
              max-width: inherit;
              width : 100% ;
              &:first-of-type{
                margin-bottom: 30px;
              }
              &:nth-of-type(2){
                margin-left: 0;
              }
            }
            &:nth-of-type(3){
              @media (max-width:979px) {
                margin-left: 0;
                margin-top: 30px;
              }
              @media (max-width:955px) {
                margin-right: 20px;
              }
              @media (max-width:659px) {
                margin-right: 0;
              }
            }
            .card_img {
              width: 46px;
              height: 46px;
              overflow: hidden;
              margin:0 auto 17px;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            h4 {
              color: #ffffff;
              font-size: 20px;
              font-weight: 700;
              margin-bottom: 15px;
            }
            p {
              font-size: 14px;
              font-weight: 600;
              margin-bottom: 10px;
            }
            a {
              font-size: 16px;
              text-decoration: underline;
            }
          }
        }
      }
    }
    .fifth_section {
      margin-top: 100px !important;
    }
    .sixth_section {
      max-width: 1440px;
      margin-left:auto;
      margin-right: auto;
      position: relative;
      height: 1470px;
      margin-top: 120px !important;
      @media (max-width:768px) {
        height: 100% !important;
        padding-bottom: 40px;
      }
      @media (max-width:992px) {
            height: 1270px;
          }
      .achievement_img {
        position: absolute;
        width: 100%;
        z-index: -1;
        @media (max-width:768px) {
            height: 100%;
          }
        img {
          width: 100%;
          height: 1470px;
          @media (max-width:768px) {
            height: 100% !important;
          }
          @media (max-width:992px) {
            object-fit: cover;
            height: 1270px;
          }
        }
      }
      .achievements_detail_content {
        @media (max-width:992px) {
            padding-top: 80px !important;
          }
        h2 {
          font-size: 60px;
          font-weight: 700;
          color: #ffffff;
          max-width: 975px;
          margin: 0 auto;
          @media (max-width:992px) {
            font-size :40px ;
          }
        }
        .heading{
          margin-top: 40px !important;
        }
        .achievements_detail_top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 100px;
          max-width: 1064px;
          margin-left: auto;
          margin-right: auto;
          @media (max-width:992px) {
            margin-bottom: 40px;
          }
          @media (max-width:500px) {
            flex-direction: column;
          }
          .achievements_detail_indi {
            text-align: center;
            @media (max-width:500px) {
              margin-bottom: 30px;
            }
            .user_img {
              width: 56px;
              height: 56px;
              overflow: hidden;

              margin: 0 auto 10px;
              @media (max-width:992px) {
                width: 45px;
                height: 45px;
              }
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            p {
              font-size: 18px;
              font-weight: 600;
              max-width: 200px;
              margin: 0 auto;
            }
          }
        }
        .achievements_detail_bottom {
          display: flex;
          margin-top: 79px;
          @media (max-width:768px) {
                flex-direction: column-reverse;
                margin-top: 40px;
            }
          .achievements_details_left {
            flex: 1;
            @media (max-width:900px) {
                padding-right: 10px;
              }
              @media (max-width:768px) {
                margin-top: 40px;
            }
            .top_heading {
              display: flex;
              align-items: baseline;
              h3 {
                font-size: 40px;
                font-weight: 700;
                max-width: 451px;
                color: #ffffff;
                margin-bottom: 32px;
                @media (max-width:900px) {
                display: none;
                }
              }
              @media (max-width:900px) {
                .arrow_img{
                  display: none;
                }
              }
            }
            p {
              font-size: 26px;
              font-weight: 700;
              margin-bottom: 26px;
              opacity: 0.8;
            }
            ul {
              padding-left: 0;
              list-style: none;
              li {
                position: relative;
                padding-bottom: 44px;
                font-size: 18px;
                opacity: 0.8;
                padding-left: 33px;
                &:last-child{
                padding-bottom: 0;
                }
                &::before{
                  content: '';
                  position: absolute;
                  top: 4px;
                  left: 0;
                  width: 20px;
                  height: 20px;
                  background: url(${check}) no-repeat;
                }
              }
            }
          }
          .achievements_contact_form {
            flex: 1;
            @media (max-width:768px) {
              margin-top: 20px;
            }
            .reviewed_form {
              width: 100%;
              max-width: inherit;
              height: 100%;
              box-shadow: none;
              background: #ffffff;
              border-top: none;
              border-radius: 54px;
              padding: 50px 45px;
              @media (max-width:340px)  {
                border-radius: 20px;
                padding: 16px;
              }
              .wpcf7,
              form {
                /* width: 100%;
                height: 100%; */
                .form.review {
                  .your-name,
                  .your-website,.your-email,
                  .textarea-message {
                    background: #ffffff;
                    border: 1px solid #adb0bc;
                    border-radius: 4px;
                    padding: 14px;
                    width: 100%;
                    font-size: 14px;
                    margin-bottom: 18px;
                  }
                  .textarea-message {
                    height: 135px;
                    resize: none;
                  }
                  .sub-review {
                    background: linear-gradient(
                      95.4deg,
                      #d78403 9.09%,
                      #eead46 93.37%
                    );
                    border-radius: 30px;
                    height: 54px;
                    outline: none;
                    border: none;
                    width: 100%;
                    font-size: 16px;
                    color:var(--white);
                      &:hover{
                        background: linear-gradient(178.56deg, #a65dd6 7.7%, #6C1AD3 76.04%);
                      }
                  }
                }
              }
            }
          }
        }
      }
    }
    .seventh_section {
      position: relative;
      &::before {
        content: " ";
        height: 246px;
        width: 100%;
        top: -26%;
        background: #ffffff;
        position: absolute;
        border-radius: 100% 100% 0% 0%;
        @media (max-width:1049px) {
         top : -17%;
        }
        @media (max-width:768px) {
             display: none;
          }
      }
      .reason_to_join {
        margin-top: 0;
        margin-bottom: 65px;
        @media (max-width:768px) {
          margin-top: 100px;
        }
        .joining_benefits {
          .benefit_container {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            flex-wrap: wrap;
            & > * + *{
              margin-left: 45px;
            }
            @media (max-width:1094px) {
             justify-content: space-around;
            }
            .benefit_content {
              margin-bottom: 45px;
              @media (min-width: 481px) {
              &:first-of-type, &:nth-of-type(5), &:last-of-type{
                animation-name: test1;
                animation-duration: 3s;
                animation-iteration-count: infinite;
                animation-delay: 2s;
                animation-direction: alternate;
                animation-timing-function: ease-in;
                animation-fill-mode: forwards;
              }
              &:nth-of-type(2), &:nth-of-type(6){
                animation-name: test2;
                animation-duration: 3s;
                animation-iteration-count: infinite;
                animation-delay: 2s;
                animation-direction: alternate;
                animation-timing-function: ease-in;
                animation-fill-mode: forwards;
              }
              &:nth-of-type(3), &:nth-of-type(5), &:nth-of-type(7){
                animation-name: test3;
                animation-duration: 3s;
                animation-iteration-count: infinite;
                animation-delay: 2s;
                animation-direction: alternate;
                animation-timing-function: ease-in;
                animation-fill-mode: forwards;
              }
              &:nth-child(4), &:nth-child(8){
                  animation-name: test4;
                  animation-duration: 3s;
                  animation-iteration-count: infinite;
                  animation-delay: 2s;
                  animation-direction: alternate;
                  animation-timing-function: ease-in;
                  animation-fill-mode: forwards;
              }
            }
              @keyframes test1 {
                  0% {
                      transform: translateY(-20px);
                  }
                  100% {
                      transform: translateY(0px);
                  }
              }
              @keyframes test2 {
                  0% {
                      transform: translateY(15px);
                  }
                  100% {
                      transform: translateY(0px);
                  }
                }
              @keyframes test3 {
                  0% {
                      transform: translateY(-24px);
                  }
                  100% {
                      transform: translateY(0px);
                  }
              }

              @keyframes test4 {
                  0% {
                      transform: translateY(27px);
                  }
                  100% {
                      transform: translateY(0px);
                  }
              }

              .img_container {
                height: 183px;
                width: 183px;
                line-height: 12;
                border-radius: 50%;
                box-shadow: 0px 3px 26px rgba(25, 64, 187, 0.11);
                text-align: center;
                @media (max-width:480px) {
                  height: 127px;
                  width: 127px;
                  line-height: 8;
                }
                @media (max-width:480px) {
                  img{
                    width: 97px;
                  }
                }
              }
              &:nth-child(2){
                  .img_container {
                  height: 127px;
                  width: 127px;
                  line-height: 8;
                  @media (max-width:768px) {
                    height: 191px;
                    width: 183px;
                    line-height: 12;
                  }
                  @media (max-width:480px) {
                  height: 127px;
                  width: 127px;
                  line-height: 8;
                }
                }
              }
              &:nth-child(4), &:nth-child(6), &:nth-child(8){
                  .img_container {
                  height: 154px;
                  width: 154px;
                  line-height: 9;
                  @media (max-width:768px) {
                    height: 191px;
                    width: 183px;
                    line-height: 12;
                  }
                  @media (max-width:480px) {
                  height: 127px;
                  width: 127px;
                  line-height: 8;
                }
                }
              }
              &:nth-child(6), &:nth-child(8){
                .img_container {
                  margin-bottom: 4rem;
                  @media (max-width:768px) {
                    margin-bottom: 0;
                  }
                }
              }
               &:nth-child(8){
                .img_container {
                  img{
                    @media (max-width:768px) {
                      object-fit: none;
                    }
                  }
                }
              }
              &:nth-of-type(1), &:nth-of-type(4), &:nth-of-type(7){
                  @media (max-width:866px) { 
                   margin-left: 0;
                  }
                  @media (max-width:600px) { 
                    margin-left: 10px;
                  }
              }
              @media (max-width:600px) { 
                  margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
`;
const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  max-width: 787px;
  margin: 0 auto 65px;
    @media (max-width:610px) {
      font-size:45px;
    }
    @media (max-width:457px) {
      font-size:40px ;
      margin-bottom: 12px;
    }
    @media (max-width:639px) {   
      .main_name{
        display: none;
      }
      .typing{
      display: inline-block;
      height: 82px;
      span{
        display: inline-block;
      }
      }
    }
    @media (min-width:640px) {
      .typing{
        display: none;
      }
    }
   
  span{
    text-transform: uppercase;
    font-size: 60px;
    font-weight: 600;
    font-family: 'Manrope', sans-serif;
    @media (max-width:580px) {
      font-size:40px ;
    }
    @media (max-width:400px) {
      font-size:30px ;
    }
  }
`;

const Reviewslidercontainer = styled.div`
  .slick-slide *:focus {
    outline: none;
  }
  .slick-slide{
    & > div {
      max-width: 558px;
      margin: 0 auto;
    }
  }
  .slick-slider {
    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
     display: none;
      &::before {
        display: none;
      }
    }
    .slick-dots{
      bottom: -50px;
      li{
        button:before{
          font-size: 50px;
          color: #4654F6;
        }
      }
    }
  }
`;

