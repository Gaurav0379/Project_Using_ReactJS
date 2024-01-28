
import './App.css';
import ClassComponent from './component/ClassComponent.jsx';
import FunctionComponent from './component/FunctionComponent.jsx';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
function App() {
  var res = "DSQ";
  const [count , setCount] = useState(0);
  const [name,setName] = useState('Gaurav');
  return (
      <Routes>
        <Route path='/' element={<ClassComponent/>}/>
        <Route path='/function' element={<FunctionComponent name={name} setName={setName} age={14} residency={res} count = {count} setcount = {setCount}/>}/>
      </Routes>
    
    /*<ClassComponent/>
  <FunctionComponent name={name} setName={setName} age={14} residency={res} count = {count} setcount = {setCount} />*/
     
  );
}

export default App;
