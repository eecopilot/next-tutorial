'use server';
import { redirect } from 'next/navigation';
import prisma from './db';
import { revalidatePath } from 'next/cache';

export const getAllTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return tasks;
};

export const createTask = async (formData) => {
  const content = formData.get('content');
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath('/tasks');
};

export const deleteTask = async (formData) => {
  const id = formData.get('id');
  await prisma.task.delete({
    where: {
      id,
    },
  });
  revalidatePath('/tasks');
};

export const getTask = async (id) => {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  });
  return task;
};

export const editTask = async (formData) => {
  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed') === 'on';
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed,
    },
  });
  redirect('/tasks');
};

export const createTaskCustom = async (formData) => {
  const content = formData.get('content');
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath('/tasks');
};
