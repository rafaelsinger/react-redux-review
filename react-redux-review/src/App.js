import logo from './logo.svg';
import Item from './Item';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setList(prevList => [...prevList, {description: item}]);
  }

  const handleDelete = (index) => {
    setList(prevList => prevList.filter((item, i) => i !== index));
  }

  return (
    <div className='container'>
      <h1 className='title'>To Do List:</h1>
      <div className='input'>
        <p>Enter a task: </p>
        <input type='text' onChange={handleChange} placeholder='Enter your todo...'></input>
        <button type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
      <ul className='todo-list'>
        {list.map((todo, i) => (
          <Item key={i} description={todo.description} handleDelete={() => handleDelete(i)} />
        ))}
      </ul>
    </div> 
  );
}

export default App;
