import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogApi, GET_POST } from "../services/blogApi";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

export default function Post() {
  const { goBack } = useHistory();

  const params = useParams([]);
  const [post, setPost] = useState({
    "id": "",
    "title": "",
    "coverImage":{
      "url": ""
    },
    "content":{
      "html": ""
    }
  });

  useEffect(()=>{
    blogApi
      .post('', { query: GET_POST(params.slug) })
      .then(result => setPost(result.data.data.post))
  }, [params.slug]);

  return (
    <div className="post-page">
      <Helmet>
        <title>{post.title}</title>
      </Helmet>

      <Header />
      <main>        
        <h2 className="post-title">{post.title}</h2>

        <article className="post-content">
          <img className="post-img" alt={post.title} src={post.coverImage.url} />
          <div 
            className="post-content-text"
            dangerouslySetInnerHTML={{__html: post.content.html}} 
          />
        </article>
      </main>

      <button className="button-back" onClick={goBack}>
        <FontAwesomeIcon size="3x" fixedWidth icon={faArrowLeft} />
        <span className="text">Voltar</span>
      </button>
      <Footer />
    </div>
  );
}