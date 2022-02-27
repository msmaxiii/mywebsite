import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Project from "./Pages/Project"
import NavBar from "./Components/NavBar"
import Footer from "./Footer/Footer"

function App(){
  return (
    <div className="App">
      <NavBar/>
      
      <Switch>
        <Route exact path='/'component={Home}/>
        <Route path='/About'component={About}/>
        <Route path='/Project'component={Project}/>
       
      </Switch>


      <Footer/>
    </div>
  );
}

export default App;
