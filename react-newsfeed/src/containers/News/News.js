import React, { Component } from 'react';
import axios from 'axios';

import NewsItem from './../../components/NewsItem/NewsItem';

class News extends Component {
  state = {
    news: []
  }

  componentDidMount () {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=29740a8e13f04534a9e4664f6dbf1567')
         .then(response => {
           const articles = response.data.articles;
           console.log(articles);
           this.setState({news:articles});
         })
         .catch(error => {
           console.log(error);
         });
  }

  render () {
    const news = this.state.news.map(article => {
      return (
        <NewsItem
          key={article.title}
          title={article.title}
          description={article.description}
          image={article.urlToImage}
          author={article.author}
          source={article.source.name}
          date={article.publishedAt}/>
      );
    });

    return (
      <div>
        {news}
      </div>
    );
  }
}

export default News;
