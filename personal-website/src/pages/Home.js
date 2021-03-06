import React from 'react'
import Image from 'react-bootstrap/Image';
import ha from '../images/ha.png'
import ain from '../images/ain.png'
import mim from '../images/mim.png'



export default function Home(){


    return(

        <React.Fragment>
            <div  id="home" className='background-home'>
                <div className="components">
                  
                    <small  id="image-credit">Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">NASA</a> on <a href="https://unsplash.com/s/photos/website-space-nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></small>
                    <div id="logo-outer-box">
                        <div id="logo-inner-box">
                            <Image id='logo-ha' src={ha} fluid />
                            <Image id='logo-mim' src={mim} fluid />
                            <Image id='logo-ain' src={ain} fluid />
                        </div>
                    </div>

                    <div id="intro">
                        <h1 id="title">HELLO! I AM <span id="title-name">HAFIZ</span></h1>
                        <h2 id="sub-title">Welcome to my personal website!</h2>
                    </div>

                    
                </div>   
            </div>

        </React.Fragment>


    )



}