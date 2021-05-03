
import './App.css';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMusicians } from './redux/actions/getMusicians';
import Musicians from './components/musicians';

function App2() {

    const musicians = useSelector((state) => {
        // console.log("state", state.musicianReducer.musicians)
        return state.musicianReducer.musicians
    })

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMusicians());
        // eslint-disable-next-line
    },[])

    if (musicians.length > 0) {
        return (
            // console.log("musicians", musicians),
            <div className="App">
                <h1>Female Musicians</h1>
                <h2 style={{color: "blue"}} >Functional Component &amp; Redux Hooks</h2>
                <Musicians musicians={musicians} />
            </div>
        );
    } else {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}

export default App2;
