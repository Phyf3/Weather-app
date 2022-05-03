import React from 'react'
import thunderstorm from '../images/Thunderstorm.png'
import '../styles/details.css'

const Details = () => {
  return (
    <div className="details">
      <div className="summary">
        <div className="summary_card">
          <h2>Tomorrow </h2>

          <img src={thunderstorm} alt="" />

          <div className="summary_card--temp">
            <span>10 °C</span>
            <span>18 °C</span>

          </div>
        </div>
        <div className="summary_card">
          <h2>Tomorrow </h2>

          <img src={thunderstorm} alt="" />

          <div className="summary_card--temp">
            <span>10 °C</span>
            <span>18 °C</span>

          </div>
        </div>
        <div className="summary_card">
          <h2>Tomorrow </h2>

          <img src={thunderstorm} alt="" />

          <div className="summary_card--temp">
            <span>10 °C</span>
            <span>18 °C</span>

          </div>
        </div>
        <div className="summary_card">
          <h2>Tomorrow </h2>

          <img src={thunderstorm} alt="" />

          <div className="summary_card--temp">
            <span>10 °C</span>
            <span>18 °C</span>

          </div>
        </div>
        <div className="summary_card">
          <h2>Tomorrow </h2>

          <img src={thunderstorm} alt="" />

          <div className="summary_card--temp">
            <span>10 °C</span>
            <span>18 °C</span>

          </div>
        </div>
      </div>
      <div className="highlights">
        <h1>Today's Highlights </h1>
        <div className="highlight_card">
          <h2>Wind Status</h2>

          <p className='value'>7 mph</p>

          <div className="extra">
            <p>WSW</p>
          </div>
        </div>

        <div className="highlight_card">
          <h2>Wind Status</h2>

          <p className='value'>7 mph</p>

          <div className="extra">
            <p>WSW</p>
          </div>
        </div>

        <div className="highlight_card">
          <h2>Wind Status</h2>

          <p className='value'>7 mph</p>

          <div className="extra">
            <p>WSW</p>
          </div>
        </div>

        <div className="highlight_card">
          <h2>Wind Status</h2>

          <p className='value'>7 mph</p>

          <div className="extra">
            <p>WSW</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details