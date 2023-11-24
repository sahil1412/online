import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import '../../styles/map.css'

const Map = ({ location, zoomLevel }) =>{
    const LocationPin = ({ text }) => (
        <div className="pin">
          <Icon icon={locationIcon} className="pin-icon" />
          <p className="pin-text">{text}</p>
        </div>
      )
      
    return (
        <div className=" md:w-3/4 p-2 w-full hover:shadow-lg transform transition hover:rounded-md hover:-translate-y-2 hover:bg-white hover:shadow-lg">
          <h2 className="py-3 justify-center text-green-500 font-bold text-lg">find us on Google Map</h2>
        
          <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={location}
              defaultZoom={zoomLevel}
            >
              <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
              />
            </GoogleMapReact>
          </div>
        </div>
  )
}
export default Map;