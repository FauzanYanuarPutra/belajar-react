import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import Label from "./Label";


export default function Todo() {
  const [tasks, setTask] = useState('')
  const [newTask, setNewTask] = useState('')

  function handleAddTask(e) {
    e.preventDefault();
    setTask((prevTask) => [...prevTask, {
      id: Math.floor(Math.random() * new Date),
      name: newTask,
      completed: false
    }])

    setNewTask('')
  }

  function completedTask(id) {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    });
    
    setTask(updatedTask)
  }
  

  function removeTask(id) {
    const remove = tasks.filter(task => task.id !== id)

    setTask(remove)
  }

  return (
    <Card>
      <Card.Title>
        Todo
      </Card.Title>
      <Card.Body>
        <form>
          <div>
            <Label>Todo</Label>
            <div className="flex items-center gap-x-2">
              <Input value={newTask} onChange={(e) => setNewTask(e.target.value)}></Input>
              <Button onClick={handleAddTask } type={'submit'} text={'Add task'}></Button>
            </div>
          </div>
        </form>

        {tasks.length > 0 ? (
          <ol className="mt-5 flex flex-col gap-3">
            {tasks.map((task) => (
                <div key={task.id} className="flex justify-between items-center">
                  <div  className="flex gap-3">
                    <li key={task.id}>{task.name}</li>
                    <p>{task.completed ? 'sudah' : 'belum'}</p>
                  </div>
                  <div className="flex gap-3 text-sm">
                      <Button onClick={() => completedTask(task.id)}>
                        Mark as {task.completed ? 'completed' : 'incompleted'}
                      </Button>
                      <Button onClick={() => removeTask(task.id)}>Remove</Button>
                  </div>
                </div>
            ))}
          </ol>
        ) : null}
      </Card.Body>
      <Card.Footer>
        You have {tasks.length}
      </Card.Footer>
    </Card>
  )
}

