import React, { Component } from 'react'
import Layout from '../components/layout'
import CSS from '../components/style.css'
import Layout2 from './tv_info/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'



const TvPage = props => (
  <Layout>
    <h1 className="center">the below content has been imported from <a href="https://www.tvmaze.com" target="_blank" rel="noopener noreferrer">TVmaze.com</a></h1>
      <Layout2>
        <h1>Batman TV Shows</h1>
          <ul>
            {props.shows.map(show => (
              <li key={show.id}>
                <Link as={`/p/${show.id}`} href={`/tvpost?id=${show.id}`}>
                  <a>{show.name}</a>
                </Link>
              </li>
              ))}
          </ul>
          <ul>
            {props.shows.map(show => (
              <li key={show.id}>
               
                <p><img src={show.image.medium} />{show.name}</p>
                
              </li>
              ))}
          </ul>
      </Layout2>
  </Layout>
);

TvPage.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default TvPage;