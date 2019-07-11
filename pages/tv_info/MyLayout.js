import React from 'react'
import Header2 from './Header'



const layout2Style = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  backgroundColor: 'white',
}

export default function Layout2(props) {
  return (
    <div style={layout2Style}>
      <Header2 />
      {props.children}
    </div>
  )
}
