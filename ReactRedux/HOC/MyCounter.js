import React, { Component } from 'react'

// HOC with Counter functionality
const withCounter = WrappedComponent => {
    class WithCounter extends Component{
        constructor(props){
            super(props);
            this.state={
                count:0
            }           
        }
        incrementCount = () =>{
          this.setState({
              count: this.state.count+1
          })
      }
        render(){
            return <WrappedComponent count={this.state.count} incrementCount = {this.incrementCount} {...this.props}/>
        }
    }
    return WithCounter
}

// HOC functions and data are passed as props
export class MyCounter extends Component {
    constructor(props){
        super(props);
            this.state={
                title:"Higher Order Component",
                desc: "Can Reuse functionalities, by passing as props to the component"
            }        
    }
    render() {
        let {count, incrementCount} = this.props
        return (
            <div>
                <h2>{this.state.title}</h2>
                <h3>{this.state.desc}</h3>
                <button onClick={incrementCount}>Clicked {count}</button>
            </div>
        )
    }
}

export default withCounter(MyCounter)