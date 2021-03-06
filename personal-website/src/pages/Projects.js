import React from 'react'
import Card from "react-bootstrap/Card"
import CloseButton from 'react-bootstrap/esm/CloseButton'

export default function Projects(props){

    console.log(props.projectsFromJson.title)


    let card_jsx=[]

    for (let i = 0; i<props.projectsFromJson.length; i++){

        let content = (
        
            <React.Fragment  key={i}>

                <div className={props.active.includes("p"+i)?"card-container col card-container-animate":props.inactive.includes("p"+i)?"card-container col card-container-animate-reverse":"card-container col"} style={{ width: '20rem' }}>
                    <div className={props.active.includes("p"+i)?"card-container-inner card-container-inner-animate":props.inactive.includes("p"+i)?"card-container-inner card-container-inner-animate-reverse":"card-container-inner"}> 
                        <div className="card-front" onClick={()=>props.onClick("p"+i)}>
                            <div className='card-back-inner'>
                                <h1 className='card-back-title'>{props.projectsFromJson.length!==0?props.projectsFromJson[i].title:""}</h1>
                            </div>   
                        </div>
                        <div className="card-back">     
                            <Card.Body className='card-body'>
                                <CloseButton  onClick={()=>props.onClickReverseAnimate("p"+i)} style={{ position:"absolute", right:"20px"}} />
                                <Card.Title className="card-title" style={{fontSize:"30px", width:"90%"}}>{props.projectsFromJson.length!==0?props.projectsFromJson[i].title:""}</Card.Title>
                                <Card.Subtitle className="card-subtitle mb-2" style={{fontSize:"20px"}}>{props.projectsFromJson.length!==0?props.projectsFromJson[i].association:""}</Card.Subtitle>
                                {props.projectsFromJson.length!==0 && props.projectsFromJson[i].website!=="" ? <h5>Website: <a className='website-link' href={props.projectsFromJson[i].website} target="_blank" rel="noopener noreferrer">{props.projectsFromJson[i].title+" Website"}</a></h5>:""}
                                {props.projectsFromJson.length!==0 && props.projectsFromJson[i].github!=="" ? <h5>Github: <a className='website-link' href={props.projectsFromJson[i].github} target="_blank" rel="noopener noreferrer">{props.projectsFromJson[i].title+" Github"}</a></h5>:""}
                                <div className="card-divider"></div>
                                <Card.Text className="card-text" style={{fontSize:"25px"}}>{props.projectsFromJson.length!==0 && props.projectsFromJson[i].description!==""?props.projectsFromJson[i].description:""}</Card.Text>
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
            <div  id="projects" className='background'>
                <div className='shade'>
                    <div class="container components">
                        <h1 className='panel-title'>Projects</h1>
                        <h2 className='panel-subtitle'>(Pick a card)</h2>
                        
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
                            {card_jsx}
                        </div>

                    </div>  
                </div>
            </div>

        </React.Fragment>

    )

    

}