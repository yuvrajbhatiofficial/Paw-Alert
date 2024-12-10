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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
   
    const response = await fetch("http://localhost:8000/user/upload-pet-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if(response.ok){
        console.log("everything is going prerfect")
        alert("data submitted");
        setFormData({
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
        console.log("data fetched from backend");
    }

  };

  return (
    <div>
    <h1>Report a Pet</h1>
    <div className="submitform">
      <input
        type="text"
        name="petName"
        value={formData.petName}
        onChange={handleChange}
        placeholder="Pet Name"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="currentLocationUrl"
        value={formData.currentLocationUrl}
        onChange={handleChange}
        placeholder="Current Location URL"
      />
      <input
        type="text"
        name="addressLineOne"
        value={formData.addressLineOne}
        onChange={handleChange}
        placeholder="Address Line 1"
      />
      <input
        type="text"
        name="addressLineSecond"
        value={formData.addressLineSecond}
        onChange={handleChange}
        placeholder="Address Line 2"
      />
      <input
        type="text"
        name="landmark"
        value={formData.landmark}
        onChange={handleChange}
        placeholder="Landmark"
      />
      <input
        type="number"
        name="zipcode"
        value={formData.zipcode}
        onChange={handleChange}
        placeholder="Zipcode"
      />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
      />
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
      />
      <input
        type="text"
        name="contactInfo"
        value={formData.contactInfo}
        onChange={handleChange}
        placeholder="Contact Info"
      />
      <button onClick={handleSubmit}>Submit</button>
      <LocationButton />
    </div>
  </div>
);
}

