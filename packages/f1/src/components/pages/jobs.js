import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import List from "../list";
import jobBg from "../../../../../assets/hero-images/changebg.png";
import SocialIcons from "../customComponents/socialIcons";

const Jobs = ({ state, actions, libraries }) => {
  const [copied, setCopied] = useState(false);
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
    
    // const submitBtn = document.getElementById("awsm-application-submit-btn")
    // const errorMsg = document.querySelector(".css-128et5q-SuccessNotice");
    // console.log(errorMsg)
    // submitBtn.addEventListener('click', function(event) {
    //   console.log("click")
    //   const innerHeading = document.querySelector(".awsm-job-form-inner > h2");
    //   const mainForm = document.getElementById("awsm-application-form");
    //     console.log("first")
    //     mainForm.classList.add("hide")
    //     innerHeading.classList.add("hide")
    // })

  }, []);

  function copyLink() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Jobpostcontainer>
        <div className="jobImg_container">
        <img src={jobBg} alt="background image" className="jobbg_container" loading="lazy" />
      </div>
    <Container>
      <Header>
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered.slice(0,29) }} />
        <p className="description">Job Description</p>
        <div className="down_arrow">
          <MdOutlineKeyboardArrowDown /> <span>scroll down to apply</span>
        </div>
      </Header>
      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content>          
        <div className="job_description_container">
          <SocialIcons />
        <div className="job_description">
        <Html2React html={post.content.rendered} />
        <div className="share_btn_container">
        <button onClick={ copyLink } className="share_btn">{!copied ? 'Copy job link to share with your friends' : 'Link copied'}</button>
        </div>
        </div>
          </div>  
      </Content>
    </Container>
    </Jobpostcontainer>
  ) : null;
};

export default connect(Jobs);

const Jobpostcontainer = styled.div`
 .jobImg_container{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    right: 0;
    img{
      width: 100%;
      height: 507px;
      object-fit: cover;
    }
  }
`

const Container = styled.div`
    max-width:1110px;
    width:100%;
    margin: 0 auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
`;

