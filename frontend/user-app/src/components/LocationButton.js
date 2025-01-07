import React, { useState } from "react";

const LocationButton = ({ onAddressSelect }) => {
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState(null);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setShowMap(true);
      });
    }
  };

  const handleUseThisLocation = () => {
    const googleMapsUrl = `https://maps.google.com/?q=${location.latitude},${location.longitude}`;
    onAddressSelect(googleMapsUrl);
    setShowMap(false);
  };

  return (
    <div>
      <button
        onClick={handleGetLocation}
        className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-150"
      >
        Get Location
      </button>

      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 w-full max-w-3xl">
            <div className="mb-4 h-[400px]">
              <iframe
                title="location"
                width="100%"
                height="100%"
                src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
              ></iframe>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowMap(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleUseThisLocation}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Use This Location
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationButton;
