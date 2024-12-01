import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    const newTask = { title, description };
    const response = await axios.post(
      "http://localhost:5000/api/tasks",
      newTask
    );
    setTasks([...tasks, response.data]);
    setTitle("");
    setDescription("");
  };

  const updateTask = async (e) => {
    e.preventDefault();
    const updatedTask = { title, description };
    await axios.put(
      `http://localhost:5000/api/tasks/${editingTaskId}`,
      updatedTask
    );
    setTasks(
      tasks.map((task) =>
        task._id === editingTaskId ? { ...task, ...updatedTask } : task
      )
    );
    setTitle("");
    setDescription("");
    setEditingTaskId(null);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const toggleCompletion = async (task) => {
    const updatedTask = { ...task, isCompleted: !task.isCompleted };
    await axios.put(`http://localhost:5000/api/tasks/${task._id}`, updatedTask);
    setTasks(tasks.map((t) => (t._id === task._id ? updatedTask : t)));
  };

  const startEditing = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditingTaskId(task._id);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={editingTaskId ? updateTask : addTask}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">
          {editingTaskId ? "Update Task" : "Add Task"}
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleCompletion(task)}
            />
            <span
              style={{
                textDecoration: task.isCompleted ? "line-through" : "none",
              }}
            >
              {task.title} - {task.description}
            </span>
            <button onClick={() => startEditing(task)}>Edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
