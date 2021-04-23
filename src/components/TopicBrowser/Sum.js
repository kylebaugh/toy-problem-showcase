import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0, 
            sum: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.addNumbers = this.addNumbers.bind(this)
    }

   handleChange(num){
        this.setState({
            number1: parseInt(num, 10)
        })
    }

    handleChange2(num){
        this.setState({
            number2: parseInt(num, 10)
        })
    }

    addNumbers(num1, num2){
        let n1 = num1
        let n2 = num2
        console.log(num1)
        console.log(num2)
        let total = (n1 + n2)
        this.setState({
            sum: total
        })
    } 

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>

                <input className="inputLine"
                 onChange={(e) => this.handleChange(e.target.value)}
                 />

                <input className="inputLine"
                 onChange={(e) => this.handleChange2(e.target.value)}
                 />

                <button className="confirmationButton"
                 onClick={() => this.addNumbers(this.state.number1, this.state.number2)}
                 >Add 'em Up!</button>

                <span className="resultsBox sumPB">Sum: {this.state.sum} </span>
            </div>
        )
    }
}

export default Sum