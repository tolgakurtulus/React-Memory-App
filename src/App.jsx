import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Header from "./Components/Header"
import Form from "./Components/Form"
import CardList from "./Components/CardList"


const App = () => {

  let [lists, setLists] = useState([]);
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [places, setPlaces] = useState("");
  let [date, setDate] = useState("");
  let [url, setUrl] = useState("");



  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <div className="row">
        <CardList 
          lists={lists}
          setLists={setLists}
        />
        <Form 
          lists={lists}
          setLists={setLists}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          places={places}
          setPlaces={setPlaces}
          date={date}
          setDate={setDate}
          url={url}
          setUrl={setUrl}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
