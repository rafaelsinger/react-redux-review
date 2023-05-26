import logo from './logo.svg';
import Item from './Item';
import './App.css';
import { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case "add": {
      return [...state, {description: action.description}]
    }
    case "delete": {
      return state.filter((item, i) => i !== action.index);
    }
    default: {
      return state;
    }
  }
}

function App() {

  const [item, setItem] = useState('');
  const [list, dispatch] = useReducer(reducer, []);


  const handleChange = (e) => {
    setItem(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setList(prevList => [...prevList, {description: item}]);
    dispatch({
      type: 'add',
      description: item
    })
  }

  const handleDelete = (index) => {
    // setList(prevList => prevList.filter((item, i) => i !== index));
    dispatch({
      type: 'delete',
      index: index
    })
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
