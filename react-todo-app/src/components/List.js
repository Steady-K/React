import React from 'react';

const List = React.memo(
  ({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
    console.log('List Component');

    const handleCompleteChange = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
    };
    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
      >
        <div
          className={`${
            snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'
          } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-50 border rounded`}
        >
          <div className="items-center">
            <input
              type="checkbox"
              onChange={() => handleCompleteChange(id)}
              checked={completed}
            />
            <span className={completed ? 'line-through' : undefined}>
              {title}
            </span>
          </div>
          <div>
            <button
              className="px-4 py-2 float-right"
              onClick={() => handleClick(id)}
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default List;
