import React from 'react';

import classes from './NewsItem.css';

const NewsItem = (props) => (
  <article>
    <img src={props.image} alt={props.title} />
    <div className={classes.Text}>
       <h3>{props.title}</h3>
       <p>{props.description}</p>
       <p style={{fontStyle: 'italic'}}>{props.author} | {props.source}</p>
    </div>
  </article>
);

export default NewsItem;
