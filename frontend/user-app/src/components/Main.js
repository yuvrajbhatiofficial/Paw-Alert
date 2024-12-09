import { useState } from "react";

export default function Main() {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const petData = { petName: name };

    const response = await fetch("http://localhost:8000/user/upload-pet-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(petData),
    });

    if(response.ok){
        console.log("everything is going prerfect")
    }

    alert("data submitted");
    setName("");
    console.log("data fetched from backend");
  };

  return (
    <div>
      <h1>mohammed kaif</h1>
      <div className="submitform">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
