import TaskForm from '@/components/taskForm';
import TaskList from '@/components/taskList';

const TasksPage = () => {
  return (
    <div className='max-w-lg'>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TasksPage;
