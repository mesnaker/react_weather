    const Week = ({weather}) => {
    const weeks = weather?.slice(0, 7)
    const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  return (
    <section className="week">
    <h2 className="week-title">На неделю</h2>
    <ul className="week__list">
        {weeks?.map((day, idx) => (
        <li key={idx} className="week__list-day">
            <h3>{idx === 0 ? 'Сегодня' : weekDays[new Date(day.dt * 1000).getDay()]}</h3>
            <h4>{new Date(day.dt * 1000).toLocaleDateString('ru-Ru', {month: 'long', day: 'numeric'})}</h4>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="ПОГОДА" />
            <h5>{Math.round(day?.temp.max)}°</h5>
            <h6>{Math.round(day?.feels_like.day)}°</h6>
            <p>{day.weather[0].description}</p>
        </li>
        ))}
    </ul>
    </section>
  )
}

export default Week