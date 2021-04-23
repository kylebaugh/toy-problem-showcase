import React, {Component} from 'react'

class Palindrome extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''

        }
        this.handleChange = this.handleChange.bind(this)
        this.checkPalindrome = this.checkPalindrome.bind(this)
        // this.checkPalindrome = this.checkPalindrome.bind(this)
    }

    handleChange(val){
        this.setState({
            userInput: val
        })
    }

    checkPalindrome(str){
        let str1 = str
        let len = str1.length
        let other = ''

        for (let i = 0; i < len / 2; i++){

            if (str1[i] !== str1[len - 1 - i]){
                other = 'This is NOT a palindrome'
            }
            else{
                other = 'This IS a palindrome'
            }

        }

        

        this.setState({
            palindrome: other
        })

    }

    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4 >Palindrome Checker</h4>
                    <input className='inputLine'
                    onChange={(e) => this.handleChange(e.target.value)}
                    />

                    <button className='confirmationButton'
                    onClick={() => this.checkPalindrome(this.state.userInput)}
                    >Palindrome?</button>
                    
                    <span className='resultsBox'>
                        {this.state.palindrome}
                    </span>
            </div>
        )
    }
}

export default Palindrome