import React, { useState } from 'react';
import Heading from './Heading';
import Card from './Card';
import Search from './Search';
import Navbar from './Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Mars_img_finder from './mars_img_finder';



function App ()  {


        

        
    return(
        <div>
        <Router>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/mars_img_finder" element={<Mars_img_finder /> } /> 

        </Routes>


        {/* <div class="fm">
            
                <input type="text" name="date" id="date" class="inp"/>
                <button type="submit" class="btn-sub" onClick={getdata} >Submit</button>
            
        </div>
        {img_body} */}



        </Router>
        </div>

    )









    
 
}


export default App


















