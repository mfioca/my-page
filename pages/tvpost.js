import CSS from '../components/style.css'
import Layout from '../components/layout';
import Layout2 from './tv_info/MyLayout';
import fetch from 'isomorphic-unfetch';



const tvPost = props => (
  <Layout>
    <h1 className="center">the below content has been imported from <a href="https://www.tvmaze.com" target="_blank" rel="noopener noreferrer">TVmaze.com</a></h1>
    <Layout2>
      <h1>{props.show.name}</h1>
      <h2>Type: {props.show.type}</h2>
      <h2>Premiered: {props.show.premiered}</h2>
      <h2>status: {props.show.status}</h2>
      <h2>Rating: {props.show.rating.average}</h2>
      <img src={props.show.image.medium} />
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <h2>Link: 
        <a href={props.show.url}
            target="_blank"
            rel="noopener noreferrer"
            title={props.show.url}>
        {props.show.url}
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