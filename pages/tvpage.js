import React, { Component } from 'react'
import Layout from '../components/layout'
import Layout2 from './tv_info/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const TvPage = props => (
    <Layout>
        <Layout2>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
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