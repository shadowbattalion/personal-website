import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'



import NavigationBar from './pages/NavigationBar';
import Home from './pages/Home'
import Work from './pages/Work';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



class Base extends React.Component {


  state = {

    active:[],
    inactive:[],
    experience : [],
    education : []


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


  async componentDidMount(){


    let details = await axios.get('./json/details.json')
    let experience=details.data.experience
    let education = details.data.education

    this.setState({
      "experience" : experience,
      "education" : education
    })
  }


  render (){
    return (
      
        <React.Fragment>
            <NavigationBar />
            <Home />
            <Work active={this.state.active} inactive={this.state.inactive} onClick={this.click} onClickReverseAnimate={this.click_reverse} experienceFromJson={this.state.experience}/>
            <Education active={this.state.active} inactive={this.state.inactive} onClick={this.click} onClickReverseAnimate={this.click_reverse} educationFromJson={this.state.education}/>
            <Projects educationFromJson={this.state.education}/>
            <Contact />
        </React.Fragment>
    
    )

  }
}

export default Base;
