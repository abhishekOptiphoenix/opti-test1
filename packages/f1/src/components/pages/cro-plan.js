import React, {useState} from 'react';
import { Link as ScrollLink } from 'react-scroll'
import { connect, styled } from "frontity";
import Link from "../link";
import croBg from "../../../../../assets/cro/croBg.png";
import croMobileBg from "../../../../../assets/cro/croMobileBg.png"
import talentBg from "../../../../../assets/cro/talentBg.png";
import mobileTalentBg from "../../../../../assets/cro/talentMobileBg.png";
import successBg from "../../../../../assets/cro/successBg.png"
import growBg from "../../../../../assets/cro/growBg.png"
import analyze from "../../../../../assets/cro/Analayzing.png"
import report from "../../../../../assets/cro/report.png"
import exported from "../../../../../assets/cro/export.png"
import statused from "../../../../../assets/cro/status.png"
import exportStatused from "../../../../../assets/cro/exportStats.png"
import dataReport from "../../../../../assets/cro/data-report.png"
import tajImage from "../../../../../assets/cro/taj1.png"

import firstline from "../../../../../assets/cro/firstline.png"
import secline from "../../../../../assets/cro/secline.png"
import thirdline from "../../../../../assets/cro/thirdline.png"
import forthline from "../../../../../assets/cro/forthline.png"
import fifthline from "../../../../../assets/cro/fifthline.png"
import magnify from "../../../../../assets/cro/mag.png"
import magnifyMobile from "../../../../../assets/cro/magMobile.png"
import lambda from "../../../../../assets/cro/lambda.png"
import advancement from "../../../../../assets/cro/advancement.png"
import workspeed from "../../../../../assets/cro/workspeed.png"
import croAdobe from "../../../../../assets/cro/croAdobe.png"
import croGoogle from "../../../../../assets/cro/croGoogle.png"
import croHot from "../../../../../assets/cro/croHot.png"
import croOpti from "../../../../../assets/cro/croOpti.png"
import taj from "../../../../../assets/cro/taj.png";
import infidel from "../../../../../assets/homepage/infidel.png";
import bucher from "../../../../../assets/homepage/bucher.png";
import jabra from "../../../../../assets/cro/croJabra.png";
import penEgg from "../../../../../assets/cro/pngegg.png"
import penEgg1 from "../../../../../assets/cro/pngegg1.png"
import penEgg2 from "../../../../../assets/cro/pngegg2.png"
import penEgg3 from "../../../../../assets/cro/pngegg3.png"
import { talents, successStories } from '../data';
import { ReadMore } from '../../../../../assets/icons';
import ContactForm from '../contactForm';


