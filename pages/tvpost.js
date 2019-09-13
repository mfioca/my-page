import Layout from '../components/layout'
import Layout2 from './tv_info/MyLayout'
import { Card, CardImg, CardBody, CardTitle, Row, Col, Table } from 'reactstrap'
import ReactTable from "react-table"
import "react-table/react-table.css"
import { TvImage, TvCast, TvTitle } from './jsxstyles'
import { TvPostInfoLabel, TvPostInfoValue, NewTabLink, LeftFlexWrapDiv } from './customComponents'
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
            <Table borderless className="">
              <tbody>
                <tr>
                  <TvPostInfoLabel>Type:</TvPostInfoLabel>
                  <TvPostInfoValue>{props.show.type ? props.show.type : 'no data'}</TvPostInfoValue>
                </tr>
                <tr>
                  <TvPostInfoLabel>Premiered:</TvPostInfoLabel>
                  <TvPostInfoValue>{props.show.premiered ? props.show.premiered : 'no data'}</TvPostInfoValue>
                </tr>
                <tr>
                  <TvPostInfoLabel>Status:</TvPostInfoLabel>
                  <TvPostInfoValue>{props.show.status ? props.show.status : 'no data'}</TvPostInfoValue>
                </tr>
                <tr>
                  <TvPostInfoLabel>Rating:</TvPostInfoLabel>
                  <TvPostInfoValue>{props.show.rating.average? props.show.rating.average : 'no data' }</TvPostInfoValue>
                </tr>
                <tr>
                  <TvPostInfoLabel>Genre:</TvPostInfoLabel>
                  <TvPostInfoValue>
                    {props.show.genres.map((value, index) => {
                      return <span key={index}>{value} &nbsp;</span>
                      })
                    }
                  </TvPostInfoValue>
                </tr>
                <tr>
                  <TvPostInfoLabel>Seasons</TvPostInfoLabel>
                  <TvPostInfoValue>
                    {props.show._embedded.seasons.filter(seasons => seasons.number).length}
                  </TvPostInfoValue>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <div className="text-center mr-5 mt-2">
              <img src={props.show.image ? props.show.image.medium : noimage} alt="no image"/>
            </div>
          </Col>
        </Row>
        <Row className="m-3">
          <h4>Summary:<br />
            <small>
              {props.show.summary
                .replace(/<[/]?p>/g, '')
                .replace(/<[/]?b>/g, '')
                .replace(/<[/]?i>/g, '')
              }
            </small>
          </h4>
        </Row>
        <Row className="m-3">
          <h3>Link: 
            <small className="ml-2">
              <NewTabLink
                Link={props.show.url}
                Title={props.show.url}>
                  {props.show.name ? props.show.name : 'null'}
              </NewTabLink>
            </small>
          </h3>
        </Row>
        <h2>Cast:</h2>
        <LeftFlexWrapDiv>
          {props.show._embedded.cast.map(cast => (
            <div key={cast.person.id}>
              <Card style={{height: '570px'}} className="m-2">
                <CardTitle 
                  className="m-4 text-center" 
                  style={TvTitle} >
                    {cast.person.name}
                </CardTitle>
                <CardBody>
                  <div>
                    <CardImg 
                      className="p-2" 
                      style={TvImage} 
                      src={
                        cast.person.image === null && noimage ||
                        cast.character.image === null && cast.person.image.medium ||
                        cast.character.image.medium
                      } 
                      alt="castimage" 
                    />
                  </div>
                  <div className="text-center my-2">
                    <h4 style={TvCast}>As: &nbsp;
                      <small>{cast.character.name}</small>
                    </h4>
                  </div>
                </CardBody>
                  <NewTabLink
                    Style="btn btn-dark w-100 mt-3"
                    Link={cast.person.url}
                    Title="Actor Page">
                      Actor Page
                  </NewTabLink>
              </Card>
            </div>
          ))}
        </LeftFlexWrapDiv>
        <div className="mt-4">
          <h1>Episodes:</h1>
              
          {/*React Table for Episode List */}
          <ReactTable
            className= "-striped -highlight"
            data= {props.show._embedded.episodes}
            defaultPageSize={20}
            style={{
              height: "600px",
              fontSize: "14px",
            }}
            filterable
              defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value}
            columns= {[
              {
                Header: "Season",
                id: "season",
                accessor: d => d.season,
                maxWidth: 110,
                style: {'textAlign': 'center'},
                //Dropdown list to filter table based on number
                //of seasons
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
                maxWidth: 80,
                style: {'textAlign': 'center'}
              },
              {
                Header:"Name",
                id: "name",
                accessor: d =>
                //Converts Episode Name into a link to the TvMaze 
                //page for that episode
                <NewTabLink
                  Link={d.url}
                  Title="Episode Link">
                    {d.name}
                </NewTabLink>, 
                minWidth: 70,
                style: {'whiteSpace': 'unset', 'textAlign': 'center'},
              },
              {
                Header:"Air Date",
                id: "airdate",
                accessor: d => d.airdate,
                maxWidth: 120,
                style: {'whiteSpace': 'unset', 'textAlign': 'center'},
              },
              {
                Header:"Summary",
                id: "summary",
                accessor: d => 
                d.summary != null && 
                  <span>
                    {d.summary.replace(/<[/]?p>/g, '')}
                  </span>,
                style: {'whiteSpace': 'unset'},
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