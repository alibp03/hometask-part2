'use client';
import Link from 'next/link';
import Button from 'react-button-alibp';

export default function Home() {
  return (
    <div className="w-80 mx-auto mt-10 flex flex-col gap-6">
      <h1 className="text-xl">Welcome to simple task manager</h1>

      <div>
        <h2>click below button to add new task</h2>
        <Button>
          <Link href="/tasks">add task</Link>
        </Button>
      </div>
    </div>
  );
}
