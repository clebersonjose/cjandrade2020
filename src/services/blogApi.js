import axios from 'axios';

export const blogApi = axios.create({
  baseURL: process.env.REACT_APP_GRAPHCMS_API_URL,
});

export function GET_POSTS_FEED(itemPerPage = 4, skip = 0) { 
  return `
  {
    posts(stage: PUBLISHED, orderBy: publishedAt_DESC, first: ${itemPerPage}, skip: ${skip}) {
      id
      title
      slug
      excerpt
      publishedAt
      coverImage {
        url
      }
    }
  }
`};

export const GET_POSTS_FEED_TOTAL = `
  {
    posts {
      id
    }
  }
`;

export function GET_POST(slug) { 
  return `
  {
    post(where: {slug: "${slug}"}) {
      id
      title
      coverImage {
        url
      }
      content {
        html
      }
    }
  }
`}