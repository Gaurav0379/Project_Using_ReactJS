import React, { useState } from 'react';

function FunctionComponent(props){
    //const [count,setCount] = useState(0);
     
     const [changedage,setChangedage] = useState();
    return(
        <div className='Fuc'>
            <h3>Fuction Component</h3>
            <button onClick={()=>props.setcount(props.count+1)} >Click here to increment the count by 1</button>
            <button onClick={()=>props.setcount(props.count-1)}>Click here to decrement the count by 1</button>
            <h2>{props.count}</h2>
            <p>My name is {props.name}</p>
            <p>My age is {changedage}</p>
            <p>My residency is {props.residency}</p>
            <input type='text' onChange={(e)=>props.setName(e.target.value)} />
            <input type='text' onChange={(e)=>setChangedage(e.target.value)} />
            
        </div>
    );
}

export default FunctionComponent;