import CSS from '../components/style.css'
import Layout from '../components/layout';
import Layout2 from './tv_info/MyLayout';
import fetch from 'isomorphic-unfetch';

const noimage = '/static/images/no-img.png';


const tvPost = props => (
  <Layout>
    <h1 className="center">the below content has been imported from <a href="https://www.tvmaze.com" target="_blank" rel="noopener noreferrer">TVmaze.com</a></h1>
    <Layout2>
      <div className="Fsize-2">
        <h1>{props.show.name}</h1>
        <p><b>Type:</b> {props.show.type ? props.show.type : 'no data'}</p>
        <p><b>Premiered:</b> {props.show.premiered ? props.show.premiered : 'no data'}</p>
        <p><b>status:</b> {props.show.status ? props.show.status : 'no data'}</p>
        <p><b>Rating:</b> {props.show.rating.average ? props.show.average : 'no data'}</p>
        <p>
          {/* since tvmaze api json has genre as an imbedded array,
            pulls the data in genres in a key map to list all entries*/}
          <b>Genre:</b> &nbsp;
          {props.show.genres.map(genre => (
            <span key={props.show.genres}>
            {genre} &nbsp;
            </span>
          ))}
        </p>
        <img src={props.show.image ? props.show.image.medium : noimage} alt="no image"/>
        <p>{props.show.summary.replace(/<[/]?p>/g, '').replace(/<[/]?b>/g, '').replace(/<[/]?i>/g, '')}</p>
        <p>Link: 
          <a href={props.show.url}
              target="_blank"
              rel="noopener noreferrer"
              title={props.show.url}>
          {props.show.url ? props.show.url : 'null'}
          </a>
        </p>
      </div>
    </Layout2>
  </Layout>
);

tvPost.getInitialProps = async function(context) {
  const { id } = context.query;
  //pules tvmaze api json based on selected show on the search page.
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  
  console.log(show);

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default tvPost;