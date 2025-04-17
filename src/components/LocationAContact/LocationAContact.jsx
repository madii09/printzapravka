import React from 'react'
import './LocationAContact.scss'
import LogoSlider from '../LogoSlider/LogoSlider'

const LocationAContact = () => {
  return (
    <section className="contact-section">
  <div className="contact-container">
    <div className="contact-info">
      <div className="icon-circle">📞</div>
      <h2>
        Контактная <span className="highlight">Информация</span>.
      </h2>
      <p className="subtext">
        Свяжитесь с нами для получения дополнительной информации
      </p>
      <ul className="contact-list">
        <li>📍 Сергелийский район, махалля Номданак, улица Файзли, дом 11</li>
        <li>📧 tafakkurxizmatsamarasimchj@gmail.com</li>
        <li>📱 +998 94 051 14 94</li>
        <li>✈️ Телеграм</li>
      </ul>
    </div>

    {/* <div className="divider"></div> */}

    <div className="map-container">
        <div className="contact-map">
      <iframe
        src="https://yandex.com/map-widget/v1/?um=constructor%3Ayour_map_hash"
        width="460"
        height="400"
        frameBorder="0"
        allowFullScreen
        title="Карта"
      ></iframe>
    </div>
    </div>
  </div>

  <LogoSlider />
</section>

  )
}

export default LocationAContact
