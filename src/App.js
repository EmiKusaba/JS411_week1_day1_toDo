import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
    }
  };

  onClick = e => {
    // Nothing to do if text is empty
    if (this.state.text.length === 0) {
      return;
    }

    this.setState({
      text: '',
      todos: [...this.state.todos, this.state.text],
    })
  };

  onChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  deleteItem = (index) => {
    const newTodos = this.state.todos.slice();
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List</h1>
          <form>
            <input value={this.state.text} onChange={this.onChange}></input>
          </form>
          <button onClick={this.onClick}>Submit</button>
        </header>
        <ul>
          {
            this.state.todos.map((val, index) => {
              return (
                <TodoItem
                  index={index}
                  val={val}
                  status={"green"}
                  handleClick={e => this.deleteItem(index)}
                  handleChange={e => console.log("handleChange")}
                  handleEdit={e => console.log("handleEdit")} />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

class TodoItem extends React.Component {
  render() {
    return (
      <li
        key={this.props.index}
        style={{ color: this.props.status }}
      >
        {this.props.val}
        <button onClick={this.props.handleClick}>Remove</button>
      </li>
    );
  }
}
export default App;
