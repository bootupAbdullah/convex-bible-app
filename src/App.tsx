import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import './App.css'

function App() {
  const verses = useQuery(api.bible.searchVerses);
  const bookmarks = useQuery(api.bible.getBookmarks);
  const saveBookmark = useMutation(api.bible.saveBookmark);

  const handleBookmark = (verse: { book: string, chapter: number, verse: number, text: string }) => {
  saveBookmark({ 
    verse: verse.text, 
    reference: `${verse.book} ${verse.chapter}:${verse.verse}` 
  });
};

  return (
    <div>
      <h1>Bible App</h1>
      <div>
        {verses?.map((verse, index) => (
          <div key={index} style={{ margin: '20px', padding: '15px', border: '1px solid #ccc' }}>
            <strong>{verse.book} {verse.chapter}:{verse.verse}</strong>
            <p>{verse.text}</p>
            <button onClick={() => handleBookmark(verse)}>Bookmark</button>
          </div>
        ))}
      </div>
      
      <h2>Bookmarks ({bookmarks?.length || 0})</h2>
      {bookmarks?.map((bookmark, index) => (
        <div key={index} style={{ margin: '10px', padding: '10px', backgroundColor: '#f0f0f0' }}>
          <strong>{bookmark.reference}</strong>
        </div>
      ))}
    </div>
  )
}

export default App