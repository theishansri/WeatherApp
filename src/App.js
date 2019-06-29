import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Namelist from './components/Namelist';
// import StyleSheet from './components/Inline'
// import Form from './components/Form'
// import LifeCycle from "./components/LifeCycle"
// import Fragment from "./components/Fragment"
// import RefsDemo from "./components/RefsDemo"
// import FocusInput from "./components/FocusInput"
// import FocusParentInput from "./components/FRParentInput"
// import Hero from "./components/Hero"
// import ErrorBoudry from "./components/ErrorBoudry"
// import LexForm from "./components/Lex_form_Validation"
// import Home from "./components/lex_router/Home"
// import Redirect_Nav from "./components/lex_router/Redirect_Nav"
// import {BrowserRouter,Route,Switch,Redirect,Link} from "react-router-dom"
// import AddAuthor from "./components/lex_router/AddAuthor"
// import Contact from "./components/lex_router/Contact"
// import Books from "./components/lex_router/Books"
// import ReduxDemoLex from "./components/lex_router/ReduxDemoLex"
import Titles from "./components/WeatherApp/Titles"
function App() {
  
  return (
    <div className="App">
        
        {/* <BrowserRouter>
          <Redirect_Nav />
          <div>
            <Switch>
              <Route exact path="/AddAuthor" component={AddAuthor}></Route>
              <Route exact path="/Books" component={Books}/>
              <Route exact path="/ContactUs" component={Contact}/>
              <Route exact path="/" render={()=><Redirect to="/Books"/>}/>
            </Switch>
          </div>
        </BrowserRouter> */}
        {/* <ReduxDemoLex/> */}
        <Titles/>
    </div>
  );
}

export default App;