const CroPlan = () => {
  return (
    <Crocontainer>
       <div className="croImg_container">
        <img className="cro__desktop" src={croBg} alt="Cro background" loading='lazy' />
        <img className="cro__mobile" src={croMobileBg} alt="mobile background" loading='lazy' />
      </div>
      <div className="main__cro__container">
        <div className="first__section__cro">
          <div className="first__section__cro__top">
            <div className="left_content">
              <div className="heading">
                <span> Best in Class </span><br/> Conversion Rate Optimization and Experimentation
              </div>
              <div className="cta">
                <ScrollLink activeClass="active" to="cro__process" spy={true} smooth={true} offset={0} duration={1500}>
                  <p>Learn about CRO</p>
                </ScrollLink>
              </div>
              <div className="details">
                <div className="details__inner">
                <div className="work">
                  <img src={workspeed} alt="work" />
                  <span>High Velocity Program</span>
                </div>
                <div className="lambda">
                  <img src={lambda} alt="" />
                </div>
                <div className="advance">
                  <img src={advancement} alt="advancement" />
                  <span>Advanced CRO Maturity</span>
                </div>
                </div>
                <div className="mobile__magnify">
                  <img src={magnifyMobile} alt="magnify" />
                </div>
              </div>
            </div>
            <div className="right_content">
              <img src={magnify} alt="magnified" />
            </div>
          </div>
          <div className="first__section__cro__bottom">
            <div className="croGoogle common">
            <img src={croGoogle} alt="google" />
            </div>
            <div className="croAdobe common">
            <img src={croAdobe} alt="adobe" />
            </div>
            <div className="croOpti common">
            <img src={croOpti} alt="optimizely" />
            </div>
            <div className="croHot common">
            <img src={croHot} alt="hotjar" />
            </div>
          </div>
        </div>
        <div className="second__section__cro">
        <div className="second__section__cro__inner">
          <div className="cta mobile">
          <ScrollLink activeClass="active" to="cro__form" spy={true} smooth={true} offset={0} duration={1500}>
            <p>Contact Us</p>
          </ScrollLink>
          </div>
          <div className="left_content">
            <div className="taj">
              <img src={taj} alt="taj" />
            </div>
            <div className="jabra">
              <img src={jabra} alt="jabra" />
            </div>
            <div className="infidel">
              <img src={infidel} alt="infidel" />
            </div>
            <div className="butcher">
              <img src={bucher} alt="butcher" />
            </div>
            <p className="manyMore">and Many More...</p>
          </div>
          <div className="right_content">
            <div className="heading">
            Proven Track of Developing Businesses & Brands 
            </div>
            <p className='para'>Over the last 7 years Optiphoenix has helped brands like Taj, Jabra, ButcherBox, PiqueTea etc to implement end-to-end Conversion Rate Optimization and massively improved customer metrics like Revenue, Conversion, Engagement.</p>
            <div className="cta">
            <ScrollLink activeClass="active" to="cro__form" spy={true} smooth={true} offset={0} duration={1500}>
                <p>Contact Us</p>
              </ScrollLink>
            </div>
          </div>
        </div>
        </div>
        <div className="third__section__cro">
          <div className="img__container">
              <img className='cro__desktop' src={talentBg} alt="bg" />
              <img className='cro__mobile' src={mobileTalentBg} alt="background" />
          </div>
          <div className="card__content">
            <div className="main__heading">
            Know your CRO Experts
            </div>
            <div className="card__content__inner">
            {talents.map((talent)=>(
              <div className="card__content__indi" key={talent.id} style={{background: `${talent.background}` }}>
                <div className="heading">
                  {talent.heading}
                </div>
                <div className="para">
                  {talent.para}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
        <div className="forth__section__cro">
          <div className="growImg_container">
            <img src={growBg} alt="grow background" />
          </div>
          <div className="grow__content">
            <div className="heading">
            Grow your business with perfect blend of Team
            </div>
            <div className="touchCta">
            <ScrollLink activeClass="active" to="cro__form" spy={true} smooth={true} offset={0} duration={500}><p>Get in Touch</p></ScrollLink>
            </div>
          </div>
        </div>
        <div className="fifth__section__cro" id="cro__process">
          <div className="fifth__section__cro__inner">
            <div className="heading">
              A Structured Process for your Business Growth
            </div>
            <div className="structure__content">
              <div className="first__content">
                <div className="img1">
                  <img src={analyze} alt="analyzing" />
                </div>
                <div className="content">
                  <span>1 <img src={firstline} alt="line" /></span>
                  <div className="content__inner">
                  <div className="common__heading">
                  Analyze Existing Data
                  </div>
                  <div className="list__content">
                    <ul>
                      <li>Fix any tracking issues if the data is not reliable.</li>
                      <li>Establish a Baseline</li>
                    </ul>
                  </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="second__content">
              <hr />
                <div className="content">
                  <span>2 <img src={secline} alt="line" /></span>
                  <div className="content__inner">
                  <div className="common__heading">
                  Research for Improvement
                  </div>
                  <div className="list__content">
                    <ul>
                     <li>Survey for visitors</li>
                     <li>Survey for existing customers</li>
                     <li>Heatmap</li>
                     <li>Session Recordings</li>
                     <li>User Testing</li>
                     <li>Google Analytics</li>
                    </ul>
                  </div>
                  </div>
                </div>
                <div className="img2">
                  <img src={report} alt="report" />
                </div>
              </div>
              <div className="third__content">
                <div className="img3">
                  <img src={exported} alt="export data" />
                </div>
                <div className="content">
                  <span>3 <img src={thirdline} alt="line" /></span>
                  <div className="content__inner">
                  <div className="common__heading">
                  Data-backed Hypothesis
                  </div>
                  <div className="list__content">
                    <ul>
                      <li>Identify problem areas</li>
                      <li>Data-backed hypothesis to optimize the problem areas.</li>
                    </ul>
                  </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="forth__content">
              <hr />
                <div className="content">
                  <span>4 <img src={forthline} alt="line" /></span>
                  <div className="content__inner">
                  <div className="common__heading">
                  Testing Elements
                  </div>
                  <div className="list__content">
                    <ul>
                     <li>High impact areas need to be tackled first.</li>
                     <li>Improvement in high impact areas brings high increase in revenue.</li>
                    </ul>
                  </div>
                  </div>
                </div>
                <div className="img4">
                  <img src={statused} alt="status" />
                </div>
              </div>
              <div className="fifth__content">
                <div className="img5">
                  <img src={exportStatused} alt="export status" />
                </div>
                <div className="content">
                  <span>5 <img src={fifthline} alt="" /></span>
                  <div className="content__inner">
                  <div className="common__heading">
                  AB Testing
                  </div>
                  <div className="list__content">
                    <ul>
                      <li>Setting the Test correctly is very important, if you mess any step your results will be skewed</li>
                    </ul>
                  </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="sixth__content">
                <div className="content">
                  <span>6</span>
                  <div className="content__inner">
                  <div className="common__heading">
                  Pursue research and analysis for more insights and opportunities to optimize...
                  </div>
                  <div className="list__content">
                    <ul>
                     <li style={{maxWidth:"293px"}}>Insights can be discovered from - Test Results, data sources from research, new developments happening in the backend</li>
                     <li>Never stop finding more insights</li>
                    </ul>
                  </div>
                  </div>
                </div>
                <div className="img6">
                  <img src={dataReport} alt="data report" />
                </div>
              </div>
              <ScrollLink activeClass="active" to="cro__form" spy={true} smooth={true} offset={0} duration={500}>
              <div className="cta">
                <div>Start your Optimization Journey</div>
              </div>
              </ScrollLink>
            </div>
          </div>
          <img className="left-corner" src={penEgg} alt="penegg"/>
          <img className="top-corner" src={penEgg3} alt="penegg"/>
          <img className="left-middle" src={penEgg1} alt="penegg"/>
          <img className="right-middle" src={penEgg2} alt="penegg"/>
        </div>
        <div className="sixth__section__cro">
          <div className="img__container">
                <img src={successBg} alt="success background" />
            </div>
          <div className="sixth__section__cro__inner">
            <div className="heading">
              Success Stories
            </div>
            <div className="top__content__container__outer">
              {successStories.map((successStorie)=>(
           <div className={`top__content__container__indi ${successStorie.class ? successStorie.class : ""}`}>
            <div className="top__content__container">
              <div className="top__content__container__inner" key={successStorie.id}>
              <div className="jabracent">
              <img src={successStorie.perc} alt="jabra percentage" />
              </div>
            <div className="top__content card">
              <div className="left">
                <div className="sqaureBg"></div>
                <div className="left__img__container">
                <img src={successStorie.img} alt="jabra" />
                </div>
              </div>
              <div className="right">
                <div className="card__heading">
                 <div className='desktop'>{successStorie.heading}</div>
                  <div className='tablet723'>{successStorie.heading.slice(0, 42)}...</div>
                  <div className='mobile723'>{successStorie.heading.slice(0, 27)}...</div>
                </div>
                <div className="card__para">
                <div className='desktop'>{successStorie.para}</div>
                <div className='firstTablet723'>{successStorie.para.slice(0, 73)}...</div>
                  <div className='mobile723'>{successStorie.para.slice(0, 59)}...</div>
                </div>
                <div className="card__cta">
                   <Link link={successStorie.link}>Learn More<ReadMore /></Link>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
            ))
            }
            </div>
            <div className="view_cta">
              <Link link="/category/case-study/"><p>View more</p></Link>
            </div>
          </div>
        </div>
        <div className="seventh__section__cro" id="cro__form">
          <div className="contact_heading">
            <h2>Get Free Website Consultation</h2>
            <p>Leverage CRO to Strategize and Execute the Optimization Program </p>
          </div>
            <ContactForm image={tajImage} description="OptiPhoenix has been instrumental in our digital channel growth. With weekly insights and regular AB Tests we are always updating our website for an enriching customer experience as well as higher conversions. If you're looking for a trustworthy partner within the CRO space, OptiPhoenix is the one you can bank upon." author="Vishal Singhal" designation="Assistant Manager - Brands & Marketing" /> 
        </div>
      </div>
    </Crocontainer>
  )
}

export default CroPlan;

const Crocontainer = styled.div`
.section{
  max-width: 1240px;
  padding-left:20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
}
.croImg_container{

  position: absolute;
  z-index: -1;
  width: 100%;
  top: 0;
  max-width: 1440px;
  margin:0 auto;
  left: 0;
  right: 0;
  img {
    width: 100%;
    height: 628px;
    object-fit: cover;
    @media (max-width: 870px) {
      height: 678px;
    }
    @media (max-width:480px) {
      object-fit: inherit;
    }
  }
  .cro__desktop{
    @media (max-width: 480px) {
        display: none;
    }
  }
  .cro__mobile{
    @media (min-width: 481px) {
        display: none;
    }
    @media (max-width: 480px) {
      height: 624px;
    }
    @media (max-width: 340px) {
      height: 650px;
    }
  }
} 
`