import React, { Component } from 'react'
import Layout from '../components/layout'
import CSS from '../components/style.css'
import Layout2 from './tv_info/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const noimage = '/static/images/no-img.png';
var Search = '';


class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.enterSearch = this.enterSearch.bind(this);
  }

  enterSearch(event) {
    this.setState({value: event.target.value});
    Search = (event.target.value);
  }

  render() {
    return (
      <div className="Tvpagesearch-bar Fsize-1">
        <form onSubmit={this.handleSubmit}>
          <label>
            TV Show search by Name:
            <input type="text" value={this.state.value} onChange={this.enterSearch} />
          </label>
          <button>
            <Link href="/tvpage">
              <a>Submit</a>
            </Link>
          </button>
        </form>
      </div>
    );
  }
}


const TvPage = props => (
  <Layout>
    <h1 className="center">the below content has been imported from <a href="https://www.tvmaze.com" target="_blank" rel="noopener noreferrer">TVmaze.com</a></h1>
     <Searchbar />
     <Layout2>
        <h1>Results for: {Search}</h1>
        {/*}
          <ul>
            {props.shows.map(show => (
              <li key={show.id}>
                <Link as={`/p/${show.id}`} href={`/tvpost?id=${show.id}`}>
                  <a>{show.name}</a>
                </Link>
              </li>
              ))}
            </ul>
            */}
          <div className="tvbox Fsize-2">
            {props.shows.map(show => (
              
              <div key={show.id}>
                <p>
                 <Link as={`/p/${show.id}`} href={`/tvpost?id=${show.id}`}>
                  <a>{show.name}<br /><br /><img className="tvbox-img" src={show.image ? show.image.medium : noimage} alt="no image"/></a>
                </Link>
                </p>
              </div>
              ))}
          </div>
      </Layout2>
  </Layout>
);

TvPage.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=' + Search);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default TvPage;