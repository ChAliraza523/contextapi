// export default App;
// import react,{useState} from "react";
// import './App.css';
// import Parent from './Parent';
// import CounterContext from "./CounterContext";



// function App() {
//     let countState =useState(0);
//     return (
//         <counterConimport React, { useState } from 'react';
import react, {useState}from 'react'
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';


function App() {
    let countState = useState(1)
    //  let [count,setCount]=useState(20)
    return (
        <CounterContext.Provider value={countState}>
            <div>
                <Parent />
            </div>
        </CounterContext.Provider>
    );
}
export default App;

// <counterContext.provider value={countState}>
//     <div>
//         <Parent />
//     </div>
// </counterContext.provider>
//     );
// }
// export default App;