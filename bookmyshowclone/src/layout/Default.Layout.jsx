import React from 'react'
import Navbar from '../components/Navbar/Navbar.Component'


const DefaultLayoutHOC = (Component) =>  ({...props}) => {
  return (
    <div>
      <Navbar/>
      <Component {...props}/>
    </div>
  )
}

export default DefaultLayoutHOC