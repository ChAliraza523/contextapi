import React, { useContext,useState } from 'react';
import counterContext from './CounterContext';
const Child = () => {
    let counterValue = useContext(counterContext)
    let [ismorning,setmorning]=useState(true);

    return (

        <div class={`box ${ismorning ? 'dayLight':""}`}>
            <h2>This is first Child using counterContext</h2>
            <h4>counter value is :{counterValue}</h4>
            
            <button onClick={() => { counterValue[1](++counterValue[0]) }}>Inceament context</button>
            <br/>
            <h1>Good {ismorning ? 'morning':"night"}</h1>
            <button onClick={()=>setmorning(!ismorning)}>update day</button>

        </div>
    )
}
export default Child;
// import React,{useContext} from 'react';
// import counterContext from './ConterContext';
// const Child = () => {
//     let counterValue =useContext(counterContext);
//     return (
//         <div>
//             <h2>this is first Child using counterContext</h2>
//             <h4>counter value is :{counterValue}</h4>
//             <button OnClick={() => {counterValue[1](++counterValue[0])}}>update counter</button>
//         </div>

//     )
// }
// export default Child;