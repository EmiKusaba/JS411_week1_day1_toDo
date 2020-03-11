import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
      isClicked: false
    }};
    onChange = e => {
      this.setState({
        text: e.target.value
      })
    }
   
    render() {
      console.log("This is state***", this.state.isClicked)
    
  return (
    <div className="App">
      <header className="App-header">
       <h1>To Do List</h1>
       <form>
       <input></input>
       </form>
        <button onClick = {this.props.isClicked}>Submit</button>
      </header>
    </div>
  );
}
}  
export default App;