const Header = styled.h1`
  /* text-align:center; */
  /* margin-bottom: 3rem; */
  height: 300px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
  text-align: center;
  position: relative;
  p {
    font-size: 1.5rem;
  }
  .down_arrow{
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    svg{
      font-size: 32px;
    }
    span{
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

const Title = styled.div`
  color: var(--white);
  font-size: 70px;
  font-weight: 400;
  font-family: 'Merriweather Sans', sans-serif;
  text-transform: capitalize;
  @media (max-width:418px) {
    font-size: 38px !important;
    margin-bottom: 11px;
  }
  @media (max-width:1030px) {
      font-size: 50px;
  }
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
margin-bottom: 50px;
.job_description_container{
  box-shadow: 0px 7px 20px rgb(25 64 187 / 15%);
    background: #ffffff;
    padding-bottom: 82px;
.job_description{
  padding: 0 20px;
  max-width: 700px;
  margin: 0 auto;
    p{
      strong{
        font-weight: 600;
        font-size: 25px;
      }
    }
    .share_btn_container{
      text-align: center;
      max-width: 450px;
      margin: 20px auto 0;
      .share_btn{
        background: #FFFFFF;
        border-radius: 25px;
        outline: none;
        width: 100%;
        height: 50px;
        border: solid 1px transparent;
        background-origin: border-box;
        background-clip: content-box, border-box;
              background-image: linear-gradient(rgba(130, 18, 196, 1), rgba(70, 84, 246, 1)), linear-gradient(101deg, #8212C4
      , #4654F6);
        box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
        box-shadow: 2px 1000px 1px #fff inset;
        font-weight: 400;
        font-size: 20px;
        cursor: pointer;
        @media (max-width:480px) {
          font-size: 4vw;
        }
      }
    }
}
}
  .awsm-job-single-wrap {
    /* display: grid;
    grid-template-columns: 1.2fr 1fr;
    @media (max-width: 991.98px) { 
      grid-template-columns: 1fr;
    } */
    .awsm-job-content {
      // @media (min-width: 992px) { 
      //   padding-left:2rem;
      //   padding-right:2rem;
      // }   
      /* @media (min-width: 992px) { 
        padding-left:3.5rem;
      } */
      margin-bottom: 2.5rem;   
      .entry-content {
        margin-top: 2.5rem;
        @media (max-width: 767.98px) {
          margin-top: 0;
        }
        p {
          color: #343434;
          /* font-size:1rem;
          line-height: 1.4; */
        }
        h1, h2, h3, h4, h5, h6 {
          margin-top:2rem;
          margin-bottom:1.5rem;
          line-height:1.2;
        }
      }
      .awsm-job-specifications-container {
        margin-top:2rem;
        .awsm-job-specification-wrapper {
          .awsm-job-specification-job-category {
            .awsm-job-specification-label{
              &:before {
                content:'';
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'%3E%3Cpath d='M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z'/%3E%3C/svg%3E");
                width:14px;
                height:14px;
                position: relative;
                display: inline-block;
                margin-right: 0.5rem;
              }
            }
            .awsm-job-specification-term {
              color:var(--brand);
              margin-right: 0.5rem;
            }
            margin-bottom:0.4rem;
          }
          .awsm-job-specification-job-type {
            .awsm-job-specification-label{
              &:before {
                content:'';
                background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd'  viewBox='0 0 24 24' clip-rule='evenodd'%3E%3Cpath d='M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z'/%3E%3C/svg%3E");
                width:14px;
                height:14px;
                position: relative;
                display: inline-block;
                margin-right: 0.5rem;
              }
            }
            .awsm-job-specification-term {
              color:var(--brand);
              margin-right: 0.5rem;
            }
            margin-bottom:0.4rem;
          }
          .awsm-job-specification-job-location {
            .awsm-job-specification-label{
              &:before {
                content:'';
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z'/%3E%3C/svg%3E");
                width:14px;
                height:14px;
                position: relative;
                display: inline-block;
                margin-right: 0.5rem;
              }
            }
            .awsm-job-specification-term {
              color:var(--brand);
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
    .awsm-job-form {   
      .awsm-job-form-inner {
        color: var(--black);
        max-width: 518px;
        margin: 0 auto;
        /* @media (min-width: 992px) { 
          margin-left:3.5rem;
        }  */
        h2 {
          font-weight: 700;
          font-size: 32px;
          text-align: center;
          margin-bottom:58px;
          &.hide{display: none;}
        }
        #awsm-application-form {
          border-top: 5px solid #9500D8;
          box-shadow: 0px 0px 7px 5px rgba(141, 139, 139, 0.25);
          padding: 16px 26px 31px;
          &.hide{display:none}
          .awsm-job-form-group {
            margin-bottom: 15px;
            small{
              font-weight: 400;
              font-size: 12px;
              color: #888888;
            }
            label {
              color:var(--black);
              margin-bottom: 0.2rem;
              font-weight: 500;
              font-size: 22px;
            }
            input, select, textarea {
              padding-left:0.5rem;
              min-height: 2.8rem;
              width:100%;
              border-radius:5px;
              border-width:1px;
              border: 1px solid #E6E6E6;
            }
            input[type=checkbox] {
              width: auto;
              min-height: auto;
            }
            #awsm-application-submit-btn {
              text-decoration:none!important;
              color:var(--white)!important;
              display: inline-block;
              background: linear-gradient(180deg, rgba(131, 28, 207, 0.87) 0%, rgba(47, 88, 219, 0.87) 100%);
              border: none;
              transition: all .3s ease;
              width: 100%;
              height: 50px;
              border-radius: 100px;
              font-weight: 600;
              font-size: 22px;
              &:hover, &:focus{
                color: var(--brand);
              }
            }
            &:last-child{
              text-align: center;
            }
            .awsm-resume-file-control{
              border: none;
            }
            .awsm-resume-file-control{
              padding-left: 0;
              margin-top: 14px;
            }
          }
        }
        .css-8zjjhr-ErrorNotice, .css-128et5q-SuccessNotice{
          margin-top: 20px;
          border-bottom: 0 !important;
          border-left: 0 !important;
          border-right: 0 !important;
          color: #000000;
          background: #FFFFFF;
          box-shadow: 0px 0px 7px 5px rgba(141, 139, 139, 0.25);
          p{
            display: list-item;
            margin-left: 10px;
            font-size: 20px;
            list-style: circle;
          }
        }
        .css-8zjjhr-ErrorNotice{
          border-top: 5px solid #ff2c18 !important;
        }
        .css-128et5q-SuccessNotice{
          border-top: 5px solid #EEAD46 !important;
        }
      }      
    }
  }
`;
