import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';
import CounterContainer from './container/CounterContainer';

function App() {
  const onSubmit =(form : {name:string; description : string}) =>{
    console.log(form);
  }
  return (
    <div className="App">
      <CounterContainer/>
      {/* <MyForm onSubmit ={onSubmit}/> */}
    </div>  
  );
}

export default App;
