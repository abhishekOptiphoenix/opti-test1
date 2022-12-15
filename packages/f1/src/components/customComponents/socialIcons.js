import React, {useState} from "react";
import { styled } from "frontity";
import {FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon,  LinkedinShareButton, LinkedinIcon } from'react-share'
import copy from "../../../../../assets/socialIcons/Vector.png";

const SocialIcons = () => {
    const [copied, setCopied] = useState(false);
    function copyLink() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
      }
      // let url = window.location.href
// console.log(url);
  return (
    <Container>
      <div className="social_icon_container">
        <div className="social_icon_content">
          <div className="socialmedia_icon">
              <div className="individual_icon">
                <TwitterShareButton url="https://optiphoenix.vercel.app/jobs/react-developer/">
                  < TwitterIcon size={24} iconFillColor="white" round={true}>
                  </ TwitterIcon>
                </TwitterShareButton>
              </div>
              <div className="individual_icon">
                < LinkedinShareButton url="https://optiphoenix.vercel.app/jobs/react-developer/">
                  <LinkedinIcon size={24} iconFillColor="white" round={true}>
                  </LinkedinIcon>
                </ LinkedinShareButton>
              </div>
              <div className="individual_icon">
                <FacebookShareButton url="https://optiphoenix.vercel.app/jobs/react-developer/">
                  <FacebookIcon size={24} iconFillColor="white" round={true}>
                  </FacebookIcon>
                </FacebookShareButton>
              </div>
          </div>
          <div className="individual_icon copy" >
            <img onClick={ copyLink } src={copy} alt="copy url" />
            <p>{!copied ? "Copy url" : "Copied!"}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SocialIcons;

const Container = styled.div`
  .social_icon_container {
    .social_icon_content {
      display: flex;
      align-items: baseline;
      justify-content:flex-end;
      padding-right:  35px;
      padding-top: 27px;
      .socialmedia_icon{
          display: flex;
          align-items: center;
          .individual_icon{
              margin-right: 0.5rem;
              button{
                outline: none;
                line-height: 0 !important;
              }
          }
      }
      .individual_icon.copy{
          text-align: center;
          cursor: pointer;
          p{
              font-size: 13px;
              margin-bottom: 0;
          }
      }
    }
  }
`;
