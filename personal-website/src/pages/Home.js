import React from 'react'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image';
import logo from '../logo.png'


export default function Home(){


    return(

        <React.Fragment>
            <div  id="home" className='background'>
                
                <div id="logo-box">
                    <Image className='logo' src={logo} fluid />
                </div>

                <div id="intro">
                    <h1 id="title">HELLO! I AM HAFIZ</h1>
                    <h2 id="sub-title">Welcome to my personal website!</h2>
                </div>
                
            </div>

        </React.Fragment>


    )



}