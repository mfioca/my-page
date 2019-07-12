import CSS from '../components/style.css'
import Layout from '../components/layout';
import Layout2 from './tv_info/MyLayout';
import fetch from 'isomorphic-unfetch';

const noimage = '/static/images/no-img.png';

const tvPost = props => (
  <Layout>
    <h1 className="center">the below content has been imported from <a href="https://www.tvmaze.com" target="_blank" rel="noopener noreferrer">TVmaze.com</a></h1>
    <Layout2>
      <h1>{props.show.name}</h1>
      <h2>Type: {props.show.type ? props.show.type : 'no data'}</h2>
      <h2>Premiered: {props.show.premiered ? props.show.premiered : 'no data'}</h2>
      <h2>status: {props.show.status ? props.show.status : 'no data'}</h2>
      <h2>Rating: {props.show.rating.average ? props.show.average : 'no data'}</h2>
      <img src={props.show.image ? props.show.image.medium : noimage} alt="no image"/>
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <h2>Link: 
        <a href={props.show.url}
            target="_blank"
            rel="noopener noreferrer"
            title={props.show.url}>
        {props.show.url ? props.show.url : 'null'}
        </a>
      </h2>
    </Layout2>
  </Layout>
);

tvPost.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`);
  const show = await res.json();
  
  console.log(show);

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default tvPost;