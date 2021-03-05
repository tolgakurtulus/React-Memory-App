import React from 'react';

const Card = ({name, description, places, date, url}) => {

    return (
        <div className="col-6 col-lg-9">
            <div className="row">
                <div className="card text-center col-12 col-lg-6">
                    <div className="card-header">
                        Featured
                    </div>
                    <img src="https://image.shutterstock.com/image-photo/amazing-bird-eyes-view-maldives-600w-724331194.jpg" className="card-img-top" alt="photo" />
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
                
                <div className="card text-center col-12 col-lg-6">
                    <div className="card-header">
                        {places}
                    </div>
                    <img src={url} className="card-img-top" alt={name} />

                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer text-muted">
                        {date}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card