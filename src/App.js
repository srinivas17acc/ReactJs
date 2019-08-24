import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greed,Test }from './component/Greet'
import Welcome from './component/Welcome'
import Message from './component/Message'
import Counter from './component/Counter'
import FunctionClick from './component/FunctionClick'
import ClickClass from './component/ClickClass'
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent'
import UserGreeting from './component/UserGreeting'
import NameList from './component/NameList';
import StyleSheet from './component/StyleSheet'
import FormComponent from './component/FormComponent';
function App() {
  return (
    <div className="App">

      <FormComponent />
    
        {/* <StyleSheet primary = {true}/> */}
       {/* <NameList /> */}
       {/* <UserGreeting /> */}
       {/* <ParentComponent />  */}
     
       {/* <EventBind />   */}

       {/* <FunctionClick />
       <ClickClass /> */}

       
      {/* <Message /> */}
      {/* <Counter value="2"/> */}
      
      {/* <Greed name="nivas" age ="25" /> */}
      {/*<p>name and age details</p>
      <Greed name = "nivas" age = "26" />
      <button>Action</button>*/}
      
      {/* <Welcome name="srinivasan" age = "25"/> */}
      {/* <Welcome name="nivas" age = "26"/>  */}
r

    </div>
  );
}

export default App;

