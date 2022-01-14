import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavigationBar from './pages/NavigationBar';
import Home from './pages/Home'
import Work from './pages/Work';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



class Base extends React.Component {


  state = {

    work_animation_class_name:["card-container", "col"],
    card_no:0


  }


  click = (card_no_chosen) =>{

    this.setState({
      work_animation_class_name: [ card_no_chosen, ...this.state.work_animation_class_name,"card-container-animate"]
    });

  }


  render (){
    return (
      
        <React.Fragment>
            <NavigationBar />
            <Home />
            <Work animation={this.state.work_animation_class_name} onClick={this.click}/>
            <Education />
            <Projects />
            <Contact />
        </React.Fragment>
    
    )

  }
}

export default Base;
