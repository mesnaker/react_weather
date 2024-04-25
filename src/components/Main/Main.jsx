import React from 'react'
import Today from './Today/Today'
import Week from './Week/Week'
import { useSelector } from "react-redux"
import Loader from './Loader'

const Main = () => {
  const weatherInfo = useSelector((state) => state.weather.data)
  return (
    <main className="container main">
        { weatherInfo ? (
          <>
            <Today weather={weatherInfo}/>
            <Week weather={weatherInfo?.daily}/>

          </>
        ) : (
            <Loader/>

        ) }
    </main>
  )
}

export default Main