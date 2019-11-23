import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        ["Drink coffee", ""],
        ["Eat cake", ""],
        ["Dance", ""]
      ],
      newTask: ""
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
    list.push([this.state.newTask, ""]);
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

  completedTask = (index, event) => {
    console.log("checked");
    console.log("index: ", index);
    let doneTask = [...this.state.toDoList];
    console.log("array at index: ", doneTask[index]);
    console.log("all array: ", doneTask);
    // console.log(doneTask[index][1]);
    if (doneTask[index][1] === "") {
      doneTask[index][1] = "underline";
      console.log("should be underline ", doneTask[index][1]);
      // return doneTask[index][1];
    } else {
      doneTask[index][1] = "";
      // console.log("should be empty ", doneTask[index][1]);
    }

    this.setState({
      toDoList: doneTask
    });
  };

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="text-center col-8 offset-2 mt-3 bg-danger p-3 rounded">
            <h3 style={{ color: "white" }} className="mb-4">
              To Do List
            </h3>
            {/* <h1 className="underline">test</h1> */}
            <hr />
            <form className="text-center">
              <div className="row text-center">
                <div className="col-6 offset-2">
                  <input
                    type="text"
                    name="newTask"
                    value={this.state.newTask}
                    placeholder="Add New Task"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-3 text-left noPadding">
                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    className="btn btn-secondary"
                  >
                    Add!
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
                  className={`list-group-item float-left ${task[1]}`}
                  // className={`list-group-item float-left ${task[1]}`}
                  // className={`${task[1]} list-group-item float-left `}
                  key={index}
                  // onClick={this.completedTask}
                >
                  {task[0]}
                  <input
                    type="checkbox"
                    className="loat-left"
                    onChange={e => this.completedTask(index, e)}
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
