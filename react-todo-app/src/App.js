import React, { useState } from 'react';
import './App.css';
import List from './components/List.js';

export default function App() {
  const [todoData, setTodoData] = useState([]); // 초기값은 빈 배열로 설정
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기
    setTodoData((prev) => [...prev, newTodo]);
    setValue(''); // 입력 필드 비우기
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        {/* List 컴포넌트에 todoData와 setTodoData를 전달 */}
        <List todoData={todoData} setTodoData={setTodoData} />

        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: '10', padding: '5px' }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange} // 텍스트 입력시 상태 업데이트
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: '1' }}
          />
        </form>
      </div>
    </div>
  );
}
