import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">tbilisi</p>
          <p className="weather-description">sunny </p>
        </div>
        <img src="icons/01d.png" alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">18c</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">feels like</span>
            <span className="parameter-value">22c</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">wind</span>
            <span className="parameter-value">2 mps</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">humidity</span>
            <span className="parameter-value">60%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">preasure</span>
            <span className="parameter-value">15 pha</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
