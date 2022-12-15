import React from "react";
import { connect} from "frontity";
import RecentList from "./RecentList";

const RecentPost = ({ state }) => {

  // Get information about the current URL.
  const link = state.source.get(state.router.link);
  const data1 = state.source.get('/blogs');

  // store blog list as an array.
  let blogList = [];
  // loop through all the blog list and push that into array
  data1.items.forEach(data => {
    blogList.push(data);
  });
  
  // loop through the array to remove matching post
  blogList.forEach((list, index)=>{
    if(link.link === list.link){
      blogList.splice(index, 1)
    }
  })

  return (
    <div className="sidebar_recent_post">
          <h3>Recent Posts</h3>
          <div className="sidebar__bottom">
          {blogList.slice(0,3).map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <RecentList key={item.id} item={item} />;
          })}
          </div>
    </div>
  );
};

export default connect(RecentPost);
