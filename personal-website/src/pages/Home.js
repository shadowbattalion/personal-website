import React from 'react'
// import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image';
// import logo from '../logo.png'
import ha from '../images/ha.png'
import ain from '../images/ain.png'
import mim from '../images/mim.png'


export default function Home(){


    return(

        <React.Fragment>
            <div  id="home" className='background'>
                <div id="components">
                    <div id="logo-outer-box">
                        <div id="logo-inner-box">
                            <Image id='logo-ha' src={ha} fluid />
                            <Image id='logo-mim' src={mim} fluid />
                            <Image id='logo-ain' src={ain} fluid />
                        </div>
                    </div>

                    <div id="intro">
                        <h1 id="title">HELLO! I AM HAFIZ</h1>
                        <h2 id="sub-title">Welcome to my personal website!</h2>
                    </div>
                </div>   
            </div>

        </React.Fragment>


    )



}