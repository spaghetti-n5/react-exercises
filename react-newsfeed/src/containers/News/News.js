import React, { Component } from 'react';
import axios from 'axios';

import NewsItem from './../../components/NewsItem/NewsItem';
import CountryFilter from './../../components/CountryFilter/CountryFilter';
import classes from './News.css';

class News extends Component {
  state = {
    news: [],
    error: false,
    showMenu: false,
    currentCountry: 'USA',
    countries: [{countryId:'au',countryName:'Australia'},{countryId:'be',countryName:'Belgium'},
                {countryId:'fr',countryName:'France'},{countryId:'de',countryName:'Germany'},
                {countryId:'it',countryName:'Italy'},{countryId:'ru',countryName:'Russia'},
                {countryId:'us',countryName:'USA'},{countryId:'ve',countryName:'Venezuela'}]
  }

  showMenuHandler = (event) => {
    event.preventDefault();
    this.setState({showMenu:true});
    document.addEventListener('click', this.closeMenuHandler);
  }

  closeMenuHandler = () => {
    this.setState({showMenu:false});
    document.removeEventListener('click', this.closeMenuHandler);
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
           this.setState({error:true});
         });
  }

  selectCountryHandler = (countryCode) => {
     axios.get('https://newsapi.org/v2/top-headlines?apiKey=29740a8e13f04534a9e4664f6dbf1567&country='+countryCode)
          .then(response => {
           const articles = response.data.articles;
           this.setState({news:articles});
           console.log(articles);
           //Getting the CountyName:
           this.state.countries.forEach(element => {
           if (element.countryId === countryCode) {
             this.setState({currentCountry:element.countryName})
           }
           });
          })
         .catch(error => {
           console.log(error);
           this.setState({error:true});
         });
  }

  render () {
    let news = "";
    if (this.state.error) {
      news = <p style={{textAlign:'center'}}>Something went wrong!</p>
    } else {
      news = this.state.news.map(article => {
        return (
          <a href={article.url} target="_blank" key={article.title}
             style={{textDecoration:'none', color:'black'}}>
            <NewsItem
              key={article.title}
              title={article.title}
              description={article.description}
              image={article.urlToImage}
              author={article.author}
              source={article.source.name} />
          </a>
        );
      });
    }

    let optionCountry = "";
    optionCountry = this.state.countries.map(country => {
      return (
        <CountryFilter key={country.countryId}
                clicked={()=>this.selectCountryHandler(country.countryId)}
                country={country.countryName}/>
      )
    });

    return (
      <div>
        <header className={classes.Header}>
          <h1>News Feed</h1>
          <div className={classes.Dropdown}>
             <button className={classes.Dropbtn} onClick={this.showMenuHandler}>Country</button>
             {this.state.showMenu
               ? (
                  <div className={classes.DropdownContent}>
                    {optionCountry}
                  </div>
               )
               : (
                null
               )
             }
          </div>
        </header>
        <div style={{marginTop:'160px'}}>
          <h2>News {this.state.currentCountry}</h2>
          {news}
        </div>
      </div>
    );
  }
}

export default News;
