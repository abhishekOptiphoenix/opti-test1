import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import RecentPost from "./customComponents/recent-post";
import PopUp from "./customComponents/popup-contact";

const Post = ({ state, actions, libraries }) => {
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

  const [showForm, setShowForm] = useState(false);
  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();

      /**
       * get the .contactus_image class from the wordpress
       * and then add a click event to open a contact us popup
       */
      const gh= Array.from(document.querySelectorAll(".contactus_image"));
        gh.forEach((g)=>(
        g.addEventListener("click", ()=>{
          /**
           * if error or success message already there then remove 
           * them when click on the image in 1ms
           */ 
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
          //  open popup form when click on image
          setShowForm(!showForm);
        })
      ))
  }, []);

  // function for close the popup by clicking on the cross button
  const handleClick = ()=>{
    setShowForm(!showForm);
  }

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
       <div className="blogpost_container">
            {/* Look at the settings to see if we should include the featured image */}
            {state.theme.featured.showOnPost && (
              <>
                <FeaturedMedia className="listbg_contaainer" id={post.featured_media} />
                <div className="overlay"></div>
              </>
            )}
       {/* <img src={blogBg} alt="background image" className="listbg_contaainer" /> */}
      </div>
    {/* <Header className="blog_header">
    <p className="description" dangerouslySetInnerHTML={{ __html: post.title.rendered }}  />
  </Header> */}
    <div className="blog_indi_post_list_container">
    <div className="blog_indi_post_list_content">
      <div className="right_content">
    <ArticleContainer>
      <div className="post-title">
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        {/* Only display author and date on posts */}
        {data.isPost && (
          <div style={{textAlign: "center"}}>
            <DateWrapper>
              {" "}
              Published: <b>{date.toDateString()}</b>
            </DateWrapper><span>/</span> 
            {author && (
              <StyledLink link={author.link}>
                <Author>
                  By: <b>{author.name}</b>
                </Author>
              </StyledLink>
            )} 
          </div>
        )}
      </div>

     

      <Content>
        <Html2React html={post.content.rendered} />
      </Content>
    </ArticleContainer>
    </div>
    </div>
    <div className="post__recent">
       {/* sidebar recent post */}
       <RecentPost />
    </div>
    </div>
    {/* show the form when showForm is true or we clicked on the image */}
    {showForm ?
    <div className="popup__container">
      <div className="popUp__bg"></div>
      <div className="popContainer__main">
        <PopUp handleClick={handleClick} />
      </div>
    </div>
    :null
    }
  </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  list-style: none;
  .blogpost_container{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    right: 0;
    height: 393px;
    img{
      width: 100%;
      height: 393px;
      object-fit: cover;
    }
    .overlay{
    background: linear-gradient(360deg, rgba(96, 0, 153, 0.54) 5.21%, rgba(55, 9, 170, 0.85) 53.59%, #0711A0 100%);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    }
  }
  .sidebar_recent_post{
    .sidebar__bottom{
      display: flex;
      & > * + *{
        margin-left: 20px;
        @media (max-width:568px) {
          margin-left: 0;
        }
      }
      .css-lnfka3-Container{
        .recent_img{
          border: none;
        }
        @media (max-width:568px) {
          margin-bottom: 20px;
        }
      }
      @media (max-width:568px) {
       flex-direction : column ;
      }
      .recent_post{
        max-width: 403px;
      @media (max-width:568px) {
        max-width: inherit;
      }
        .recent_img{
          height: 142px;
          border: 2px solid #efefef;
          .featured_image{
            height: 100%;
            img{
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
  .blog_indi_post_list_container{
    margin-bottom: 100px;
    .post__recent{
      margin-top: 72px;
      h3{
        font-size: 48px;
        font-weight: 400;
        font-family: 'Merriweather Sans', sans-serif;
        text-align: center;
        margin-bottom: 40px;
      }
    }
  }
  .popup__container{
  position: fixed;
    z-index: 99;
    top: 50%;
    left: 50%;
    height: 100vh;
    width: 100%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    .popUp__bg{
    position: fixed;
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    left: 0;
    top: 0;
    height: 100vh;
    }
    .popContainer__main{
      width: 100%;
    }
}
`;

const Header = styled.h1`
  font-size: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
  text-align: center;
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 1rem;
  }
`;


const ArticleContainer = styled.div`
  width:100%;
  /* max-width:1035px; */
  /* margin: 0 auto; */
  /* padding-right: 15px; */
  /* padding-left: 15px;  */
  max-width:1046px;
  padding: 0 20px;
  margin: 13rem auto 0;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  .post-title {
    /* text-align:center;     */
    margin-bottom: 1rem;
    span{
      padding: 0 10px;
    }
  }
  
`;
const Title = styled.h1`
  margin-bottom: 17px;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  padding-top: 40px;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 16px;
  font-weight: 400;
  display: inline;
`;

const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 16px;
  font-weight: 400px;
  display: inline;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  word-break: break-word;
  margin-top: 46px;
  padding-bottom: 40px;
  * {
    max-width: 771px;
    width: 100%;
    margin:0 auto;
  }

  p {
    margin-bottom:1.5rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    &.contactus_image{
      cursor: pointer;
    }
    /* next line overrides an inline style of the figure element. */
    // width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: 0 auto;
  }

  blockquote {
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }
  .wp-block-embed {
    max-width: 100%;
    position: relative;
    width: 100%;
    margin: 1.5rem auto;
    .wp-block-embed__wrapper {
      &::before {
        content: "";
        display: block;
        padding-top: 56.25%;
      }
    }
    iframe {
      max-width: 100%;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
    }
  }
  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color:var(--white);
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: var(--white);
    background-color:var(--brand);
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
