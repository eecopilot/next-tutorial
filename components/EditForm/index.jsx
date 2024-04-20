// 'use client';
import { editTask } from '@/utils/actions';

const EditForm = ({ task }) => {
  const { id, completed, content } = task;
  return (
    <form
      action={editTask}
      className='max-w-sm p-12 border border-base-300 rounded-lg my-4'>
      <input
        type='hidden'
        name='id'
        value={id}
      />

      <input
        type='text'
        name='content'
        required
        defaultValue={content}
        className='input input-bordered w-full'
      />
      <div className='form-control'>
        <label
          className='label cursor-pointer'
          htmlFor='completed'>
          <span className='label-text'>completed</span>
          <input
            type='checkbox'
            name='completed'
            className='checkbox checkbox-primary checkbox-sm'
            defaultChecked={completed}
            id='completed'
          />
        </label>
      </div>
      <button
        type='submit'
        className='btn btn-primary btn-block btn-sm'>
        Edit
      </button>
    </form>
  );
};

export default EditForm;
