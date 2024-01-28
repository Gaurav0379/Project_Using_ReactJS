# Project_Using_ReactJS

>>To Create React App
npx create-react-app project-1
cd project-1

npx:node package execution

>> To Run Application
npm start


>>Components:
    1.Function
    2.Class

>>States:    
    It will store data for the component
    
>>Hooks:
   It can be used to manipulate the data stored in the states
   i.useState() -- this method will be used to manipulate the data
   ii.import {useState} from 'react'; -- how to import the function
   iii.const [count,setCount] = useState(); 
       a.count : it is a variable
       b.setCount: it is method/function


>>Props:
  to transfer the data from parent component to child component , props are used.
  for example: 
           parent component: in App.js <FuntionComponent name="Gaurav" age={14}/>
           to access the data in the child component FunctionComponent.jsx
                     {props.name} or {props.age}


>>Routing:
   to use routers: npm i react-router-dom
   Router-->Routes-->Route(like /home , /about etc...)
   Our main application should be wrapped up inside the Browser Router


>>Layouts/HOC's(High Order Components):
    i.This increases the code reusebility and provide additional Features to the existing components
    ii.Suppose we have 3 pages in our application,
    1st page --> Home Page     have navigation bar with slider of type n
    2nd page --> Movies Page   have navigation bar type m
    3rd page --> About Page    have navigation bar with slider of type n
    
As we can see that 1st and 3rd page have same type of nav bar , hence instead of writing the code for both the pages separately we will design a layout(component) of that nav bar and call that in both the pages