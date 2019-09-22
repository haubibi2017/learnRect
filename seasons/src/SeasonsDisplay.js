import React from 'react';

const SeasonsDisplay = () =>{
    window.navigator.geolocation.getCurrentPosition(
        ({coords}) =>{console.log(coords.latitude,coords.longitude)}
    );
    return <div> Latitude: </div> 
}

export default SeasonsDisplay;