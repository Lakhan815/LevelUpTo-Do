export const useSend = () => {
  // creates leaderboard from Upload page
  const createTask = async (taskData) => {
    console.log(taskData);
    const response = await fetch(`/api/Tasks/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    });
    return await response.json(); // returns leaderboard id
  };
  const getAllTasks = async () => {
    console.log("getting all tasks");
    const response = await fetch(`api/Tasks`);
    return await response.json();
  };
  return { getAllTasks, createTask };
};
