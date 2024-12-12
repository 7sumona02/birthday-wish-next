import React from 'react'
import './Cake.scss'

const Cake = () => {
  return (
    <div className="cake h-screen w-screen">
    <div className="plate"></div>
    <div className="layer layer-bottom"></div>
    <div className="layer layer-middle"></div>
    <div className="layer layer-top"></div>
    <div className="icing"></div>
    <div className="drip drip1"></div>
    <div className="drip drip2"></div>
    <div className="drip drip3"></div>
    <div className="candle">
        <div className="flame"></div>
    </div>
</div>
  )
}

export default Cake