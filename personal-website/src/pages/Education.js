import React from 'react'
import Card from "react-bootstrap/Card"
import CloseButton from 'react-bootstrap/esm/CloseButton'


export default function Education(props){
    console.log(props.active)
    console.log(props.inactive)

    let card_jsx=[]

    for (let i = 0; i<props.educationFromJson.length; i++){

        let content = (
        
            <React.Fragment  key={i}>
                <div className={props.active.includes("e"+i)?"card-container col card-container-animate":props.inactive.includes("e"+i)?"card-container col card-container-animate-reverse":"card-container col"} style={{ width: '20rem' }}>
                    <div className={props.active.includes("e"+i)?"card-container-inner card-container-inner-animate":props.inactive.includes("e"+i)?"card-container-inner card-container-inner-animate-reverse":"card-container-inner"}> 
                        <div className="card-front" onClick={()=>props.onClick("e"+i)}>
                            <div className='card-back-inner'>
                                <h1 className='card-back-title'>{props.educationFromJson.length!==0?props.educationFromJson[i].institute:""}</h1>
                            </div>   
                        </div>
                            <div className="card-back">     
                                <Card.Body className='card-body'>
                                    <CloseButton  onClick={()=>props.onClickReverseAnimate("e"+i)} style={{ position:"absolute", right:"20px"}} />
                                    <Card.Title style={{fontSize:"30px", width:"90%"}}>{props.educationFromJson.length!==0?props.educationFromJson[i].institute:""}</Card.Title>
                                    <Card.Subtitle className="card-subtitle mb-2" style={{fontSize:"20px"}}>{props.educationFromJson.length!==0?props.educationFromJson[i].duration:""}</Card.Subtitle>
                                    <div className="card-divider"></div>
                                    <Card.Text className="card-text" style={{fontSize:"25px"}}>{props.educationFromJson.length!==0?props.educationFromJson[i].cert:""}</Card.Text>
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
            <div  id="education" className='background'>
                <div className='shade'>
                    <div class="container components">
                        <h1 className='panel-title'>Education</h1>
                        <h2 className='subtitle'>(Pick a card)</h2>
                        
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
                            {card_jsx}
                        </div>

                    </div>  
                </div>
            </div>

        </React.Fragment>


    )



}