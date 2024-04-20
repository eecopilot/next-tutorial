'use client';
import { useRef } from 'react';
import { createTaskCustom } from '../../utils/actions';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending: isSubmitting } = useFormStatus();
  return (
    <button
      type='submit'
      className='btn btn-primary join-item'
      disabled={isSubmitting}>
      creat task
    </button>
  );
};

const TaskFormCustom = () => {
  const ref = useRef(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await createTaskCustom(formData);
        ref.current?.reset();
      }}>
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type hrere'
          name='content'
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default TaskFormCustom;
