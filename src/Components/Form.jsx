import React from 'react';

const Form = ({ lists, setLists, name, setName, description, setDescription, places, setPlaces, date, setDate, url, setUrl }) => {

    const submitDataHandler = (e) => {
        e.preventDefault();
        setLists([
            ...lists,
            { nameVal: name, descriptionVal: description, placesVal: places, dateVal: date, urlVal: url, id: Math.random() * 100 },
        ]);
        setName("");
        setDescription("");
        setPlaces("");
        setDate("");
        setUrl("");
    };
  

    return (
        <div className="col-6 col-lg-3">
            <form>
            <div className="form-group">
                <label htmlFor="InputName">Memory Name</label>
                <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" placeholder="Memory Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="InputDescription">Memory Description</label>
                <input type="text" className="form-control" id="InputDescription" aria-describedby="emailHelp" placeholder="Memory Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="InputPlaces">Places</label>
                <input type="text" className="form-control" id="InputPlaces" placeholder="Places" value={places} onChange={(e) => setPlaces(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="InputDate">Date</label>
                <input type="date" className="form-control" id="InputDate" placeholder="Places" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlFile">Memory Photo</label>
                <input type="text" className="form-control" id="exampleFormControlFile" placeholder="Memory Photo Url" value={url} onChange={(e) => setUrl(e.target.value)}/>
            </div>
            <button type="button" className="btn btn-primary btn-block" onClick={submitDataHandler}>Submit</button>
            </form>
        </div>
    );
}

export default Form