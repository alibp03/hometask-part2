'use client';

import { useActionState } from 'react';
import Button from 'react-button-alibp';
import Task from '../_components/Task';
import Link from 'next/link';

function action(prevState, formData) {
  const task = formData.get('task');
  if (!task) return prevState;

  prevState.push(task);
  return prevState;
}

function page() {
  const [tasks, formAction, isPending] = useActionState(action, []);

  return (
    <div className="w-96 mx-auto  mt-10 flex flex-col gap-6 items-center relative">
      <div className="absolute -top-2 -left-[35rem]">
        <Button variant="back">
          <Link href="/">Back to Homepage</Link>
        </Button>
      </div>

      <h1 className="text-xl font-semibold ">Create new Tasks</h1>

      <form className="flex gap-2 w-full justify-between" action={formAction}>
        <input
          className="px-3 py-1  border border-gray-300 rounded-sm outline-0"
          placeholder="Task"
          name="task"
        />

        <Button>+ Add</Button>
      </form>

      <div className="flex flex-col gap-4 self-start w-full mt-10">
        {tasks.map((item) => (
          <Task key={item} task={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
