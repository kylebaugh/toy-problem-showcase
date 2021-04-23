import React, {Component} from 'react'

class FilterObject extends Component{
    constructor(){
        super()
        this.state = {
            employees: [{ "name": "Jimmy Joe", 
            "title": "Hack0r", "age": 12 }, 

            { "name": "Jeremy Schrader", "age": 24, 
            "hairColor": "brown" }, 

            { "name": "Carly Armstrong", "title": "CEO" } ],
            
            userInput: '',
            
            filteredEmployees: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.filterEmployees = this.filterEmployees.bind(this)
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }


    filterEmployees(prop){
        let employees = this.state.employees;
        let asdf = [];
        

        for(let i = 0; i < employees.length; i++){
            if (employees[i].hasOwnProperty(prop)){
                asdf.push(employees[i])
            }
            

        }

        this.setState({
            filteredEmployees: asdf
            })

        }
    

    render(){
        console.log(this.state.employees)
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>

                <span className='puzzleText'>Original: 
                { JSON.stringify(this.state.employees, null, 10)}
                </span>
                
                <input className='inputLine' 
                onChange={(e) => this.handleChange(e.target.value)}/>
                
                <button className='confirmationButton'
                onClick={ () => this.filterEmployees(this.state.userInput)}
                >Filter</button>
                
                <span className='resultsBox filterObjectRB'>Filtered: 
                {JSON.stringify(this.state.filteredEmployees, null, 10)}</span>

            </div>
        )
    }
}

export default FilterObject