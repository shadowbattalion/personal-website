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

    active:[],
    inactive:[]


  }


  click = (card_no) =>{

    this.setState({
      active: [...this.state.active, card_no]
    });



    let card_no_index=this.state.inactive.indexOf(card_no)

    this.setState({
      inactive: [...this.state.inactive.slice(0, card_no_index), ...this.state.inactive.slice(card_no_index + 1)]
    });

  }


  click_reverse = (card_no) =>{


    this.setState({
      inactive: [...this.state.inactive, card_no]
    });


    let card_no_index = this.state.active.indexOf(card_no)

    this.setState({
      active: [...this.state.active.slice(0, card_no_index), ...this.state.active.slice(card_no_index + 1)
      ]
    });


  }


  render (){
    return (
      
        <React.Fragment>
            <NavigationBar />
            <Home />
            <Work active={this.state.active} inactive={this.state.inactive} onClick={this.click} onClickReverseAnimate={this.click_reverse}/>
            <Education />
            <Projects />
            <Contact />
        </React.Fragment>
    
    )

  }
}

export default Base;
