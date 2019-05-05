import React, {Component} from 'react';
import "./app.css";


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        this.update_counter = this.update_counter.bind(this);
    }
    componentDidMount(){
        this.interval = setInterval(()=> {
            this.update_counter();
        }, 1000);
    }
    update_counter() {
        console.log(this.state.count);
        this.setState({
            count: ++this.state.count
        })
    }

  render() {
    return (
        <div>Demo {this.state.count}</div>)
  }
}