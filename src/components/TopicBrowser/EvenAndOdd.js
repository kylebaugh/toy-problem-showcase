import React, { Component } from "react";

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }


render(){
        return(
            <div>
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>

                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}>
                </input>

                <button className='confirmationButton' onClick={(e) => {this.assignEvenAndOdds(this.state.userInput)}}>
                    Split
                </button>

                <span className='resultsBox'>
                    Evens: {(this.state.evenArray)}
                </span>
                <span className='resultsBox'>
                    Odds: {(this.state.oddArray)}
                </span>

            </div>
            
        </div>
        )
    }


    handleChange(val){
        this.setState({userInput: val})
        console.log(this.state.userInput)
    }

    assignEvenAndOdds(userInput){
        console.log(userInput)
        let asdf = userInput.split(",");
        console.log(asdf)
        let evens = [];
        let odds = [];
 
            for(let i = 0; i < asdf.length; i++){
                if (asdf[i] % 2 === 0){
                    evens.push(asdf[i])
                }
                else if (asdf[i] % 2 !== 0){
                    odds.push(asdf[i])
                }
            }  

        this.setState({evenArray: evens, oddArray: odds})

    }
}

export default EvenAndOdd