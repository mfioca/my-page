import React from 'react'
import Layout from '../components/layout'
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
  //handles setting state of search value to render tvmaze json api
  //sets variable search value to state
  enterSearch(event) {
    this.setState({value: event.target.value});
    Search = (event.target.value);
  }


  render() {
    return (
      <div className="Tvpagesearch-bar Fsize-1">
        {/* currentl does not have on submit or entery key function to push link to 
          page for api call to render*/}
        <form>
          <label>
            TV Show search by Name:
            <input type="text" 
            value={this.state.value} 
            onChange={this.enterSearch} 
            //Prevent enter key submit
            onKeyPress={event => {
              if (event.which === 13 /* Enter */) {
                event.preventDefault();
              }
            }}
            />
          </label>
          {/*due to get initial props async function is only called on page load
            disguised a page link as a search button to call value of search for 
            the await fetch api call.*/}
          <button>
            <Link href="/tvpage">
              <a>Click Submit</a>
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
        {/* was original code from next.js tutorial.
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
            {/*Search results display inlucing show name and image.
              uses map key to render all results. */}
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
  //tvmaze search api link.  pulls the json info based on the search variable
  //entered by user in the search field.
  const res = await fetch('https://api.tvmaze.com/search/shows?q=' + Search);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default TvPage;