import React from 'react'
import temp from '../../../assets/images/temp.svg'
import press from '../../../assets/images/press.svg'
import prec from '../../../assets/images/prec.svg'
import wind from '../../../assets/images/wind.svg'
import cloud from '../../../assets/images/cloud.svg'

const Today = ({weather}) => {
    const city = weather?.local_names.ru ?? weather?.local_names.en
    function getDate(offset){
        const date = new Date(new Date().getTime() + offset * 1000)
        const hours = ('0' + date.getUTCHours()).slice(-2)
        const minutes = ('0' + date.getUTCMinutes()).slice(-2)
        return `${hours}:${minutes}`
    }
  return (
    <section className="today">
        <div className="today__left">
            <h1>{Math.round(weather?.current.temp)}°</h1>
            <h2>Сегодня</h2>
            <h3>Время: {getDate(weather?.timezone_offset)}</h3>
            <h3>Город: {city}</h3>
            <img src={`https://openweathermap.org/img/wn/${weather?.current.weather[0].icon}@4x.png`} alt="ПОГОДА" />
        </div>
        <div className="today__right">
            <ul className="today__right-list">
                <li>
                    <img src={temp} alt="" />
                    <h3>Температура</h3>
                    <p>{Math.round(weather?.current.temp)}° - {Math.round(weather?.current.feels_like)}°</p>
                </li>
                <li>
                    <img src={press} alt="" />
                    <h3>Давление</h3>
                    <p>{weather?.current.pressure} мм ртутного столба - нормальное</p>
                </li>
                <li>
                    <img src={wind} alt="" />
                    <h3>Осадки</h3>
                    <p>{weather?.current.humidity ? weather?.current.humidity + '%': "Без осадков"}</p>
                </li>
                <li>
                    <img src={prec} alt="" />
                    <h3>Ветер</h3>
                    <p>{weather?.current.wind_speed} м/с юго-запад - легкий ветер</p>
                </li>
            </ul>
            <img src={cloud} alt="" className="cloud" />
        </div>
    </section>
  )
}

export default Today