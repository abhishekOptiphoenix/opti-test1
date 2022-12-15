import React from "react";
import { connect, styled } from "frontity";

const Newsletter = ({ state, libraries }) => {
  const data = state.source.get("/newsletter");
  const newsletterForm = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <ContactContainer>
      <div className="contact_form">
        <Html2React html={newsletterForm.content.rendered} />
      </div>
    </ContactContainer>
  );
};

export default connect(Newsletter);

const ContactContainer = styled.div`
  
`;
