import React from 'react'

const SearchDetails = ({searching, searchData}) => {
  return (
    <div>
      <div className="details">
          <div className="summary">
            {searching ? 
              <h1>searching...</h1> : 

              searchData.forecast.forecastday.map((res) => (
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
          {searching ? null : <h1>{searchData.location.name}'s Highlights </h1>}
          <div className="highlight">
            <div className="highlight_card">
              <h2>Wind Status</h2>

              {searching ? <h1>searching...</h1> :
                <p className='value'>  <span>{searchData.current.wind_mph}</span>mph  </p>
              }

              <div className="extra">
                <p>WSW</p>
              </div>
            </div>

            <div className="highlight_card">
              <h2>Humility</h2>

              {searching ? 
                <h1>searching...</h1> 
                  :
                <p className='value'>  <span>{searchData.current.humidity}</span>%  </p>
              } 

              {searching ? 
                <h1>searching...</h1> 
                  :
                <div className="extra">
                  <progress value={searchData.current.humidity} max="100"></progress>
                </div>
              }
            </div>

            <div className="highlight_card">
              <h2>Visiblity</h2>

              {searching ? <h1>searching...</h1> :
                <p className='value'>  <span>{searchData.current.vis_miles }</span> miles  </p>
              }
            </div>

            <div className="highlight_card">
              <h2>Air Pressure</h2>

              {searching ? <h1>searching...</h1> :
                <p className='value'>  <span>{searchData.current.pressure_mb }</span> miles  </p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchDetails