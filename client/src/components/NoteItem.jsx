// client/src/components/NoteItem.jsx
export default function NoteItem({ note, onDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-start">
      <div>
        <h2 className="text-xl font-semibold">{note.title}</h2>
        <p className="text-gray-700">{note.content}</p>
      </div>
      <button
        onClick={() => onDelete(note._id)}
        className="text-red-500 font-bold ml-4"
      >
        🗑️
      </button>
    </div>
  );
}
