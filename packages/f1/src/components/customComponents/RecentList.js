import React, {useState, useEffect} from "react";
import Link from "@frontity/components/link";
import { connect, styled } from "frontity";''
import FeaturedMedia from "./recent-media";
import {GoCalendar} from 'react-icons/go'
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const RecentList = ({ state, item }) => {
  const [recent, setRecent] = useState(false)
  useEffect(() => {
    setTimeout(()=>{
      setRecent(true)
    },500)
  }, [])
  
  const date = new Date(item.date);
  return (
    <Container>
    {recent ?
         <div className="recent_post">
            <Link className="article-title" link={item.link}>
            <div className="recent_img">
              <FeaturedMedia id={item.featured_media} />
              </div>
          </Link>
          <div className="recent_details">
            {" "}
            <Link className="article-title" link={item.link}>
              <h2>{item.title.rendered}</h2>
            </Link>
        {/* If the post has an excerpt (short summary text), we render it */}
          <>
        {item.excerpt && (
          <Link className="article-title" link={item.link}>
            <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
        </Link>
            )}
        </> 
        <p><GoCalendar style={{marginBottom:'5px'}} /> {date.toDateString()}</p>
        </div>
        </div>
        :null
        }
    </Container>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(RecentList);

const Excerpt = styled.p`
  line-height: 1.6em;
  word-break: break-all;
    &:hover{
      color: #0056b3;
    }
`;
const Container = styled.div`
/* margin-top: 20px; */
  .recent_details{
    h2{
      font-size: 16px;
      font-weight: 600;
      height: 38.38px;
      margin-top: 16px;
      overflow: hidden;
      @media (max-width:568px) {
        height: auto;
      }
    }
    p{
      font-size: 14px;
      margin-bottom: 10px;
    }
    a{
      color: var(--black);
    }
  }
`;
