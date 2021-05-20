import './App.css';
import MyForm from './components/MyForm';
import CounterContainer from './container/CounterContainer';
import Home from './page/Home';
import About from './page/About';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';

function App() {
  // const onSubmit =(form : {name:string; description : string}) =>{
  //   console.log(form);
  // }
  return (
    <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/about/:tab?/:id?' component={About}  />
    </Switch>
  </Router>
  );
}

export default App;
