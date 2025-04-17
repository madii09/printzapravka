import React, { useRef, useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { FaTrafficLight } from 'react-icons/fa';
import { LuRuler } from 'react-icons/lu';
import { FiNavigation } from 'react-icons/fi';
import './MapWithControls.scss';

function MapWithControls() {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [ymapsInstance, setYmapsInstance] = useState(null);
  const [center, setCenter] = useState([40.4267, 71.7447]); // Qoqon
  const [zoom, setZoom] = useState(14);
  const [trafficShown, setTrafficShown] = useState(false);
  const [trafficControl, setTrafficControl] = useState(null);
  const [rulerControl, setRulerControl] = useState(null);

  const handleZoom = (delta) => {
    if (mapInstance) {
      const newZoom = zoom + delta;
      setZoom(newZoom);
      mapInstance.setZoom(newZoom);
    }
  };

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setCenter(coords);
        if (mapInstance) {
          mapInstance.setCenter(coords, 16);
        }
      });
    } else {
      alert("Geolocation not supported.");
    }
  };

  const handleOpenInYandex = () => {
    const [lat, lon] = center;
    window.open(`https://yandex.ru/maps/?ll=${lon},${lat}&z=${zoom}`, '_blank');
  };

  const toggleTraffic = () => {
    if (ymapsInstance && mapInstance) {
      if (!trafficShown) {
        const traffic = new ymapsInstance.control.TrafficControl({ shown: true });
        mapInstance.controls.add(traffic);
        setTrafficControl(traffic);
      } else {
        mapInstance.controls.remove(trafficControl);
        setTrafficControl(null);
      }
      setTrafficShown(!trafficShown);
    }
  };

  const toggleRuler = () => {
    if (ymapsInstance && mapInstance) {
      if (!rulerControl) {
        const ruler = new ymapsInstance.control.RulerControl();
        mapInstance.controls.add(ruler);
        setRulerControl(ruler);
      } else {
        mapInstance.controls.remove(rulerControl);
        setRulerControl(null);
      }
    }
  };

  return (
    <div className="map-container">
      <YMaps query={{ load: 'package.full' }}>
        <Map
          instanceRef={(ref) => {
            mapRef.current = ref;
            setMapInstance(ref);
            if (ref?.constructor?.__ymaps) setYmapsInstance(ref.constructor.__ymaps);
          }}
          defaultState={{ center, zoom }}
          width="100%"
          height="100%"
        >
          <Placemark geometry={center} properties={{ balloonContent: 'Ремонт оргтехника' }} />
        </Map>
      </YMaps>

      {/* Top right controls */}
      <div className="top-right-controls">
        <button onClick={toggleRuler} title="Measure distance">
          <LuRuler size={16} />
        </button>
        <button onClick={toggleTraffic} title="Traffic">
          <FaTrafficLight size={16} color={trafficShown ? 'green' : 'gray'} />
        </button>
      </div>

      {/* Zoom + location controls */}
      <div className="right-controls">
        <button onClick={() => handleZoom(1)}>+</button>
        <button onClick={() => handleZoom(-1)}>−</button>
        <button onClick={handleUseLocation} title="Use my location">
          <FiNavigation size={16} />
        </button>
      </div>

      {/* Bottom left: open in Yandex */}
      <div className="bottom-left">
        <button onClick={handleOpenInYandex}>Open in Yandex Maps</button>
      </div>

      {/* Bottom right: terms */}
      <div className="bottom-right-text">
        © Yandex Terms of Use &nbsp;&nbsp;−600m−
      </div>
    </div>
  );
}

export default MapWithControls;
