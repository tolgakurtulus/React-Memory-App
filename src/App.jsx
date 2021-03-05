import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Header from "./Components/Header"
import Form from "./Components/Form"
import Card from "./Components/Card"


const App = () => {

  let [list, setList] = useState([]);
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
        <Card 
          list={list}
          setList={setList}
        />
        <Form 
          list={list}
          setList={setList}
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
