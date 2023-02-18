import React from 'react'
import './styles.css'

const ViewInfo = ({heroes}) => {
    console.log(heroes)
  return (
    <div className="infoHeroes">
        {heroes.name}{heroes.owner}</div>
  )
}

export default ViewInfo