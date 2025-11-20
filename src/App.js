import './App.css'; // Keep your CSS import
import TaskList from './TaskList'; // Import TaskList component

function App() {
  return (
    <div>
      <h1>Welcome to Your Personal Task Manager</h1>
      <TaskList /> {/* Render TaskList here */}
    </div>
  );
}

export default App; // Ensure you export the App component