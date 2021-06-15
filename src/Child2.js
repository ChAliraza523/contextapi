import React, { useReducer, useState } from 'react';
import CounterReducer from './CounterReducer';
const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer, 1)
    let [ismorning,setmorning]=useState(true);
    console.log(state)
    return (
        <div class={`box ${ismorning ? 'daylight':""}`}>

            <h2>This is second Child using counterreducer</h2>
            <h3>value of the reducer :{state}</h3>
            <button onClick={() => dispatch('INCREMENT')}>increament reducer</button>
            <button onClick={()=>setmorning(!ismorning)}>update day</button>

        </div>
    )


}
export default Child2;
// import React,{useReducer} from react;
// import CounterReducer from './CounterReducer';
// // import { useReducer } from 'react';
// const Child2 = () => {
//     let [state, dispatch] = useReducer(CounterReducer, 1)
//     console.log(state)
//     return(
//         <div>
//             <h2>This is second Child using counterreducer</h2>
//             <h3>value of the reducer :{state}</h3>
//             <button onClick={()=>dispatch('INCREMENT')}>increament reducer</button>
//         </div>
//     )
// }
// export default Child2;