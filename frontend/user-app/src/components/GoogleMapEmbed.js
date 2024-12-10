import React from "react";


const GoogleMapEmbed = ({ lat, lng }) => {
  const mapSrc = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${lat},${lng}&zoom=14&maptype=roadmap`;
  console.log(mapSrc)
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Google Map"
        src={`https://maps.google.com/maps?q=${lat},${lng}&z=14&output=embed`}
        width="50%"
        height="100%"
        style={{ border: 0}}
        allowFullScreen
        loading="lazy"
      ></iframe>

      
    </div>
  );
};

export default GoogleMapEmbed;
