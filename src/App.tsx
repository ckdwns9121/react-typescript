import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import MyForm from './components/MyForm';

function App() {
  const onSubmit =(form : {name:string; description : string}) =>{
    console.log(form);
  }
  return (
    <div className="App">
      <Counter/>
      <MyForm onSubmit ={onSubmit}/>
    </div>  
  );
}

export default App;
