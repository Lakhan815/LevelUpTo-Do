import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="player">
          <div className="playername">
            <h1>Player 1</h1>
          </div>

          <div className="container">
            <div className="playerlevel" id="myLevel">
              1
            </div>
            <div id="myProgress">
              <div className="progressbar" id="myBar">
                0%
              </div>
            </div>
          </div>
        </div>

        <div className="taskinput">
          <input type="text" placeholder="Add task here" />
          <button type="submit" required>
            Add
          </button>
          <div className="days">
            <label>
              <input id="daily" type="radio" value="daily" name="daytype" />
              Daily
            </label>
            <label>
              <input id="todo" type="radio" value="todo" name="daytype" />
              To-Do
            </label>
            <span id="todo" className="active"></span>
            <label>
              <input id="weekly" type="radio" value="weekly" name="daytype" />
              Weekly
            </label>
          </div>
          <div className="worktype">
            <label>
              <input
                id="knowledge"
                type="radio"
                value="knowledge"
                name="growthcat"
              />
              Knowledge
            </label>
            <label>
              <input
                id="strength"
                type="radio"
                value="strength"
                name="growthcat"
              />
              Strength
            </label>
            <label>
              <input
                id="selfcare"
                type="radio"
                value="selfcare"
                name="growthcat"
              />
              Self-Care
            </label>
            <label>
              <input
                id="housework"
                type="radio"
                value="housework"
                name="growthcat"
              />
              Housework
            </label>
          </div>
          <div className="controls">
            <div className="filters">
              <select name="filter" id="filter">
                <option value="all">All</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="todo">To-Do</option>
                <option value="knowledge">Knowledge</option>
                <option value="strength">Strength</option>
                <option value="selfcare">Self-Care</option>
                <option value="housework">Housework</option>
              </select>
            </div>
          </div>
        </div>
        <ul className="taskbox"></ul>
      </div>
    </div>
  );
}

export default App;
