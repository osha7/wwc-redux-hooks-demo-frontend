import React from 'react';

function indivMusician(props) {
    return (
        <li className="musicianItem">
            <div key={props.musician.id} >
                <h3>{props.musician.name}</h3>
                <span>{props.musician.origin}</span>
            </div>
        </li>
    );
}

export default indivMusician;