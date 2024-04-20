// import TaskForm from '@/components/taskForm';
import TaskList from '@/components/taskList';
import TaskFormCustom from '@/components/taskFormCustom';

const TasksPage = () => {
  return (
    <div className='max-w-lg'>
      {/* <TaskForm /> */}
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};

export default TasksPage;
