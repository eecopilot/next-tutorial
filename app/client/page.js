'use client';
import React, { useState } from 'react';

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Client Page</h1>
      <div>Count: {count}</div>
      <button
        className='btn btn-primary'
        onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default ClientPage;
