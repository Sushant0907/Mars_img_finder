import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";




function Navbar() {



    return(

        <div >
            <div className='nvbr'>
            <ul className='nvli'>

                <div className='lie'><Link  to='/home' ><h2><li>Home</li></h2></Link></div>
                <div className='lie'><Link to='/mars_img_finder' ><h2><li>Mars Image finder</li></h2></Link></div>
                



            </ul>
            <br></br>
            </div>

        </div>

    )
    
}


export default Navbar






