import React, { useState } from "react";
import GoogleMapEmbed from "./GoogleMapEmbed";

const LocationButton = ({ onAddressSelect }) => {
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [address, setAddress] = useState("");
  const [locationFetched, setLocationFetched] = useState(false);

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      setAddress(locationUrl);
      setCoords({ lat: latitude, lng: longitude });
      setLocationFetched(true);
      onAddressSelect(locationUrl);
    });
  };

  const handlePass = () => {
    onAddressSelect(address);
    setLocationFetched(false);
  };

  const handleStop = () => {
    setAddress("");
    setCoords({ lat: null, lng: null });
    setLocationFetched(false);
    onAddressSelect("");
  };

  return (
    <>
      {!locationFetched ? (
        <button onClick={handleLocation}>Get Current Location</button>
      ) : (
        <>
          <button onClick={handlePass}>Use This Location</button>
          <button onClick={handleStop}>No, Wait</button>
          {coords.lat && coords.lng && <GoogleMapEmbed lat={coords.lat} lng={coords.lng} />}
        </>
      )}
    </>
  );
};

export default LocationButton;
