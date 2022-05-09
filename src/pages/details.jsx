import React from 'react'
import SearchDetails from '../components/Search_details'
import thunderstorm from '../images/Thunderstorm.png'
import '../styles/details.css'

const Details = ({data, loading, openSearch, setOpenSearch}) => {
  return (
    <div>
      {openSearch ? 
        null 
      :
        <div className="details">
        
        <div className="summary">
          {loading ? 
            <h1>Loading...</h1> : 

            data.forecast.forecastday.map((res) => (
              <div className="summary_card" key = {res.date}>
                <h2> {res.date} </h2>

                <img src={res.day.condition.icon} alt="" />
      
              <div className="summary_card--temp">
                <span>{res.day.maxtemp_f}℉</span>
                <span>{res.day.maxtemp_c}℃</span>
              </div>
            </div>
          ))
          }
        </div>
        <div className="highlights">
          <h1>Today's Highlights </h1>
          <div className="highlight">
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

              {loading ? 
                <h1>Loading...</h1> 
                  :
                <p className='value'>  <span>{data.current.humidity}</span>%  </p>
              } 

              {loading ? 
                <h1>Loading...</h1> 
                  :
                <div className="extra">
                  <progress value={data.current.humidity} max="100"></progress>
                </div>
              }
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

        {/* Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a> */}
      </div>
        }
    </div>
  )
}

export default Details