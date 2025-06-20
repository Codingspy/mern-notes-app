// client/src/components/NoteForm.jsx
import { useState } from 'react';

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert('Please fill both fields');
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="w-full border p-2 mb-2"
        rows="3"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Note
      </button>
    </form>
  );
}
