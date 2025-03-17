// TodoItem.tsx
import React from 'react';
import { TodoItemType } from './types'; // Import the type

type TodoItemProps = {
    todo: TodoItemType;
    onToggleDone: (id: number) => void;
    onDeleteTodo: (id: number) => void;
};

export function TodoItem({ todo, onToggleDone, onDeleteTodo }: TodoItemProps) {
    return (
        <div className={`w-full m-5 rounded-box p-3 flex ${todo.done ? 'bg-indigo-900' : 'bg-indigo-700'}`}>
            <span className="pr-8">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={todo.done}
                    onChange={() => onToggleDone(todo.id)}
                />
            </span>
            <span className={`flex-grow ${todo.done ? 'line-through' : ''}`}>
                {todo.description}
            </span>
            <div>
                <button className="btn btn-error btn-outline btn-xs" onClick={() => onDeleteTodo(todo.id)}>
                    X
                </button>
            </div>
        </div>
    );
}
