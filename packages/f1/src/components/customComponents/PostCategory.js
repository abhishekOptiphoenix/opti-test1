import { connect, styled, decode } from "frontity";
import React from "react";
import Link from "../link";
import {BsTag} from "react-icons/bs"


const PostCategory = ({categories}) => {
     // Remove empty or undefined categories
  const postCategories = categories.filter(Boolean);

  if (postCategories.length === 0) {
    return null;
  }
  return (
    <EntryCategories>
        <BsTag style={{marginRight:'5px'}} /> 
      <EntryCategoriesInner>
        {postCategories.map((category) => (
          <CategoryTag key={category.id}>
            {decode(category.name)}
          </CategoryTag>
        ))}
      </EntryCategoriesInner>
    </EntryCategories>
  )
}

export default PostCategory

const EntryCategories = styled.span`
  /* line-height: 1.25;
  margin-bottom: 2rem;
  margin-top: 2rem; */
  display: inline-block;
  margin-left: 14px;
`;

const EntryCategoriesInner = styled.span`
& > * + *{
    margin-left: 5px;
}
  /* justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem 0 0 -1rem;
  @media (min-width: 700px) {
    margin: -1rem 0 0 -2rem;
  } */
`;

const CategoryTag = styled.span`
font-size: 12px;
background-color: #edf2f7;
border-radius: 9999px;
    padding: 0.25rem 0.75rem;
  /* border-bottom: 0.15rem solid currentColor;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.036666667em;
  margin: 0.5rem 0 0 1rem;
  text-decoration: none;
  text-transform: uppercase;
  @media (min-width: 700px) {
    font-size: 1.5rem;
    margin: 1rem 0 0 2rem;
  }
  transition: background-color 150ms;
  :hover {
    background-color: #e2e8f0
  } */
`;