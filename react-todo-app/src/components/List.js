import React from 'react';

export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };

  const getStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log('newTodoData', newTodoData);
    setTodoData(newTodoData);
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  {
    todoData.map((data) => (
      <div style={getStyle(data.completed)} key={data.id}>
        <input
          type="checkbox"
          onChange={() => handleCompleteChange(data.id)}
          defaultChecked={false}
        />
        {data.title}
        <button style={btnStyle} onClick={() => handleClick(data.id)}>
          x
        </button>
      </div>
    ));
  }
}
