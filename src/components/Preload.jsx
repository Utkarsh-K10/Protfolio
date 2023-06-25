import React from 'react'

const Preload = (props) => {
  return (
    <div id={props.load ? 'preloader' : 'non-preloader'}></div>
  )
}

export default Preload