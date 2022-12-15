import React, {useEffect} from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import Image from "@frontity/components/image";
import {BsArrowRight} from 'react-icons/bs'
import PostCategory from "../customComponents/PostCategory";
import {GoCalendar} from 'react-icons/go'
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const data = state.source.get(state.router.link);
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const isJobs = data.isAwsmJobOpeningsArchive;

    // Get all categories
  const allCategories = state.source.category;

   /**
   * The item's categories is an array of each category id
   * So, we'll look up the details of each category in allCategories
   */
    const categories =
    item.categories && item.categories.map((catId) => allCategories[catId]);

  let readMoreLabel = 'Read more';
  if ( isJobs ) {
    readMoreLabel = 'Know More';
  }  

  
  return (
    <>
      {!isJobs && (
        <Article>
        <Link className="article-title" link={item.link}>
        {state.theme.featured.showOnList && (
          <FeaturedMedia id={item.featured_media} />
          )}

          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>

        <div className="bio-info">
          {/* If the post has an author, we render a clickable author text. */}
          {author && (
            <StyledLink link={author.link}>
              <Image src={author.avatar_urls['48']} alt={author.name} />
              <AuthorName>
                <b>{author.name}</b>
              </AuthorName>
            </StyledLink>
          )}
          <PublishDate>
          <GoCalendar style={{marginBottom:'4px'}} />
            {" "}
             {date.toDateString()}
          </PublishDate>
           {/* If the post has categories, render the categories */}
           {item.categories && <PostCategory categories={categories} />}
        </div>



        {/* If the post has an excerpt (short summary text), we render it */}
        {item.excerpt && (
          <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
        )}
        <div className="redmore_btn_container">
        <Link className="redmore-btn" link={item.link}>{ readMoreLabel } <BsArrowRight /></Link>
        </div>
        </Article>
      )}
      {isJobs && (
        <Article className="job-article col-12 col-md-6 col-lg-4 align-self-strech">
        <div className="job-box">
              <p dangerouslySetInnerHTML={{ __html: item._job_specs }} />
            <Link className="job-title" link={item.link}>
              <h4 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
            </Link>
            {/* If the post has an excerpt (short summary text), we render it */}
            {item.excerpt && (
              <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
            )}
            {isJobs && item.awsm_in_specs && (
              <div dangerouslySetInnerHTML={{ __html: item.awsm_in_specs }}></div>
            )}

            <Link className="brand-btnhollow" link={item.link}>{ readMoreLabel } <svg width="14px" height="9px" viewBox="0 0 14 9" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" stroke="none" strokeWidth="1" fillRule="evenodd"><g id="Icons/Right-arrow" transform="translate(0.000000, -2.000000)"  fillRule="nonzero"><g id="interface" transform="translate(0.000000, 2.000000)"><path d="M13.7823071,3.98623766 L9.90356292,0.21135247 C9.61303376,-0.0713855917 9.14311798,-0.0703331717 8.85392477,0.213820214 C8.56476866,0.497937309 8.56588194,0.957481922 8.85641109,1.24025627 L11.460152,3.77419318 L0.742187132,3.77419318 C0.332277179,3.77419318 -3.09974268e-13,4.09913691 -3.09974268e-13,4.5 C-3.09974268e-13,4.90086317 0.332277179,5.2258069 0.742187132,5.2258069 L11.4601149,5.2258069 L8.8564482,7.75974381 C8.56591905,8.04251816 8.56480577,8.50206277 8.85396188,8.78617987 C9.14315509,9.07036955 9.61310798,9.07134938 9.90360003,8.78864761 L13.7816762,5.01445194 C14.0730218,4.73004453 14.0720941,4.26901201 13.7823071,3.98623766 Z" id="Path"></path></g></g></g></svg></Link>
        </div>
        </Article>
      )}
    </>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);
const Article = styled.article`
  max-width:771px;
  /* margin:0 auto; */
  position: relative;
  /* margin-bottom:3.5rem; */
  margin-bottom:0.5rem;
  /* border-bottom: 1px solid #dfdddd; */
  padding-bottom: 3rem;
  .bio-info {
    margin-bottom:1rem;
    img {
      border-radius:50%;
      margin-right:0.5rem;
    }
  }
  .article-title {    
    &:hover {
      h1 {
        color:var(--brand);
      }
    }
  }
  .redmore_btn_container{
    margin-top: 2rem;
  }
  .redmore-btn {
    color:var(--white);
    transition: all .3s ease;
    background: linear-gradient(180deg, rgba(131, 28, 207, 0.87) 0%, rgba(47, 88, 219, 0.87) 100%);
    padding: 0.5rem 3rem 0.6rem;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    svg{
      margin-bottom: 2px;
      transition: all .3s ease;
    }
    &:hover {
      background: linear-gradient(95.4deg, #D78403 9.09%, #EEAD46 93.37%);
      svg{
        transform: translateX(5px);
      }
    }
  }
  /**Job articles**/
  &.job-article {
    max-width: 100%;
    margin: 0;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    @media (max-width:480px) {
      margin-bottom: 0;
    }
    .job-box {
      padding: 24px;
      background: var(--white);
      box-shadow: 0px 7px 20px rgba(25, 64, 187, 0.15);
      border: 1px solid #ececec;
      border-radius:5px;
      transition: all .3s ease;
      display: flex;
      flex-grow: 1;      
      flex-direction: column;

      width: auto;
      @media(min-width:998px){
        width: 328px;
      }
      > p{
        margin-bottom: 0;
      }
      .awsm-job-specification-wrapper{
        margin-bottom: 16px !important;
        .awsm-job-specification-job-category{
          margin-bottom: 0;
          .awsm-job-specification-term{
            font-size: 12px;
            font-weight: 800;
            background: linear-gradient(90.14deg, #9BE2DD 0.6%, #47C4D8 99.91%);
            border-radius: 2px;
            padding: 6px 15px;
            font-family: "Inter", sans-serif;
            color: #ffffff;
            text-transform: uppercase;
          }
        }
        .awsm-job-specification-item.awsm-job-specification-job-type, .awsm-job-specification-item.awsm-job-specification-job-location,.awsm-job-icon-shopping-bag,.awsm-job-specification-term:before{
          display: none !important;
        }
      }
      .job-title {
        text-decoration:none;
        h4 {
          transition: all .3s ease;
          font-weight: 700;
          font-size: 20px;
        }        
        &:hover {
          h4 {
            color:var(--brand);
          }          
        }
      }
      .brand-btnhollow {        
        margin: auto auto 0 0;
        color:#740FC3;
        transition: all .3s ease;

        font-weight: 700;
        font-size: 14px;
        svg {
          fill:#740FC3;
          transition: all .3s ease;
        }
        /* &:hover {
          color:var(--black);
          svg {
            fill:var(--brand);
          }
        } */
      }
      .awsm-job-specification-wrapper {
        margin-bottom:0.5rem;
        .awsm-job-specification-job-category {
          .awsm-job-specification-term{
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
          margin-bottom:0.2rem;
        }
        .awsm-job-specification-job-location {
          .awsm-job-specification-term{
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
        }
      }
      &:hover {
       transform: translateY(-10px);
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 32px;
  text-shadow: 2px 2px 3px rgb(0 0 0 / 30%);
  margin-bottom:1.5rem;
  color: var(--black);
  box-sizing: border-box;
  transition: all .3s ease;
`;

const AuthorName = styled.span`
  color: var(--black);
  font-size: 1rem;
  margin-right:1rem;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: var(--gray);
  font-size: 0.875rem;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  p{
    font-weight: 500;
    font-size: 14px;
  }
`;
