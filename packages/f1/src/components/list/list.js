import React, {useState, useEffect} from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import Sidebar from "../sidebar";
import listBg from "../../../../../assets/hero-images/changebg.png";
import JobBottom from "../customComponents/jobBottom";

const List = ({ state }) => {
 
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  let title = "Our Blogs";
  let description =
    "Trends about development and technology with insightful analysis";
  if (data.isAwsmJobOpeningsArchive) {
    title = "We're hiring!";
   description =
    "We're always searching for wonderful folks to join our team. Take a glance  at our current openings!";
  }

  useEffect(()=>{
    var wpcf7Form = document.querySelector( '.wpcf7-submit' );
    if(wpcf7Form){
        setTimeout(()=>{
          const errorMessage  = document.querySelector(".css-1v5tu5l-ErrorMessage")
          if(errorMessage){
            errorMessage.classList.add("hide")
          }
        }, 4000);
        setTimeout(()=>{
        const successMessage = document.querySelector(".css-xwf3m5-SuccessMessage");
        if(successMessage){
          successMessage.classList.add("hide")
          }
      }, 4000);
    }
  },[])
  
  return (
    <div>
    <JobContainer>
    <div className="listImg_container">
        <img src={listBg} alt="background image" className="listbg_contaainer" />
      </div>
      {/* If the list is a AWSM Job career page, we render a title. */}
      {data.isAwsmJobOpeningsArchive && 
      <Header>
        <div className="list_title">{title}</div>
        <p className="description">{description}</p>
        <div className="down_arrow">
          <MdOutlineKeyboardArrowDown />
        </div>
       </Header>}
        {/* Iterate over the items of the list. */}
        {data.isAwsmJobOpeningsArchive && (
        <section className="section job-listing">
           <div className="job_list_container">
            <div className="job_list_content">
              <div className="job_heading">
                <h1>Job openings</h1>
              </div>
          <div className="container">
            <div className="row">
              {/* Iterate over the items of the list. */}
              {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <Item key={item.id} item={item} />;
              })}
            </div>
          </div>
          {/* <Pagination /> */}
          </div>
          <div className="joblist_custom_bottom">
              <JobBottom />
            </div>
          </div>
        </section>
      )}
    </JobContainer>
    <Container>
      {/* If the list is a blog posts, we render a title. */}
      {data.isPostArchive && (
        <Header className="blog_header">
           <div className="list_title">{title}</div>
          <p className="description">{description}</p>
        </Header>
      )}
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {/* {data.taxonomy}:{" "} */}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}
      {!data.isAwsmJobOpeningsArchive && (
        <div className="blog_post_list_container">
          <div className="blog_post_list_content">
            <div className="right_content">
              {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <Item key={item.id} item={item} />;
              })}
              <Pagination />
            </div>
            <div className="left_sidebar">
              <Sidebar />
            </div>
            </div>
          </div>
      )}
    </Container>
    </div>
  );
};

export default connect(List);

const Container = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  list-style: none;
  .blog_post_list_container {
    .blog_post_list_content {
      .right_content {
        box-shadow: 10px 0px 13px 0px rgba(25, 64, 187, 0.11);
        @media (max-width: 992px) {
          box-shadow: none;
        }
      }
    }
  }
  .section.job-listing {
    .css-1ghdto9-Article {
      border-bottom: none;
    }
    .job_heading {
      h1 {
        text-align: center;
        padding-bottom: 50px;
        font-size: 3rem;
        font-weight: 600;
      }
    }
  }
`;
const JobContainer = styled.section`
  margin: 0 auto;
  list-style: none;
  .listImg_container{
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
    img{
      width: 100%;
      height: 507px;
      object-fit: cover;
    }
  }
  .section.job-listing {
    padding-top: 0;
    margin-top: 100px;
    padding-bottom: 0;
    .job_list_container{
      .job_list_content{
        .job-article{
          padding-bottom: 0;
          margin-bottom: 60px;
        }
        .container{
          max-width: 1110px;
          .row{
              justify-content: center;
            }
        }
        .css-1ghdto9-Article {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 60px;
        }
        .job_heading {
          h1 {
            text-align: center;
            margin-bottom: 50px;
            font-size: 48px;
            font-weight: 400;
            font-family: 'Merriweather Sans', sans-serif;
            @media (max-width:480px) {
              font-size: 40px;
            }
          }
        }
        .joblist_custom_bottom{
          .job_bottom_culture_container{
            .reason_to_join{
              .joining_benefits{
                .img_container{
                  box-shadow: 0px 15px 30px rgb(47 88 219 / 10%);
                  margin-bottom: 2rem;
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Header = styled.h1`
  /* text-align:center; */
  margin-bottom: 3rem;
  height: 354px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
  text-align: center;
  position: relative;
  padding: 0 15px;
  .list_title {
    font-weight: 700;
    font-size: 71px;
    font-family: 'Merriweather Sans', sans-serif;
    @media (max-width:480px) {
    font-size: 50px; 
    }
  }
  .down_arrow{
          svg{
            position: absolute;
            bottom: -33px;
            left: 50%;
            transform: translate(-50%, 0);
            animation: bottomArrow-animation 2s infinite;
          }
        }
  p {
    font-weight: 700;
    font-size: 21px;
    line-height: 30px;
    margin-top: 21px;
    font-family: "Inter", sans-serif;
    max-width: 523px;
  }

  @keyframes bottomArrow-animation {
  0%    { bottom: -33px }
  50%   { bottom: -50px; }
  100%   { bottom: -33px; }
}

`;
