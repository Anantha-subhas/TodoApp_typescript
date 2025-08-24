import { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Add a task..."
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
