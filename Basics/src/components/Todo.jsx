import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;

      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }

    setTask("");
  };

  const handleUpdate = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newTask = tasks.filter((_, i) => i !== index);
    // console.log(newTask)
    setTasks(newTask);
  };

  return (
    <div className="todo-app">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="What do you need to do"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />

        <button className="todo-button" type="submit">
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </form>

      <ul className="todo-list">
        {tasks.map((task, index) => {
          return (
            <li className="todo-item" key={index}>
              <input type="checkbox" />
              <span className="todo-text">{task}</span>

              <div className="todo-actions">
                <button
                  className="todo-delete-btn"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>

                <button
                  className="todo-update-btn"
                  onClick={() => {
                    handleUpdate(index);
                  }}
                >
                  Update
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
