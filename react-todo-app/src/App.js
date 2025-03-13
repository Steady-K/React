import React, { useState } from 'react';
import './App.css';
import Lists from './components/Lists.js';
import Form from './components/Form.js';

export default function App() {
  const [todoData, setTodoData] = useState([]); // 초기값은 빈 배열로 설정
  const [value, setValue] = useState('');

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
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3 ">
          <h1>할 일 목록</h1>
          <button onClick={() => setTodoData([])}>전체 삭제</button>
        </div>

        {/* Lists 컴포넌트에 todoData와 setTodoData를 전달 */}
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
