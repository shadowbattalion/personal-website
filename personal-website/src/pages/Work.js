import React from 'react'
import Card from "react-bootstrap/Card"



export default function Work(props){

    console.log(props.animation)
    
    return(
        
        <React.Fragment>
            <div  id="work-experiences" className='background'>
                <div className='shade'>
                    <div class="container components">
                        <h1 className='panel-title'>Work Experiences</h1>
                        
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
                                
                            <div className={"1 "+props.animation.join(' ')} style={{ width: '20rem' }}>
                                <div className="card-container-inner card-container-inner-animate">
                                    <div className="card-front" onClick={()=>props.onClick("1")}>
                                        <div className='card-back-inner'>
                                            <h1 className='card-back-title'>HAFIZ</h1>
                                        </div>   
                                    </div>
                                    <div className="card-back">     
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                        </Card.Body>   
                                    </div>
                                </div>
                            </div>
                                
                            <div className={"2 "+props.animation.join(' ')} style={{ width: '20rem' }}>
                                <div className="card-container-inner card-container-inner-animate">
                                    <div className="card-front" onClick={()=>props.onClick("2")}>
                                        <div className='card-back-inner'>
                                            <h1 className='card-back-title'>HAFIZ</h1>
                                        </div>   
                                    </div>
                                    <div className="card-back">     
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                        </Card.Body>   
                                    </div>
                                </div>
                            </div>
                                
                            <div className="card-container col" style={{ width: '20rem' }}>
                                <div className="card-container-inner">
                                    <div className="card-front">
                                        <div className='card-back-inner'>
                                            <h1 className='card-back-title'>HAFIZ</h1>
                                        </div>   
                                    </div>
                                    <div className="card-back">     
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                        </Card.Body>   
                                    </div>
                                </div>
                            </div>
                                
                            <div className="card-container col" style={{ width: '20rem' }}>
                                <div className="card-container-inner">
                                    <div className="card-front">
                                        <div className='card-back-inner'>
                                            <h1 className='card-back-title'>HAFIZ</h1>
                                        </div>   
                                    </div>
                                    <div className="card-back">     
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                        </Card.Body>   
                                    </div>
                                </div>
                            </div>
           
                        </div>

                    </div>  
                </div>
            </div>

        </React.Fragment>


    )



}