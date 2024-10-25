import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [firstTaskAdded, setFirstTaskAdded] = useState(false);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTaskObj = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
    setFirstTaskAdded(true);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      {!firstTaskAdded && <p style={{ color: "gray" }}>Add your first task!</p>}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTaskCompletion(task.id)}
            style={{
              cursor: "pointer",
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "gray" : "black",
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
