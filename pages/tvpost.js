import Layout from '../components/layout';
import Layout2 from './tv_info/MyLayout';
import fetch from 'isomorphic-unfetch';




const tvPost = props => (
  <Layout>
    <h1 className="center">the below content has been imported from <a href="https://www.tvmaze.com" target="_blank" rel="noopener noreferrer">TVmaze.com</a></h1>
    <Layout2>
      <h1>{props.show.name}</h1>
      <h2>Premier: {props.show.premiered}</h2>
      
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={props.show.image.medium} />
    </Layout2>
  </Layout>
);

tvPost.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log(show);

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default tvPost;