import './App.css';
import Header from './components/header/Header';
import KanbanBoard from './components/kanbanBoard/KanbanBoard';
import Sidebar from './components/sidebar/Sidebar';
import TaskForm from './components/taskForm/TaskForm';
import useModal from './hooks/useModal';

function App() {
  const { showModal } = useModal();
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row relative">
        {showModal && <TaskForm />}
        <Sidebar />

        <main className="flex-1 flex flex-col min-h-0">
          <Header />
          <KanbanBoard />
        </main>
      </div>
    </>
  );
}

export default App;
