import React from "react";
import { connect, styled } from "frontity";
import {Link as ScrollLink } from "react-scroll"
import rightMobile from "../../../../../assets/hero-images/abtest-right.png";
import mobileHeroRight from "../../../../../assets/hero-images/mobileHeroRight.png";
import qualityIcon from "../../../../../assets/hero-images/qualityIcon.png";
import profitIcon from "../../../../../assets/hero-images/profitIcon.png";
import wfunnel from "../../../../../assets/hero-images/wfunnel.png";
import henkanPartners from "../../../../../assets/hero-images/henkanPartners.png";
import kameleon from "../../../../../assets/hero-images/kameleon.png";
import jellyfish from "../../../../../assets/hero-images/jellyfish.png";
import lambda from "../../../../../assets/cro/lambda.png";
import disc from "../../../../../assets/hero-images/disc-image.png";
import experiment from "../../../../../assets/hero-images/experiment.png";
import bgStay from "../../../../../assets/hero-images/bg-stay.png";
import stayWith from "../../../../../assets/hero-images/stay-with.png";
import folder from "../../../../../assets/hero-images/folder.png";
import idCard from "../../../../../assets/hero-images/id.png";
import qa from "../../../../../assets/hero-images/qa.png";
import live from "../../../../../assets/hero-images/live.png";
import AbTestBg from "../../../../../assets/hero-images/bg.png";
import accor from "../../../../../assets/hero-images/accor.png";
import { technologyData } from "../data";
import { optiImages } from "../data";
import ContactForm from "../contactForm";

