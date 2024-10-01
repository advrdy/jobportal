import axios from "axios";
import {useState} from "react";

function App() {
  const [a,setA] = useState("");
  const doThis = async () => {
    try {
      const response = await axios.get("http://localhost:3000/home", {
        withCredentials: true,
      });
       setA(response.data.message); // Access the data from the response
       
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const dothat = () => {  
    setA("");
  }

  return (
    <div>
      <button onClick={doThis}>open image</button>
      <button onClick={dothat}>close img</button>
      <img src={a} alt="image" />

    </div>
  );
}

export default App;
