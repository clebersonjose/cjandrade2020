import React, {useState, useEffect} from "react";
import { blogApi, GET_POSTS_FEED, GET_POSTS_FEED_TOTAL } from "../services/blogApi";
import CardPost from "../components/CardPost";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function FeedPosts() {
  const [posts, setPosts] = useState(null);
  const [totalItems, setTotalItems] = useState();

  const params = useParams();
  const itemsPerPage = 4;
  const isPage = (params.page) ? Number(params.page) : 1;
  
  useEffect(()=>{
    blogApi
      .post('', { query: GET_POSTS_FEED(itemsPerPage, (isPage === 1) ? 0 : (itemsPerPage * (isPage - 1))) })
      .then(result => setPosts(result.data.data.posts));
  }, [isPage, params.page]);


  useEffect(()=>{
    blogApi
      .post('', { query: GET_POSTS_FEED_TOTAL })
      .then(result => setTotalItems(result.data.data.posts.length))
  }, []);

  const pages = () => {
    let totalPages = totalItems/itemsPerPage;
    let pagesArray = [];
    for (let index = 1; index < totalPages+1; index++) {
      pagesArray.push(index);
    }
    return pagesArray;
  };
  
  return (
    <section className="feed-posts">
      <h2 className="feed-posts-title">Posts:</h2>
      <div className="feed-posts-items">
        {posts && posts.map((post)=> {
          return (
            <CardPost 
              key={post.id} 
              title={post.title} 
              slug={post.slug} 
              img={post.coverImage.url}
              excerpt={post.excerpt}
            />
          );
        })}
      </div>
      <div className="feed-posts-pagination">
        {pages().map((page) => {
          return (
            <Link to={`/${page}`} key={page} className={`feed-posts-pagination-item ${(isPage === page) && "active"}`}>{page}</Link>
          );
        })}
      </div>
    </section>
  );
}