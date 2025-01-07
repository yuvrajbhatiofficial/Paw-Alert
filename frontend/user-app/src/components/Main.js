import { useState } from "react";
import LocationButton from "./LocationButton";

export default function Main() {
  const [formData, setFormData] = useState({
    petName: "",
    description: "",
    currentLocationUrl: "",
    addressLineOne: "",
    addressLineSecond: "",
    landmark: "",
    zipcode: "",
    city: "",
    state: "",
    contactInfo: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressSelect = (locationUrl) => {
    setFormData((prevData) => ({ ...prevData, currentLocationUrl: locationUrl }));
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    
    Object.keys(formData).forEach(key => {
      if (key !== 'image') {
        formDataToSend.append(key, formData[key]);
      }
    });
    
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      const response = await fetch("http://localhost:8000/user/upload-pet-data", {
        method: "POST",
        body: formDataToSend,
      });
      
      if (response.ok) {
        console.log('Upload successful');
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    alert("report send successfully")
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Report a Pet</h1>
      <div className="space-y-4">
        <div className="mb-4">
          <label htmlFor="image-upload" className="block mb-2 text-sm font-medium text-gray-900">
            Choose an image
          </label>
          <input
            id="image-upload"
            type="file"
            name="image"
            onChange={(e) => {
              const file = e.target.files[0];
              setFormData({ ...formData, image: file });
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImagePreview(reader.result);
                };
                reader.readAsDataURL(file);
              } else {
                setImagePreview(null);
              }
            }}
            accept="image/*"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
          {imagePreview && (
            <div className="mt-2">
              <img src={imagePreview} alt="Preview" className="max-w-full h-auto rounded-lg" />
            </div>
          )}
        </div>
        <input
          type="text"
          name="petName"
          value={formData.petName}
          onChange={handleChange}
          placeholder="Pet Name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="currentLocationUrl"
          value={formData.currentLocationUrl}
          onChange={handleChange}
          placeholder="Current Location URL"
          readOnly={formData.currentLocationUrl !== ""}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />
        <input
          type="text"
          name="addressLineOne"
          value={formData.addressLineOne}
          onChange={handleChange}
          placeholder="Address Line 1"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="addressLineSecond"
          value={formData.addressLineSecond}
          onChange={handleChange}
          placeholder="Address Line 2"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="landmark"
          value={formData.landmark}
          onChange={handleChange}
          placeholder="Landmark"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          placeholder="Zipcode"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          placeholder="Contact Info"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
        <LocationButton onAddressSelect={handleAddressSelect} className="w-full mt-2" />
      </div>
    </div>
  );
}

