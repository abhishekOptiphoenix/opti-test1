import React, {useState , useEffect } from "react";
import { connect, styled} from "frontity";
import Link from "./link";
import { AiOutlineSearch } from "react-icons/ai";
import RecentPost from "./customComponents/recent-post";
import {
  getPostsGroupedByCategory,
} from "../helpers";
import { categoriesWidgetsHome } from "../config";
import Newsletter from "./customComponents/Newsletter";

const Sidebar = ({ state, actions}) => {
  const [search, setSearch] = useState('')
  const postsPerCategory = getPostsGroupedByCategory(state.source);

  const tags = state.source.tag;
  // for coverting objects into arrays
  const arrays = Object.values(tags);

  useEffect(() => {
    const attachExtraDataToState = async () => {
      await Promise.all(
        Object.values(categoriesWidgetsHome).map((category) =>
          actions.source.fetch(`/category/${category}/`)
        )
      );
    };
    attachExtraDataToState();
  },[]);

  const categoryFiltered = postsPerCategory.filter(({posts, category})=>{
    if(search== ""){
      return category
    }else if(category.name.toLowerCase().includes(search.toLocaleLowerCase())){
      return category
    }
  })

  const tagFiltered = arrays.filter((arr)=>{
    if(search== ""){
      return arr
    }else if(arr.name.toLowerCase().includes(search.toLocaleLowerCase())){
      return arr
    }
  })

  return (
    <div className="left__sidebar">
      <div className="sidebar_input">
        <input
          type="text"
          className="search_box"
          placeholder="Search Categories/Tags"
          onChange={(e)=>setSearch(e.target.value)}
        />
        <AiOutlineSearch className="search_icon" />
      </div>

      {/* categories */}
      <div className="sidebar_categories">
        <h3>Categories</h3>
        <div className="categories_list">
          <ul>
            {
              categoryFiltered.length === 0 ? 
              <div className="no_result">No result Found...</div> :
              <>
            {
              categoryFiltered.map(({ posts, category }, index) => (
                <Link className="job-title" link={category.link}>
              <li key={index}>
                <div className="category_name">{category.name}</div>
                <span>( {posts.length} )</span>
              </li>
            </Link>
            ))
          }
          </>
          }
          </ul>
        </div>
      </div>

      {/* sidebar recent post */}
      <RecentPost />

      {/* newsletter */}
      <div className="sidebar_newsletter">
        <h3>Newsletter</h3>
        <p>Enter your email address below to subscribe to our newsletter</p>
        <Newsletter />
      </div>

      {/* tags */}
      <div className="sidebar_tags">
        <h3>Tags</h3>
        <div className="tags_content">
          {
            categoryFiltered.length === 0 ? 
            <div className="no_result">No result Found...</div> :
        <>
          {tagFiltered.map((arr) => (
            <div className="tags_link" key={arr.id}>
                <StyledLink link={arr.link}>
                  <p>{arr.name}</p>
                </StyledLink>
              </div>
          ))
          }
        </>
        }
        </div>
      </div>
    </div>
  );
};

export default connect(Sidebar);

const StyledLink = styled(Link)`
  /* padding: 15px 0; */
  color: var(--black);
`;
