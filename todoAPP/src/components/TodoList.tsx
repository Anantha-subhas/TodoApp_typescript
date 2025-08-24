import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
  onToggle: (id: string) => void;
}

function TodoList({ todos, onDelete, onUpdate, onToggle }: Props) {
  if (todos.length === 0) {
    return <p className="empty">No tasks yet.</p>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
