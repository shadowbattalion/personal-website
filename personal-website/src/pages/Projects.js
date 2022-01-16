import React from 'react'
import Card from "react-bootstrap/Card"


export default function Projects(props){

    console.log(props.projectsFromJson.title)


    let card_jsx=[]

    for (let i = 0; i<props.projectsFromJson.length; i++){

        let content = (
        
            <React.Fragment  key={i}>


                <Card className="project-card-container" style={{ width: '20rem' }}>
                    {/* <Card.Img variant="top" src="holder.js"/> */}
                    <div size={{height:"100px", border:"1px red solid"}}></div>
                    <Card.Body>
                        <Card.Title style={{fontSize:"30px"}}>{props.projectsFromJson.length!==0?props.projectsFromJson[i].title:""}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"20px"}}>{props.projectsFromJson.length!==0?props.projectsFromJson[i].association:""}</Card.Subtitle>
                        <div className="card-divider"></div>
                        <small>Website: <a href={props.projectsFromJson.length!==0?props.projectsFromJson[i].website:""}>{props.projectsFromJson.length!==0?props.projectsFromJson[i].title+" Website":""}</a> </small>
                        <small>Github: <a href={props.projectsFromJson.length!==0?props.projectsFromJson[i].website:""}>{props.projectsFromJson.length!==0?props.projectsFromJson[i].title+" Github":""}</a> </small>
                        <Card.Text className="project-card-text" style={{fontSize:"20px"}}>
                            <p>{props.projectsFromJson.length!==0?props.projectsFromJson[i].description:""}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>


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
                            <Card className="project-card-container" style={{ width: '20rem' }}>
                                <Card.Img variant="top" size={{height:"20px", border:"1px red solid"}}/>
                                <Card.Body>
                                    <Card.Title style={{fontSize:"30px"}}>Personal Website</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"20px"}}>Self</Card.Subtitle>
                                    <div className="card-divider"></div>
                                    <Card.Text className="project-card-text" style={{fontSize:"20px"}}>
                                        <p>This personal website is created from scratch!</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="project-card-container" style={{ width: '20rem' }}>
                                <Card.Img variant="top" size={{height:"20px", border:"1px red solid"}}/>
                                <Card.Body>
                                    <Card.Title style={{fontSize:"30px"}}>Future Projects</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"20px"}}>Self</Card.Subtitle>
                                    <div className="card-divider"></div>
                                </Card.Body>
                            </Card>
                            <Card className="project-card-container" style={{ width: '20rem' }}>
                                <Card.Img variant="top" size={{height:"20px", border:"1px red solid"}}/>
                                <Card.Body>
                                    <Card.Title style={{fontSize:"30px"}}>Future Projects With You!</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"20px"}}></Card.Subtitle>
                                    <div className="card-divider"></div>
                                </Card.Body>
                            </Card>

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