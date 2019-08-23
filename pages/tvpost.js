import Layout from '../components/layout'
import Layout2 from './tv_info/MyLayout'
import { Card, CardImg, CardBody, CardTitle, Row, Col, Button } from 'reactstrap'
import ReactTable from "react-table"
import "react-table/react-table.css"
import { TvImage, TvCast, TvTitle } from './jsxstyles'
import fetch from 'isomorphic-unfetch'

const noimage = '/static/images/no-img.png'


const tvPost = props => (
  <Layout>
    <h1 className="text-center">the below content has been imported from 
      <a href="https://www.tvmaze.com" target="_blank" rel="noopener noreferrer">
        TVmaze.com
      </a>
    </h1>
    <Layout2>
      <div className="h3 m-3">
        <Row>
          <Col>
            <h1>{props.show.name}</h1>
            <h3><b>Type:</b> <small>{props.show.type ? props.show.type : 'no data'}</small></h3>
            <h3><b>Premiered:</b> <small>{props.show.premiered ? props.show.premiered : 'no data'}</small></h3>
            <h3><b>status:</b> <small>{props.show.status ? props.show.status : 'no data'}</small></h3>
            <h3><b>Rating:</b> <small>{props.show.rating.average}</small></h3>
            <h3>
              {/* since tvmaze api json has genre as an imbedded array,
                pulls the data in genres in a key map to list all entries*/}
              <b>Genre:</b> &nbsp;
              <small>
                {props.show.genres.map(genres => (
                  <span key={props.show.genres}>
                  {genres} &nbsp;
                  </span>
               ))} 
              </small>
            </h3>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }} className="mr-5 mt-3">
            <img src={props.show.image ? props.show.image.medium : noimage} alt="no image"/>
          </Col>
        </Row>
        <Row className="m-3">
            <h4>Summary:<br /><small>{props.show.summary.replace(/<[/]?p>/g, '').replace(/<[/]?b>/g, '').replace(/<[/]?i>/g, '')}</small></h4>
        </Row>
        <Row className="m-3">
          <h3>Link: 
            <small className="ml-2">
              <a href={props.show.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={props.show.url}>
              {props.show.name ? props.show.name : 'null'} 
              </a>
            </small>
          </h3>
        </Row>
        <h2>Cast:</h2>
        <div className="d-flex flex-wrap justify-content-left">
          {props.show._embedded.cast.map(cast => (
            <div key={cast.person.id}>
              <Card className="m-2">
                <CardTitle className="m-4 text-center" style={TvTitle}>{cast.person.name}</CardTitle>
                <CardBody>
                  <div>
                    <CardImg className="p-2" style={TvImage} src={cast.person.image.medium? cast.person.image.medium: noimage} alt="castimage" />
                  </div>
                  <div className="text-center my-2">
                    <h4 style={TvCast}>As:<small className="ml-2">{cast.character.name}</small></h4>
                  </div>
                </CardBody>
                <Button className="btn-dark mt-5">
                  <a className="btn-dark w-100" 
                    href={cast.person.url}
                    target="_blank" 
                    rel="noopener noreferrer"> 
                      Actor page
                  </a>
                </Button>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h1>Episodes:</h1>
          <ReactTable
            className= "-striped -highlight"
            data= {props.show._embedded.episodes}
            defaultPageSize={20}
            style={{
              height: "600px",
              fontSize: "14px" // This will force the table body to overflow and scroll, since there is not enough room
            }}
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value}
            columns= {[
              {
                Header: "Season",
                id: "season",
                accessor: d => d.season,
                width: 110,
                style: {'textAlign': 'center'},
                Filter: ({ filter, onChange }) => {
                  return (
                    <select
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%"}}
                      value={filter ? filter.value : ''}> 
                      <option value= ''>Show All</option>
                      {props.show._embedded.episodes
                        .map(item => item.season)
                        .filter((item, i, s) => s.lastIndexOf(item) == i)
                        .map(function (value) {
                          return (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          );
                        })
                      }
                    </select>
                  );
                }
              },
              {
                Header: "Episode #",
                accessor: "number",
                width: 80,
                style: {'textAlign': 'center'}
              },
              {
                Header:"Name",
                id: "name",
                accessor: d =>
                <a href={d.url} target="_blank" rel="noopener noreferrer">{d.name}</a>, 
                minWidth: 70,
                style: { 'whiteSpace': 'unset', 'textAlign': 'center' },
              },
              {
                Header:"Summary",
                id: "summary",
                accessor: d => 
                d.summary != null && <span>{d.summary.replace(/<[/]?p>/g, '')}</span>,
                style: { 'whiteSpace': 'unset' },
              }
            ]}
          />
        </div>
      </div>
    </Layout2>
  </Layout>
);

tvPost.getInitialProps = async function(context) {
  const { id } = context.query;
  //pules tvmaze api json based on selected show on the search page.
  const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`);
  const show = await res.json();
  
  console.log(show);

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default tvPost;