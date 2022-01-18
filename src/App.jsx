import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./Components/Header";
import Form from "./Components/Form";
import CardList from "./Components/CardList";

const App = () => {
  let [lists, setLists] = useState([]);
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [places, setPlaces] = useState("");
  let [date, setDate] = useState("");
  let [url, setUrl] = useState("");

  useEffect(() => {
    getLocallists();
  }, []);

  useEffect(() => {
    saveLocallists();
  }, [lists]);

  const saveLocallists = () => {
    localStorage.setItem("lists", JSON.stringify(lists));
  };

  const getLocallists = () => {
    if (localStorage.getItem("lists") === null) {
      localStorage.setItem("lists", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("lists"));
      setLists(todoLocal);
    }
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <div className="row">
          <CardList lists={lists} setLists={setLists} />
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
};

export default App;
