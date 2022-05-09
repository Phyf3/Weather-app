import React, { useState } from 'react'
import close from '../images/icon-close-menu.svg'
import '../styles/search.css'
import http from '../http-config'
import SearchDetails from './Search_details'


const Search = ({openSearch, setOpenSearch}) => {

    const [value, setValue] = useState("")
    const [searching, setSearching] = useState(true);
    const [searchData, setSearchData] = useState("")
    const handleSearch = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const searchQuery = data.get('query')
        console.log(searchQuery)
        setValue(searchQuery)

        try {
            const key = process.env.REACT_APP_API_KEY
            const response = await http.get(`/forecast.json?key=${key}&q=${searchQuery}&days=10&aqi=no&alerts=no`)
            console.log(response.data)
            setSearchData(response.data)
            setSearching(false)
        } catch(err) {
            console.log(err.response?.data || err.message)
        } finally {
            setSearching(false)
        }
    }
  return (
    <div className='search'>
        <div className="search_overview">
            <header>
                <img onClick = {() => setOpenSearch(false)} src={close} alt="" />
            </header>

            <div>
                <form  onSubmit={handleSearch}>
                    <input type="text" name='query' placeholder='Search Location' />

                    <button type='submit'> Search </button>
                </form>
            </div>

            {value === '' ? <section>
                <h1>"NO Content searched"</h1> 
            </section> : 
            <section>
                <section>
                {searching ? null :
                    <img src={searchData.current.condition.icon} alt="" />
                }
                </section> 

                <section>
                    {searching ? null :
                    <div className='degree' >
                        <h1>  <span>{searchData.current.feelslike_c}</span>°C </h1>
                    </div>}
                    {searching ? 
                        null 
                        :
                        <div className='weather-type'>
                            <h2>{searchData.current.condition.text}</h2>
                        </div>
                    }
                    <div className='day'>
                        <span>Today</span>
                        <span>Fri,5 Jun</span>
                    </div>
                    {searching ? null :
                    <div className="location">
                        {searchData.location.name}
                    </div>}
                </section> 
            </section>
            }
        </div>
       
        {value === '' ? null : 
        <div className="seach_details">
            <main>
                <SearchDetails searching = {searching} searchData = {searchData} />
            </main>
        </div>
        }
        
    </div>
  )
}

export default Search