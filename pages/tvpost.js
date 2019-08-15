import Layout from '../components/layout'
import Layout2 from './tv_info/MyLayout'
import { Card, CardImg, CardBody, CardTitle, Row, Col, Button } from 'reactstrap'
import { TvImage, TvCast } from './jsxstyles'
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
          <Col className="float-left">
            <h1>{props.show.name}</h1>
            <h3><b>Type:</b> <small>{props.show.type ? props.show.type : 'no data'}</small></h3>
            <h3><b>Premiered:</b> <small>{props.show.premiered ? props.show.premiered : 'no data'}</small></h3>
            <h3><b>status:</b> <small>{props.show.status ? props.show.status : 'no data'}</small></h3>
            <h3><b>Rating:</b> <small>{props.show.rating.average ? props.show.rating.average : 'no data'}</small></h3>
            <h3>
              {/* since tvmaze api json has genre as an imbedded array,
                pulls the data in genres in a key map to list all entries*/}
              <b>Genre:</b> &nbsp;
              <small>
                {props.show.genres.map(genre => (
                  <span key={props.show.genres}>
                  {genre} &nbsp;
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
              <Card className="m-5 text-center">
                <CardTitle className="mt-4">{cast.person.name}</CardTitle>
                <CardBody>
                  <div>
                    <CardImg style={TvImage} src={cast.person.image.medium? cast.person.image.medium: noimage} alt="castimage" />
                  </div>
                  <div className="text-center my-3">
                    <h4 style={TvCast}>As:{cast.character.name}</h4>
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
      </div>
    </Layout2>
  </Layout>
);

tvPost.getInitialProps = async function(context) {
  const { id } = context.query;
  //pules tvmaze api json based on selected show on the search page.
  const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=cast`);
  const show = await res.json();
  
  console.log(show);

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default tvPost;