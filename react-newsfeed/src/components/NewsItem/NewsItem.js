import React from 'react';

const NewsItem = (props) => (
  <article>
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.author} | {props.source}</p>
    </div>
    <img src={props.image} alt={props.title} />
  </article>
);

export default NewsItem;
