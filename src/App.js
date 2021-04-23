import React, { Component } from 'react';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'

//Topics
// import EvenAndOdd from './components/TopicBrowser/EvenAndOdd'
// import FilterObject from './components/TopicBrowser/FilterObject'
// import FilterString from './components/TopicBrowser/FilterString'
// import Palindrome from './components/Topics/Palindrome'
// import Sum from './components/Topics/Sum'

class App extends Component {
  render() {
    return(
      <div>
    <TopicBrowser />
    </div>
    )
  }
}

export default App;

