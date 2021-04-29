import React from 'react';
import IndivMusician from './indivMusician';

function Musicians(props) {

    if (props.musicians !== undefined) {

        let musicians = props.musicians
        
        const musiciansMapped = musicians.map(musician => <IndivMusician musician={musician} key={musician.id} />)

        return (
            <div>
                <ul className="musicianList" >
                    { musiciansMapped }
                </ul>
            </div>
        );
    } else {
        return <div><h1>Loading...</h1></div>
    }
    
}

export default Musicians;