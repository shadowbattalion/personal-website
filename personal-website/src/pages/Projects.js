import React from 'react'
import Card from "react-bootstrap/Card"


export default function Projects(props){



    let card_jsx=[]

    for (let i = 0; i<props.educationFromJson.length; i++){

        let content = (
        
            <React.Fragment  key={i}>


                <Card className="project-card-container" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title style={{fontSize:"30px"}}>Card Title</Card.Title>
                        <div className="card-divider"></div>
                        <Card.Text className="project-card-text" style={{fontSize:"20px"}}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content. Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>




                {/* <div className={props.active.includes("e"+i)?"card-container col card-container-animate":props.inactive.includes("e"+i)?"card-container col card-container-animate-reverse":"card-container col"} style={{ width: '20rem' }}>
                    <div className={props.active.includes("e"+i)?"card-container-inner card-container-inner-animate":props.inactive.includes("e"+i)?"card-container-inner card-container-inner-animate-reverse":"card-container-inner"}> 
                        <div className="card-front" onClick={()=>props.onClick("e"+i)}>
                            <div className='card-back-inner'>
                                <h1 className='card-back-title'>HAFIZ</h1>
                            </div>   
                        </div>
                            <div className="card-back">     
                                <Card.Body className='card-body'>
                                    <Card.Title style={{fontSize:"30px", width:"90%"}}>{props.educationFromJson.length!==0?props.educationFromJson[i].institute:""}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"20px"}}>{props.educationFromJson.length!==0?props.educationFromJson[i].duration:""}</Card.Subtitle>
                                    <div className="card-divider"></div>
                                    <Card.Text className="card-text" style={{fontSize:"20px"}}>{props.educationFromJson.length!==0?props.educationFromJson[i].cert:""}</Card.Text>
                                </Card.Body>   
                            </div>
                        </div>
                    </div> */}

            </React.Fragment>
            
            )

        card_jsx.push(content)

    }


    
    return(
        
        <React.Fragment>
            <div  id="projects" className='background'>
                <div className='shade'>
                    <div class="container components">
                        <h1 className='panel-title'>Projects</h1>
                        
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
                            {card_jsx}
                        </div>

                    </div>  
                </div>
            </div>

        </React.Fragment>

    )


    return(

        <React.Fragment>
            <div  id="projects" className='background'>
                <div className='shade components'>
                    <h1 className='panel-title'>Projects</h1>
                    <Card className="card-properties" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                    <Card className="card-properties" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card> 
                    <Card className="card-properties" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>                     
                </div>
            </div>
        </React.Fragment>


    )



}