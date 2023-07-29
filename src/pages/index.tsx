import Image from 'next/image'
import { Inter } from 'next/font/google'
import Checkbox from '@/components/Checkbox/Checkbox'
import CreateToDo from '@/components/CreateToDo/CreateToDo'
import {useState} from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [tasks, setTasks] = useState<Array<string>>([]);

  function addTask(task: string) {
    setTasks([task]);
  }

  return (
    <>
      <CreateToDo addTask={addTask} />
      {tasks.map((task, index) => <Checkbox label={task} key={`task-${index}`} />)}
    </>
  )
}
