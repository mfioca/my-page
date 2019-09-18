import React from 'react'
import Link from 'next/link'


const tvMazePagestyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  backgroundColor: 'white',
}

const linkStyle = {
  marginRight: 15,
  fontSize: 20
}

function TvMazeHeader() {
  return (
    <div>
      <Link href="/tvpage">
        <a style={linkStyle}>Search Page</a>
      </Link>
    </div>
  )
}

export default function TvMazePage(props) {
  return (
    <div style={tvMazePagestyle}>
      <TvMazeHeader />
      {props.children}
    </div>
  )
}
