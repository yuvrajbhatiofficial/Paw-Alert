import React ,{useState,} from "react";


const LocationButton = () => {
    const [address, setaddress] = useState("")
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log(`Google Maps Link: https://www.google.com/maps?q=${latitude},${longitude}`);
      setaddress(`https://www.google.com/maps?q=${latitude},${longitude}`)
    });
  };


  return (
    <>
    <button onClick={handleLocation}>
      Get Current Location
    </button>
    <h3>{address}</h3>
    
    </>
    
    
  );
};

export default LocationButton;
