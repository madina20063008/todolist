// import React, { useState } from "react";

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");

//   const addTask = () => {
//     if (task.trim() !== "") {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//   };

//   const removeTask = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4 text-green-700">Todo List</h2>
//       <div className="flex mb-4">
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           placeholder="Enter a task"
//         />
//         <button
//           onClick={addTask}
//           className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700"
//         >
//           Add
//         </button>
//       </div>
//       <ul>
//         {tasks.map((t, index) => (
//           <li key={index} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
//             <span>{t}</span>
//             <button onClick={() => removeTask(index)} className="text-red-500 hover:text-red-700">
//               ✖
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index]);
  };

  const saveTask = (index) => {
    const updatedTasks = tasks.map((t, i) => (i === index ? editingText : t));
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-green-700">Todo List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter a task"
        />
        <button
          onClick={addTask}
          className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
            {editingIndex === index ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ) : (
              <span>{t}</span>
            )}
            <div className="flex space-x-2">
              {editingIndex === index ? (
                <button onClick={() => saveTask(index)} className="text-blue-500 hover:text-blue-700">
                  ✔
                </button>
              ) : (
                <button onClick={() => editTask(index)} className="text-yellow-500 hover:text-yellow-700">
                  ✎
                </button>
              )}
              <button onClick={() => removeTask(index)} className="text-red-500 hover:text-red-700">
                ✖
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;