import {categoriesWidgetsHome} from '../config'
export const getPostsFromCategory = ({ post }, categoryId) =>
  Object.keys(post)
    .map(postID => post[postID])
    .filter(({categories}) => categories.includes(+categoryId) )

export const getPostsGroupedByCategory = source =>  {
  return Object.keys(categoriesWidgetsHome).reduce((acc, categoryId) => {
    const posts = getPostsFromCategory(source, categoryId)
    const category = source.category[categoryId] 
    return [...acc, {posts, category} ]
  }, [])
}

export const createMarkupObject = renderedHtml => ({__html: renderedHtml})
