import React, {useState} from 'react';
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



function Mars_img_finder() {
    const [data,setdata]=useState("");
    const[img_body, setimg_body] = useState(<div></div>);
    const[date, setdate] = useState("");

    const getdata = async () => {

        console.log(date);




        const url = "http://localhost:8000/imgs?date="+ date;
        
        fetch(url).then((value) => {
            return value.json()
        }).then((value2) => {

            setdata(value2)
            return value2
        }).then((value2) => {
            console.log(value2)

            setimg_body(
                <div className='shw_d '>
        
                    {value2.photos.map(createCard)}
        
                </div>
            )
        })

    }

    function createCard(x) {

        return (
            <Card src =  {x.img_src}/>
        )       
    }

    function handleChange(event) {
        console.log(event.target.value)
        setdate(event.target.value)
    }




    return(
        <div>
        <Heading />
        <div class="fm">
            
            <input type="text" name="date" id="date" onChange={handleChange} value={date} class="inp"/>
            <button type="submit" class="btn-sub" onClick={getdata} >Submit</button>
        
        </div>
        {img_body}



        </div>
    )

}

export default Mars_img_finder





















