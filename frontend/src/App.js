import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { ProgressBar } from "./components/ProgressBar";
import { Radio } from "./components/Radio";
import { useSend } from "./hooks/useSend";
import { Tile } from "./components/Tile";

function App() {
  const taskData = {
    task: " cfixode",
    frequency: "Weekly",
    category: "Knowledge",
  };

  const { getAllTasks, createTask } = useSend();

  const [allTasks, setAllTasks] = useState([]);

  const [height, setHeight] = useState(275);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getAllTasks();
      setAllTasks(tasks);
      console.log(tasks);
    };

    fetchTasks();
  }, []);

  const handleText = (text) => {
    taskData["task"] = text;
    console.log(taskData);
  };

  const handleSend = async () => {
    // const taskData = await getAllTasks();
    await createTask(taskData);
  };

  const handleChange = (category, input) => {
    taskData[category] = input;
    console.log(taskData);
  };

  return (
    <div className="App">
      <div className="Wrapper" style={{ height: height }}>
        <h1 style={{ fontSize: 40 }}>Welcome, Player</h1>
        <ProgressBar progress={0}></ProgressBar>
        <div className="taskinput">
          <div className="row">
            <input
              type="text"
              placeholder="Add task here"
              onChange={(e) => handleText(e.target.value)}
            />
          </div>
          <Radio
            inputs={["Daily", "Weekly", "Monthly"]}
            category={"frequency"}
            handleChange={handleChange}
          />
          <Radio
            inputs={["Knowledge", "Strength", "Self-Care", "Housework"]}
            category={"category"}
            handleChange={handleChange}
          />
          <Button word={"Add"} handleClick={handleSend}></Button>
        </div>
        <div>
          {allTasks.map((data, index) => (
            <Tile data={{ data }} key={index}></Tile>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
