
// App.jsx
import TodoApp from './TodoApp';

import './index.css'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="w-[450px] bg-white rounded-2xl p-8 shadow-lg">
      <TodoApp />
    </div>
    </div>
  );
};

export default App;
