import prisma from '@/utils/db';

const prismaHandlers = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: 'wake up',
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allTasks;
};

const PrismaPage = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      <h1>Prisma</h1>
      {tasks.map((task) => {
        return (
          <h2
            key={task.id}
            className='text-2xl'>
            {task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaPage;
