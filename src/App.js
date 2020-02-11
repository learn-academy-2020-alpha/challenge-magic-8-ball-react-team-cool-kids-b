import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: ["Hell yea", "probably not", "maybe some day", "ask another time", "whatever", "most definitely"],
      question: ""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    // write your code here!
    // Update the return statement below to reflect the outcome of your code.
    let randomAnswer = Math.floor(Math.random() * 5)
    switch (randomAnswer) {
        case 0: return answerArray[0]
        break;
        case 1: return answerArray[1]
        break;
        case 2: return answerArray[2]
        break;
        case 3: return answerArray[3]
        break;
        case 4: return answerArray[4]
        break;
        case 5: return answerArray[5]
        break;
    }
    return this.state.question
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value })
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    const answer = this.getAnswer()
    this.setState({ answer: answer })
  }

  render(){
    return (
      <div>
        <h1>Magic 8 Ball</h1>
        <input
          id="inputBox"
          type='text'
          onChange={ this.handleChange }
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p className = "answer"> { this.state.answer } </p>
      </div>
    )
  }


}

export default App;
