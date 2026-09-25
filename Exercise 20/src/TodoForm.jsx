
// TodoForm.jsx
import { useState, useContext } from 'react';
import TodoContext from './TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (
    <div className="flex gap-3">
      
      <input
      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple-500"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button 
      className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
      onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoForm;
