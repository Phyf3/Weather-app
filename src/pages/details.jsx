import React from 'react'
import thunderstorm from '../images/Thunderstorm.png'
import '../styles/details.css'

const Details = ({data, loading}) => {
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

          {loading ? <h1>Loading...</h1> :
            <p className='value'>  <span>{data.current.wind_mph}</span>mph  </p>
          }

          <div className="extra">
            <p>WSW</p>
          </div>
        </div>

        <div className="highlight_card">
          <h2>Humility</h2>

          {loading ? <h1>Loading...</h1> :
            <p className='value'>  <span>{data.current.humidity}</span>%  </p>
          } 

           {/* <div className="extra">
            <progress value={data.current.humidity} max="100"></progress>
          </div> */}
        </div>

        <div className="highlight_card">
          <h2>Visiblity</h2>

          {loading ? <h1>Loading...</h1> :
            <p className='value'>  <span>{data.current.vis_miles }</span> miles  </p>
          }
        </div>

        <div className="highlight_card">
          <h2>Air Pressure</h2>

          {loading ? <h1>Loading...</h1> :
            <p className='value'>  <span>{data.current.pressure_mb }</span> miles  </p>
          }
        </div>
      </div>
    </div>
  )
}

export default Details