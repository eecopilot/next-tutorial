'use client';
import { useEffect } from 'react';
// import { useRef } from 'react';
import { createTaskCustom } from '../../utils/actions';
import { useFormStatus, useFormState } from 'react-dom';
import { toast } from 'react-hot-toast';

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
const initialState = {
  message: '',
};
const TaskFormCustom = () => {
  // const ref = useRef(null);
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === 'error') {
      toast.error('error');
      return;
    }
    if (state.message) {
      toast.success('success');
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/* {state.message ? <p className='mb-2'>{state.message}</p> : null} */}
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
