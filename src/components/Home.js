import React from 'react';
import Image from '../assets/Image.jpg'

const Home = ({name, paragraph})=>{

    return(
    <div>
        <div className="home_container">
            <div className="home_head_wrapper">
            < h1 > Hello I'm <br></br> <span>{name}</span></h1>
            <p>{paragraph}</p>
            </div>
            <div className="image_container">
                <div className="bg">
                <img src={Image} alt="Author"></img>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Home;