import { useState } from "react";
import type { Todo } from "../types";

interface Props {
  todo: Todo;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
  onToggle: (id: string) => void;
}

function TodoItem({ todo, onDelete, onUpdate, onToggle }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    if (text.trim()) {
      onUpdate(todo.id, text);
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {isEditing ? (
        <input
          className="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span className={todo.completed ? "completed" : ""}>
          {todo.text}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
