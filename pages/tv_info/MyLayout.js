import React from 'react'

const layout2Style = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function Layout2(props) {
  return (
    <div style={layout2Style}>
      {props.children}
    </div>
  )
}
