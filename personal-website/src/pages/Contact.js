import React from 'react'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faAt} from '@fortawesome/free-solid-svg-icons'




export default function Contact(){


    return(
        
        <React.Fragment>
            <div  id="contacts" className='background'>
                <div style={{paddingTop:"100px"}}>
                    <div class="container content-group">
                        <h1 id='contact-title'>Contact</h1>
                        <div className='icon-group'>
                            <h2 className='icon-frame'><a href="mailto:hafizspaceumar@gmail.com"><FontAwesomeIcon className='icon' icon={faAt}></FontAwesomeIcon></a></h2>
                            <h2 className='icon-frame'><a href="https://linkedin.com/in/hafiz-umar-81219b217" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faLinkedin}></FontAwesomeIcon></a></h2>
                        </div>
                    </div>  
                </div>
            </div>

        </React.Fragment>

    )




}