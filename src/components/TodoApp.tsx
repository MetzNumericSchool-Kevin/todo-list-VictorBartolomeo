// TodoApp.tsx
import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { TodoItem } from './TodoItem';
import { TodoItemType } from './types'; // Import the type


export function TodoApp() {
    const [todos, setTodos] = useState<TodoItemType[]>([
        { id: 1, description: 'Acheter des oranges', done: false },
        { id: 2, description: 'Courir avec le fraté', done: true },
        { id: 3, description: 'Me faire défoncer à LoL', done: true },
    ]);

    const handleAddTodo = (description: string) => {
        const newTodo: TodoItemType = {
            id: Date.now(), // Simple unique ID for now
            description,
            done: false,
        };
        setTodos([...todos, newTodo]);
    };

    const handleToggleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Sort todos: unfinished first, then finished
    const sortedTodos = [...todos].sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));

    return (
        <>
            <SearchBar onAddTodo={handleAddTodo} />

            <div className="my-5 flex-column gap-5 w-full text-left">
                {sortedTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggleDone={handleToggleDone}
                        onDeleteTodo={handleDeleteTodo}
                    />
                ))}
            </div>
        </>
    );
}