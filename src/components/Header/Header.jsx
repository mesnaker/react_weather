import { useEffect, useState } from 'react'
import logo from "../../assets/images/Logo.svg"
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherInfo } from '../../store/getWeatherSlice'
import { useRef } from 'react'

const Header = () => {
  const [city, setCity] = useState('')
  const dispatch = useDispatch()
  const changeWeather = (city) => {
    dispatch(getWeatherInfo(city))
  }
  const isMounted = useRef(false)
  useEffect(() => {
if (isMounted.current && city) {
  changeWeather(city)
}else{
  changeWeather('Чирчик')
}
  isMounted.current = true
  }, [city])
  
  
  return (
    <header className="header">
      <nav className="container header__nav">
        <a href="" className="logo"><img src={logo} alt="" /></a>
        <input type="search" placeholder='Выбрать город' value={city} onChange={(e)=> setCity(e.target.value)} />
      </nav>
    </header>
  )
}

export default Header