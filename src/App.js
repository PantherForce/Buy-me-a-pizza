// import {BroswerRouter as Router , Routes , Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Order from "./Components/Order";


function App() {
  return (
    <div className="App">
      <Home/>
      <Order/>
     

      {/* <BroswerRouter>
      
      <Routes>
        <Route path="/" element = {<Home/>}> </Route>
        <Route path="/order" element = {<Order/>}></Route>
      </Routes>
      </BroswerRouter>
         */}
        
    </div>
  );
}

export default App;
