import React, { Component } from 'react'

class Counter extends Component {
    
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count}</button>
            </div>
        )
    }
}

export class RenderProps extends Component {
    render() {
        return (
            <div>
                <RenderCounter render = {(count, incrementCount) => (
                    <Counter count={count} incrementCount={incrementCount} />
                )}/>
            </div>
        )
    }
}
class RenderCounter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    incrementCount = () => {
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default RenderProps
