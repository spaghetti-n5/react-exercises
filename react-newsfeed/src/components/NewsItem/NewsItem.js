import React from 'react';

import classes from './NewsItem.css';
import defaultImage from './defaultImage.jpg';

const NewsItem = (props) => {
  let image = '';
  if (props.image === null) {
    image = <img src={defaultImage} alt='default' />
  } else {
    image = <img src={props.image} alt={props.title} />
  }
  return (
    <article>
      <div>
         {image}
      </div>
      <div className={classes.Text}>
         <h3>{props.title}</h3>
         <p>{props.description}</p>
         <p style={{fontStyle: 'italic'}}>{props.author} | {props.source}</p>
      </div>
    </article>
  );
}

export default NewsItem;
