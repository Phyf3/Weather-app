import React from 'react'
import pointer from '../images/target.svg'
import '../styles/overview.css'
import shower from '../images/Shower.png'


const Overview = () => {
  return (
    <div className='overview'>
        <header className='overview_header' >
            <div className='search_btn-container' >
                <button>Search for places </button>
            </div>

            <div>
                <img className='pointer' src={pointer} alt="" />
            </div>
        </header>

        <main>
            <section>
                <img src={shower} alt="" />
            </section> 

            <section>
                <div className='degree' >
                    <h1> <span>15</span>°C </h1>
                </div>
                <div className='weather-type'>
                    <h2>Shower</h2>
                </div>
                <div className='day'>
                    <span>Today</span>
                    <span>Fri,5 Jun</span>
                </div>
                <div className="location">
                    Helsinki
                </div>
            </section>
        </main>
    </div>
  )
}

export default Overview