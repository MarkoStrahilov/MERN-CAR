import React from 'react'
import {MapContainer,Marker,Popup, TileLayer} from 'react-leaflet'

import useFetch from '../hooks/useFetch'

const Map = ({location}) => {

    const {data:coordinates, error,loading} = useFetch(`http://api.positionstack.com/v1/forward?access_key=f399f07961b8fdad9b1694caebe8c511&query=${location.pickup}`)

    if(error) {
        console.log(error)
    }

    if(loading) {
        return <h1>Loading...</h1> 
    }


  return (
    <>
        <MapContainer style={{height: '70vh', width: '100%', marginTop: '8rem'}} center={[coordinates?.data[1].latitude,coordinates?.data[1].longitude]} zoom={12} scrollWheelZoom={false}>

          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'/>

        <Marker position={[coordinates?.data[1].latitude,coordinates?.data[1].longitude]}>
          <Popup>{location?.pickup}</Popup>
        </Marker>

        </MapContainer>
    </>
  )

}

export default Map