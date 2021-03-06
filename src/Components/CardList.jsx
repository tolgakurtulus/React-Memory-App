import React from 'react';
import Card from "./Card"

const CardList = ({ lists }) => {

    return (
        <div className="col-6 col-lg-9">
            <div className="row">
                {lists.map(list => (
                    <Card 
                        nameVal={list.nameVal}
                        descriptionVal={list.descriptionVal}
                        placesVal={list.placesVal}
                        dateVal={list.dateVal}
                        urlVal={list.urlVal}
                        key={list.id}
                        lists={lists}
                    />
                ))}

            </div>
        </div>
    );
}

export default CardList