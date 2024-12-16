import React from 'react'
import './BCard.scss'

const BCard = () => {
  return (
    <div className="card">
  <div className="back"></div>
  <div className="front">
    <div className="imgset">
         <img width="100%" src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png" />
       </div>
  </div>
  <div className="text-container">
    <p id="head">Happy Birthday Aniket</p>
    <p>I hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy!</p>
    <p>Hope your day goes great!</p>
  </div>
</div>
  )
}

export default BCard
