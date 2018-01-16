import React, {Component} from 'react'
import Clock from './Clock.jsx'
import {Form, FormControl, Button} from 'react-bootstrap'
import './App.css'


class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            deadline: 'December 25, 2018',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline})
    }

    render(){
        return(
            <div className="App">
                <div className="Countdown-title">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl className="Input-date-bar" placeholder="Write your date..." onChange={event => this.setState({newDeadline: event.target.value})}/>
                    <Button className="Submit-btn" onClick={() => this.changeDeadline()}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default App