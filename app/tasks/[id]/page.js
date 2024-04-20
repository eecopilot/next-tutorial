import EditForm from '@/components/EditForm';
import Link from 'next/link';
import { getTask } from '@/utils/actions';
const SingleTaskPage = async ({ params }) => {
  const { id } = params;
  // console.log(id);
  const task = await getTask(id);
  return (
    <div className='mb-16'>
      <Link
        className='btn btn-accent'
        href={'/tasks'}>
        back to tasks
      </Link>
      <EditForm task={task} />
    </div>
  );
};

export default SingleTaskPage;
