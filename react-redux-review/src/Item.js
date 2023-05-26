import React from 'react';

const Item = ({description, handleDelete}) => (


    <li className='todo-item'>
        {description}
        <input type='checkbox' onChange={handleDelete} />
    </li>
)

export default Item; 