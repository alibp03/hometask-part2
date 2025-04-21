'use client';

import { useState } from 'react';
import Button from 'react-button-alibp';

function Task({ task }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex gap-2 justify-between">
      <p className={`text-4xl ${checked && ' line-through opacity-60'}`}>{task}</p>
      <div className="space-x-4">
        <Button onClick={() => setChecked(true)}>checked</Button>
      </div>
    </div>
  );
}

export default Task;