const AbTest = () => {
  return (
    <Container className="ab_test_container">
       <div className="abtestImg_container">
        <img src={AbTestBg} loading="lazy" alt="about background" className="abdesktop_image" />
      </div>
      <div className="hero_section_content">
        <div className="top__main__content">
        <div className="left_content_container">
          <div className="top__content">
          <div className="left_heading">
            <h1>#1 AB TEST</h1>
            <h1 style={{color:"#f1843b"}}>Development Agency</h1>
          </div>
          <div className="cta_buttons">
            <div className="test_button">
          <ScrollLink activeClass="active" to="abtest__form" spy={true} smooth={true} offset={0} duration={1500}>
              <button>CODE MY AB TEST</button>
          </ScrollLink>
            </div>
          </div>
          <div className="rigth_images">
            <div className="left__content">
              <div className="work">
                  <img src={profitIcon} alt="profit" />
                  <span>Cost Effective</span>
                </div>
                <div className="lambda">
                  <img src={lambda} alt="" />
                </div>
                <div className="advance">
                  <img src={qualityIcon} alt="quality" />
                  <span>Best Quality</span>
                </div>
            </div>
            <div className="right__content">
              <img src={mobileHeroRight} alt="comparison image" className="mobile__img" />
            </div>
            </div>
            </div>
          </div>
        <div className="right_content_container">
          <img src={rightMobile} alt="Mobile Test Image" className="desktop__image" />
        </div>
        </div>
        <div className="abTest_tools_img top">
            {optiImages.map((opti) => (
              <div key={opti.id} className="opti_individual">
                <img src={opti.img} alt={opti.id} />
              </div>
            ))}
          </div>
      </div>
      <div className="main_section_abTesting section_custom">
        <div className="abTesting_content">
          <div className="left_img">
              <div className="kameleon img">
                  <img src={kameleon} alt="kameleon" />
                </div>
                <div className="jellyfish img">
                  <img src={jellyfish} alt="jellyfish" />
                </div>
                <div className="henkanPartners img">
                  <img src={henkanPartners} alt="henkanPartners" />
                </div>
                <div className="wfunnel img">
                  <img src={wfunnel} alt="wfunnel" />
                </div>
            <p className="manyMore">and Many More...</p>
            <ScrollLink activeClass="active" to="abtest__form" spy={true} smooth={true} offset={0} duration={1500}>
            <div className="cta_inTouch">
              <button>Get In Touch</button>
            </div>
            </ScrollLink>
          </div>
          <div className="right_content">
            <div className="ab_test_heading">
              <h1>
                Increase your <span className="custom_color ab">ab</span> <span className="custom_color">testing</span>
                <span className="speed_color"> speed </span> just like our partners did
              </h1>
            </div>
            <ScrollLink activeClass="active" to="abtest__form" spy={true} smooth={true} offset={0} duration={1500}>
            <div className="cta_inTouch">
              <button>Get In Touch</button>
            </div>
            </ScrollLink>
          </div>
        </div>
      </div>
      <div
        className="main_section_experiment section_fullWidth"
        style={{ backgroundImage: `url(${experiment})` }}
      >
        <div className="main_section_experiment_content">
          <h4>We Deliver Experiments</h4>
          <p>
            Our team comprises of software engineers who have developed AB
            Testing tools. You can trust us to Code and Setup your AB Tests, as
            we know our way around all the popular AB Testing tools out there in
            the market.
          </p>
          <div className="cta_experiment_btn">
            <div className="test_button">
            <ScrollLink activeClass="active" to="abtest__form" spy={true} smooth={true} offset={0} duration={500}>
              <button>Code my AB Test</button>
            </ScrollLink>
            </div>
            <div className="getin_btn">
            <ScrollLink activeClass="active" to="abtest__form" spy={true} smooth={true} offset={0} duration={500}>
              <button>Get In Touch</button>
            </ScrollLink>
            </div>
          </div>
        </div>
      </div>
      <div className="main_section_works">
        <div className="works_left">
          <div className="heading">
            <h4>How We Work</h4>
          </div>
          <div className="works_main">
            <div className="works_main_content">
              <div className="first_content content_common">
                <div className="folder_img left_common">
                  <img src={folder} alt="folder" />
                </div>

                <div className="share_requirements right_common">
                  <div className="num">
                    <p style={{ padding: "3px 10px"}}>1</p>
                  </div>
                  <b>
                    <span>1.</span> Share Your Requirements
                  </b>
                  <p className="works_brief">
                    Brief us your requirement. Whatever way works for you is
                    good for us. Our Team is proficient in using project
                    management tools.
                  </p>
                </div>
              </div>

              <div className="second_content content_common">
                <div className="getQuote_img right_common">
                  <img src={idCard} alt="" />
                </div>

                <div className="get_quote left_common">
                  <div className="num">
                    <p>2</p>
                  </div>
                  <b>
                    <span>2.</span> Get Quote and Approval
                  </b>
                  <p className="works_brief">
                    We do a quick feasibility check of the requirement and send
                    you a smart quote the same
                    day. The quote is a fixed price (you don't pay
                    anything additional).
                  </p>
                </div>
              </div>
              <div className="third_content content_common">
                <div className="qa_img left_common">
                  <img src={qa} alt="" />
                </div>

                <div className="qa_tool right_common">
                  <div className="num">
                    <p>3</p>
                  </div>
                  <b>
                    <span>3.</span> We Code, QA and Setup AB Test in Tool
                  </b>
                  <p className="works_brief">
                    Sit back and relax. Our self managed team codes, QA, and
                    setup the experiment. We do the entire project management
                    proactively and deliver the preview links before time.
                  </p>
                </div>
              </div>

              <div className="fourth_content content_common">
                <div className="goLive_img right_common">
                  <img src={live} alt="" />
                </div>

                <div className="go_live left_common">
                  <div className="num">
                    <p>4</p>
                  </div>
                  <b>
                    <span>4.</span> Approve Experiment and Go Live
                  </b>
                  <p className="works_brief">
                    Once the UAT team gives a final go ahead, we launch the
                    experiment. If you find any issues with the campaign or
                    metrics, our team is quick to act and resolve any issues
                    within minutes.
                  </p>
                </div>
              </div>
            </div>
            <div className="soundGreat cta_inTouch">
            <ScrollLink activeClass="active" to="abtest__form" spy={true} smooth={true} offset={0} duration={500}>
              <button>Sound's great. Let's get Started</button>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="technology_right">
          <div className="technology_right_content">
            {technologyData.map((tech) => (
              <div className="technology_right_content_wrapper" key={tech.id}>
                <h5>{tech.heading}</h5>
                <div className="technology_image">
                  <img src={tech.img} alt={tech.heading} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="main_section_helpYou">
              <h1>Signup with Optiphoenix if</h1>
          <div className="bottom_main_content__outer">
            <div className="bottom_main_content">
              <div className="left__list">
                <ul className="left" style={{ listStyleImage: `url(${disc})` }}>
                  <li style={{width: "297px"}}>
                  You are a CRO Agency without a dev team.
                  </li>
                  <li>
                  You are a CRO Agency with a dedicated dev team but need <br/> a dev backup from time to time. Our Devs easily blend into different processes.
                  </li>
                  </ul>
              </div>
              <div className="right__list">
                  <ul style={{ listStyleImage: `url(${disc})` }}>
                  <li style={{maxWidth: "466px"}}>
                  You are a standalone Start Optimizer planning to provide an end to end CRO services. 
                  </li>
                  <li style={{maxWidth: "404px"}}>
                  A firm which has great ideas to test and is looking for the right devs for the implementation.
                  </li>
                </ul>
              </div>
         </div>
         </div>
        </div>
      <div
        className="main_stay_with section_fullWidth"
        style={{ backgroundImage: `url(${bgStay})` }}
      >
        <div className="main_stay_with_content">
          <div className="main_stay_with_content_left">
            <h4 style={{color:"#f1843b"}}>We stay with you</h4>
            <h4>till the end</h4>
            <p>
              A lot of well hypothesized AB Tests fail because of bad QA
              processes, after poor campaign setup and inaccurate tracking.
            </p>
            <p>
              Our well defined Development and QA processes for coding AB Tests
              make sure that your experiment works correctly. We guarantee that
              the tests are coded to your satisfaction, and also ensure that you
              get the right results.
            </p>
          </div>
          <div className="main_stay_with_content_right">
            <img src={stayWith} alt="team" />
          </div>
        </div>
      </div>
      <div className="homepage_contact_form" id="abtest__form">
      <div className="contact_heading">
        <h2>Get in Touch</h2>
        <p>Share your development needs with us and we will connect with a customised solution.</p>
      </div>
       <ContactForm image={accor} description="Everybody at Accor is amazed by your work and what you have accomplished in such a short period of time. We deeply value our partnership with Optiphoenix and appreciate the quality of your work" author="Alexandre Suon Perhirin" designation="Head of Experimentation" />
      </div>
    </Container>
  );
};

export default connect(AbTest);

const Container = styled.div`
  .abtestImg_container{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    right: 0;
    img{
      width: 100%;
      height: 700px;
      @media (max-width: 992px) {
          height: 650px;
          object-fit: cover;
      }
      @media (max-width: 600px) {
          height: 600px;
      }
      @media (max-width: 344px) {
          height: 590px;
      }
      @media (max-width: 298px) {
          height: 700px;
      }
    }
  }
  .main_section_works {
    .works_left {
      padding-top: 65px;
      box-shadow: 20px 0px 10px -9px rgb(248 248 248);
    }
  }
  .main_section_helpYou {
    .main_section_helpYou_content {
      @media (min-width: 768px) {
        min-height: 620px;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
      }
    }
  }
  .homepage_contact_form{
    margin-top:100px;
    margin-bottom: 130px;
    .blob{
      height: 643px;
    }
    .contact_heading{
      margin:0 auto;
      text-align:center;
      font-family: "Inter", sans-serif;
      h2{
        font-weight: 400;
        font-size: 48px;
        font-family: 'Merriweather Sans', sans-serif;
        margin-bottom: 12px;
      }
      p{
        max-width: 555px;
        padding: 0 20px;
        font-family: "Inter", sans-serif;
        margin: 0 auto 69px;
        font-weight: 500;
        font-size: 20px;
      }
    }
    .form{
      border-top: 4px solid #8200c2;
      padding: 40px 30px;
      border-radius: 0;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      @media (max-width:768px) {
        padding-top: 24px;
      }
    }
  }
`;
