import React, { useEffect } from 'react';

const Card = ({nameVal, descriptionVal, placesVal, dateVal, urlVal, lists, key }) => {

    
      useEffect(() => {
        // UpdateVal the document title using the browser API
        console.log("TEST", nameVal);
        console.log("TEST3", key);
        console.log("TEST2", lists);
        console.log("TEST5", lists[0].nameVal);
      });
    

    return (
        // <img src="https://image.shutterstock.com/image-photo/amazing-bird-eyes-view-maldives-600w-724331194.jpg" className="card-img-top" alt="photo" />
        <div className="card text-center col-12 col-lg-6">
                    <div className="card-header">
                        {placesVal}
                    </div>
                    <img src={urlVal} className="card-img-top" alt={nameVal} />

                    <div className="card-body">
                        <h5 className="card-title">{nameVal}</h5>
                        <p className="card-text">{descriptionVal}</p>
                    </div>
                    <div className="card-footer text-muted">
                        {dateVal}
                    </div>
                </div>
    );
}

export default Card