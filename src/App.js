import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, Form } from 'react-bootstrap';



function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [obj, setObj] = useState({});
  const [arr, setArr] = useState([{
    text: "This is a sample todo App",
    isDone: false
  }]);

  
  let markTodo = (index) => {
    const newTodos = [...arr];

    newTodos[index].isDone = true;
      setArr(newTodos); 
  };


  let removeTodo = (index) => {
    const newTodos = [...arr];
      newTodos.splice(index,1);
      setArr(newTodos); 
   
  };

  const addTodo = text => {
    const newTodos = [...arr, { text }];
    setArr(newTodos);
    setText("")
   };


  return (
    <div className="App">
      <header className="App-header">
      <h1>Todo App</h1>
        <input className='mb-2'
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Enter text"
        />
         <Button className='mb-2' variant="outline-danger" onClick={() => addTodo(text)}>Submit</Button>
       
        {/* <p>{text}</p> */}

        {arr.map((todo, index) => {
          return <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }} className='ms-2'>{todo.text}</span> <span className='ms-2'></span>
      <div className='mb-2 ms-2'>
        <Button className='ms-2' variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button className='ms-2' variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>;
          
        })}

      </header>
    </div>
  );
}

export default App;
