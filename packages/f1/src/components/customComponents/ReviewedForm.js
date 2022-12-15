import React, {useEffect} from "react";
import { connect, styled } from "frontity";

const ReviewedForm = ({ state, libraries }) => {
  const data = state.source.get("/reviewed-form");
  const reviewForm = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;

  useEffect(()=>{
    const reviewedForm = document.querySelector(".wpcf7-submit");
    reviewedForm.addEventListener( 'click', function( event ) {
      setTimeout(()=>{
        const errorMessage  = document.querySelector(".css-1v5tu5l-ErrorMessage")
          if(errorMessage){
            errorMessage.classList.add("hide")
          }
        const successMessage = document.querySelector(".css-xwf3m5-SuccessMessage");
        if(successMessage){
          successMessage.classList.add("hide")
        }
       }, 4000);

  });
},[])

  return (
    <Reviewcontainer>
      <div className="reviewed_form">
        <Html2React html={reviewForm.content.rendered} />
      </div>
    </Reviewcontainer>
  );
};

export default connect(ReviewedForm);

const Reviewcontainer = styled.div`
.reviewed_form{
  width: 579px;
  height: 535px;
  margin: -20px auto 0 ;
  .reviewed_form{
    .screen-reader-response{
      display: none;
    }
  }
}
`;
