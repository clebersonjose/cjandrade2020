import React from "react";
import { Link } from "react-router-dom";

export default function CardPost(props) {
  return (
    <Link to={`/post/${props.slug}`}>
      <article className="card-post">
        <img className="card-post-img" alt={props.title} src={props.img} />
        <div className="card-post-content">
          <h3 className="card-post-title">{props.title}</h3>
          <p className="card-post-excerpt">{props.excerpt}</p>
        </div>
      </article>
    </Link>
  );
}