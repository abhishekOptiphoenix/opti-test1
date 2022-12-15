import React from 'react'
import { styled } from 'frontity'
import mapContent from "../../../../../assets/aboutus/mapContactBg.png"
import mapContentMobile from "../../../../../assets/aboutus/mobileMapContactBg.png"
import ReviewedForm from './ReviewedForm'
import { LocationIcon, CallIcon } from '../../../../../assets/icons'

const ContactMap = () => {
  return (
    <Mapcontact>
    <div className='mapContent__container'>
        <div className="img__container">
            <img className='desktop__contact' src={mapContent} alt="bg" />
            <img className='mobile__contact' src={mapContentMobile} alt="bg" />
        </div>
            <div className="mapContent__content">
                <div className="mapContent__content__inner">
                <div className="mobile__text">
                    <div className="location">
                        <LocationIcon />
                        <p>OptiPhoenix Xperts Pvt. Ltd . B1002, Westend Mall, Janakpuri District Center, Janakpuri New Delhi, Delhi 110058</p>
                    </div>
                    <div className="call">
                        <CallIcon />
                        <p>+91 - 9999299820</p>
                    </div>
                </div>
                <div className="left__section">
                    <div className="desktop__text">
                    <div className="location">
                        <LocationIcon />
                        <p>OptiPhoenix Xperts Pvt. Ltd . B1002, Westend Mall, Janakpuri District Center, Janakpuri New Delhi, Delhi 110058</p>
                    </div>
                    <div className="call">
                        <CallIcon />
                        <p>+91 - 9999299820</p>
                    </div>
                    </div>
                    <div className="common_reviewed_form">
                    <ReviewedForm />
                    </div>
                </div>
                <div className="right__section">
                <div className="location_map">
                    <div className="mapouter"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0027092701257!2d77.0796503!3d28.6296809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bf7f6ae361%3A0x88c15da012435142!2sWestend%20Mall%20Janakpuri%20West%20Delhi!5e0!3m2!1sen!2sin!4v1655267645527!5m2!1sen!2sin" height="709px" loading="lazy"></iframe></div>
                </div>
                </div>
            </div>
            </div>
    </div>
    </Mapcontact>  
  )
}

export default ContactMap

const Mapcontact = styled.div`
    .mapContent__container{
        position: relative;
        .img__container{
            position: absolute;
            z-index: -1;
            width: 100%;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            img{
                width: 100%;
                height: 916px;
            }
            @media (max-width:768px) {
                .desktop__contact{
                    display: none;
                }
                .mobile__contact{
                    height: inherit; 
                    }
                }
            @media (min-width:769px) {
                .desktop__contact{
                    display: block;
                }
                .mobile__contact{
                    display: none;
                }
            }
        }
        .mapContent__content{
            max-width: 1240px;
            padding: 126px 20px 75px;
            margin: 0 auto;
            .mapContent__content__inner{
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                    @media (max-width: 768px) {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .mobile__text{
                        @media (max-width: 1199px) {
                            svg{
                                width: 22px;
                            }
                        }   
                    }
                    .mobile__text{
                        @media (min-width: 769px) {
                            display: none;
                        }   
                    }
                    .desktop__text{
                        @media (max-width: 768px) {
                            display: none;
                        }  
                    }
                    .location, .call{
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                    margin-bottom: 49px;
                    p{
                        line-height: 1.2;
                        max-width: 400px;
                        font-weight: 500;
                        font-size: 24px;
                        flex: 1;
                        margin-left: 17px;
                        margin-bottom: 0;
                        color: #ffffff;
                        a{
                            color: #ffffff;
                        }
                        @media (max-width:1199px) {
                            font-size: 18px;
                        }
                    }
                }
                .left__section{
                @media (max-width:1199px) {
                        padding-right: 10px;
                        flex: 1;
                    }
                @media (max-width:768px) {
                        width: 100%;
                        order: 3;
                    }
                .common_reviewed_form{
                    @media (max-width:1199px) {
                        margin-left: 0;
                    }
                    .reviewed_form{
                        max-width: 497px;
                        height: auto;
                        margin-top: 20px;
                        background-color: #ffffff;
                        padding: 38px;
                        border-radius: 54px;
                        @media (max-width:1199px) {
                            margin: 0;
                            width: auto;
                        }
                        @media (max-width:768px) {
                           max-width: inherit;
                        }
                        @media (max-width:400px) {
                            padding: 26px;
                            border-radius: 20px;
                        }
                        .screen-reader-response{
                            display: none;
                        }
                        .your-name, .your-email, .your-website {
                            height: 41px;
                            background: #ffffff;
                            border: 1px solid #ADB0BC;
                            border-radius: 4px;
                            width: 100%;
                            padding: 11px;
                            font-size: 14px;
                            margin-bottom: 13px;
                         }
                        .textarea-message {
                            background: #ffffff;
                            border: 1px solid #ADB0BC;
                            border-radius: 4px;
                            padding: 11px;
                            width: 100%;
                            font-size: 14px;
                            margin-bottom: 13px;
                        }
                        .textarea-message {
                            height: 104px;
                            resize: none;
                        }
                        .sub-review {
                            background: linear-gradient(
                            95.4deg,
                            #d78403 9.09%,
                            #eead46 93.37%
                            );
                            border-radius: 30px;
                            height: 41px;
                            outline: none;
                            border: none;
                            width: 100%;
                            font-size: 16px;
                            color:var(--white);
                            &:hover{
                                background: linear-gradient(
                                    180deg,
                                    rgba(126, 0, 198, 1) 13%,
                                    rgba(87, 52, 240, 1) 82%
                                    );
                                }
                        }
                    }
                }
            }
            .right__section{
                flex: 1;
                @media (max-width:768px) {
                    width: 100%;
                }
                .location_map{
                    text-align: center;
                    iframe{
                        filter: drop-shadow(10px 10px 8px rgba(0, 0, 0, 0.25));
                        border: none;
                        max-width: 602px;
                        border-radius: 30px;
                        width: 100%;
                        margin-bottom: -5px;
                        #mapDiv{
                            border-radius: 30px;
                        }
                        @media (max-width:768px) {
                                max-width: inherit;
                                height: 393px;
                                margin-bottom: 40px;
                            }
                        }
                    }
                }
            }
        }
    }
`