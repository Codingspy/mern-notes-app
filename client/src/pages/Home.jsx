// client/src/pages/Home.jsx
import { useEffect, useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteItem from '../components/NoteItem';

const API_URL = 'http://localhost:5000/api/notes';

export default function Home() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setNotes(data);
  };

  const addNote = async (note) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
    const data = await res.json();
    setNotes([data, ...notes]);
  };

  const deleteNote = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    setNotes(notes.filter(note => note._id !== id));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <NoteForm onAdd={addNote} />
      <div className="space-y-4 mt-6">
        {notes.map(note => (
          <NoteItem key={note._id} note={note} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
}
