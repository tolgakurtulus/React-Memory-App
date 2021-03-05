import React from 'react';
import Card from "./Card"

const Cards = ({ list, setList }) => {

    return (
        <div className="col-6 col-lg-9">
            <div className="row">
                {setList.map(todo => (
                        <Card 
                            name={list.name}
                            description={list.description}
                            places={list.places}
                            date={list.date}
                            url={list.url}
                        />
                ))}

            </div>
        </div>
    );
}

export default Cards