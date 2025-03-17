// SearchBar.tsx
import React, { useState } from 'react';

type SearchBarProps = {
    onAddTodo: (description: string) => void;
};

export function SearchBar({ onAddTodo }: SearchBarProps) {
    const [description, setDescription] = useState('');

    const handleAddTodo = () => {
        if (description.trim() !== '') { // Prevent adding empty todos
            onAddTodo(description);
            setDescription(''); // Reset the input field
        }
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div className="flex">
            <label className="input input-bordered flex items-center gap-2">
                <input
                    type="text"
                    className="grow"
                    placeholder="Ajouter une tâche"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </label>
            <button className="btn btn-primary" onClick={handleAddTodo}>+</button>
        </div>
    );
}