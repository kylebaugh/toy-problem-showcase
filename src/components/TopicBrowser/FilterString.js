import React, {Component} from 'react'

class FilterString extends Component{
    constructor(){
        super()
        this.state = {
            array: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
            userInput: '',
            filteredArray: []

        }
        this.handleChange = this.handleChange.bind(this)
        this.filterArray = this.filterArray.bind(this)
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    filterArray(val){
        let people = this.state.array

        for(let i = 0; i < people.length; i++){
            if(people[i] === val){
                people.splice(i, 1)
            }
        }
    

        this.setState({
            filteredArray: people
        })
    }


    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>

                <span className="puzzleText">Original: { JSON.stringify(this.state.array, null, 10)}</span>

                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>

                <button className="confirmationButton" 
                onClick={ () => this.filterArray(this.state.userInput)}
                >Filter</button>

                <span className="resultsBox filterStringRB">Filter: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>    
        )
    }
}

export default FilterString