import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ["Wake up!", "Brush teeth!", "Code"],
      newTask: "",
      done: false
    };
  }

  handleChange = event => {
    console.log("here");
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("pressed");
    event.preventDefault();
    let list = [...this.state.toDoList];
    list.push(this.state.newTask);
    this.setState({
      toDoList: list,
      newTask: ""
    });
  };

  handleDelete = newTask => {
    let list = [...this.state.toDoList];
    list.pop(this.state.newTask);
    this.setState({
      toDoList: list,
      newTask: ""
    });
  };

  completedTask = () => {
    console.log("checked");
    this.setState({
      done: true
    });
  };

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="text-center col-8 offset-2 mt-3 bg-danger p-3 rounded">
            <h3 style={{ color: "silver" }} className="mb-4">
              To Do List
            </h3>
            <hr />
            <form>
              <div class="row">
                <div class="col-9">
                  <input
                    type="text"
                    name="newTask"
                    value={this.state.newTask}
                    placeholder="Add New Task"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div class="col-3 text-right noPadding">
                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    className="btn btn-secondary"
                  >
                    Add new Task!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-8 offset-2 p-3 bg-info rounded">
            <ul className="list-group">
              {this.state.toDoList.map((task, index) => (
                <li
                  className="list-group-item float-left"
                  key={index}
                  onClick={this.completedTask}
                >
                  {task}
                  <input
                    type="checkbox"
                    onChange={this.Taskchecked}
                    className="loat-left"
                  />
                </li>
              ))}
            </ul>
            <button
              type="submit"
              onClick={this.handleDelete}
              className="btn btn-secondary mt-3"
            >
              Delete Last Task!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
