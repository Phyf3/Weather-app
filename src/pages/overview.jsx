import React, {useState, useEffect} from 'react'
import pointer from '../images/target.svg'
import '../styles/overview.css'
import shower from '../images/Shower.png'

const Overview = ({data, loading, getLattLong}) => {
return (
<div className='overview'>
    <header className='overview_header' >
        <div className='search_btn-container' >
            <button>Search for places </button>
        </div>

        <div>
            <img onClick={getLattLong} className='pointer' src={pointer} alt="" />
        </div>
    </header>

    <main>
        <section>
        {loading ? <h1>Loading...</h1> :
            <img src={data.current.condition.icon} alt="" />
        }
        </section> 

        <section>
            {loading ? <h1>Loading...</h1> :
            <div className='degree' >
                <h1>  <span>{data.current.feelslike_c}</span>°C </h1>
            </div>}
            {loading ? 
                <h1>Loading ...</h1> 
                :
                <div className='weather-type'>
                    <h2>{data.current.condition.text}</h2>
                </div>
            }
            <div className='day'>
                <span>Today</span>
                <span>Fri,5 Jun</span>
            </div>
            {loading ? <h1>Loading ...</h1> :
             <div className="location">
                {data.location.name}
            </div>}
        </section>
    </main>
</div>
)
}

export default Overview