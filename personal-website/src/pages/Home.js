import React from 'react'
import Button from 'react-bootstrap/Button'



export default function Home(){


    return(

        <React.Fragment>
            <div  id="home" className='background'>
                <h1>Home</h1>
                <div>
                    <Button variant="outline-success" disabled size="lg">Click Me!</Button>
                </div>
                
            </div>

        </React.Fragment>


    )



}