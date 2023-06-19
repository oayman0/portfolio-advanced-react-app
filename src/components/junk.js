import { useState } from "react";
const ToDo = props => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);


export default function Junk() {
  const [todos, setTodos] = useState([
    {
      id: 'todo1',
      createdAt: '18:00',
    }, 
    {
      id: 'todo2',
      createdAt: '20:30',
    }
  ]);

  const reverseOrder = () => {
    // Reverse is a mutative operation, so we need to create a new array first.
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      {todos.map((todo, index) => (
        <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
      ))}
    </div>
  );
}