import React from 'react'
import Card from "react-bootstrap/Card"
import CloseButton from 'react-bootstrap/esm/CloseButton'



export default function Work(props){
    // // {props.active.includes(1)?"card-container-inner card-container-inner-animate":props.inactive.includes(1)?"card-container-inner card-container-inner-animate-reverse":"card-container-inner"}
    // console.log(props.active)
    // console.log(props.inactive)

    // let test = props.active.includes(1)?"card-container col card-container-animate":props.inactive.includes(1)?"card-container col card-container-animate-reverse":"card-container col"
    // console.log(test)
    // let test2 = props.active.includes(1)?"card-container-inner card-container-inner-animate":props.inactive.includes(1)?"card-container-inner card-container-inner-animate-reverse":"card-container-inner"
    // console.log(test2)


    let card_jsx=[]

    for (let i = 0; i<5; i++){

        let content = (
        
            <React.Fragment  key={i}>
                <div className={props.active.includes(i)?"card-container col card-container-animate":props.inactive.includes(i)?"card-container col card-container-animate-reverse":"card-container col"} style={{ width: '20rem' }}>
                    <div className={props.active.includes(i)?"card-container-inner card-container-inner-animate":props.inactive.includes(i)?"card-container-inner card-container-inner-animate-reverse":"card-container-inner"}> 
                        <div className="card-front" onClick={()=>props.onClick(i)}>
                            <div className='card-back-inner'>
                                <h1 className='card-back-title'>HAFIZ</h1>
                            </div>   
                        </div>
                            <div className="card-back">     
                                <Card.Body>
                                    <CloseButton  onClick={()=>props.onClickReverseAnimate(i)} style={{ position:"absolute", right:"20px"}} />
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

            </React.Fragment>
            
            )

        card_jsx.push(content)

    }


    
    return(
        
        <React.Fragment>
            <div  id="work-experiences" className='background'>
                <div className='shade'>
                    <div class="container components">
                        <h1 className='panel-title'>Work Experiences</h1>
                        
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
                            {card_jsx}
                        </div>

                    </div>  
                </div>
            </div>

        </React.Fragment>


    )



}