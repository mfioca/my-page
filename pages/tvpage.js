import React from 'react'
import { Button, Form, FormGroup, Label, Input, Card, CardImg, CardBody, CardTitle } from 'reactstrap'
import { TvImage, TvTitle } from './jsxstyles'
import Layout from '../components/layout'
import Layout2 from './tv_info/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { NewTabLink } from './customComponents'


const noimage = '/static/images/no-img.png';
var Search = '';

function FlexDivCenter(props) {
  return (
    <div className="d-flex justify-content-center">{props.children}</div>
  )
}

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
        <Form inline className="justify-content-center">
            <Label className="mr-sm-2">TV Show search by Name:</Label>
            <Input
              type="text"
              value={this.state.value} 
              onChange={this.enterSearch} 
              //Prevent enter key submit
              onKeyPress={event => {
                if (event.which === 13 /* Enter */) {
                  event.preventDefault();
                }
              }}
            />
          {/*due to get initial props async function is only called on page load
            disguised a page link as a search button to call value of search for 
            the await fetch api call.*/}
          <Button className="ml-4 p-0">
            <Link href="/tvpage">
              <a className="btn btn-dark">Click Submit</a>
            </Link>
          </Button>
        </Form>
    );
  }
}

const TvPage = props => (
  <Layout>
    <h1 className="text-center">the below content has been imported from 
    <NewTabLink
      Link="https://www.tvmaze.com"
      Title="TvMaze.com">
        Tvmaze.com
      </NewTabLink>
    </h1>
    <Searchbar />
    <Layout2>
      <h1>Results for: {Search}</h1>
      <div className="d-flex flex-wrap justify-content-left">
        {props.shows.map(show => (
          <div className="p-3 text-center" key={show.id}>
            <Card>
              <CardTitle 
                className="m-4 text-center" 
                style={TvTitle}>
                  <b><u>{show.name}</u></b>
              </CardTitle>
              <CardBody>
              <CardImg 
                className="my-2" 
                style={TvImage} 
                src={show.image ? show.image.medium : noimage} 
                alt="image" 
              />
              </CardBody>
              <Link href={`/tvpost?id=${show.id}`}>
                <a className="btn btn-dark w-100">Select</a>
              </Link>
            </Card>
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