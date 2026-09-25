
// TodoItem.jsx
import { useContext } from 'react';
import TodoContext from './TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    
    <li className="flex items-center gap-3 p-3" >
            <input className="w-5 h-5" type="checkbox" checked readOnly />

      <span className="flex-1 text-gray-700"
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
      >
        {todo.text}
      </span>
      <button className="text-red-500 font-semibold hover:text-red-700" onClick={() => dispatch({ type: 'delete', payload: todo.id })}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
