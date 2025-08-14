import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from 'react';
import './BibleReader.css'

function BibleReader() {
  const verses = useQuery(api.bible.getVerses);
  const bookmarks = useQuery(api.bible.getBookmarks);
  const saveBookmark = useMutation(api.bible.saveBookmark);
  const deleteBookmark = useMutation(api.bible.deleteBookmark);
  
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedBookmarks, setExpandedBookmarks] = useState(new Set());
  const bookName = verses?.[0]?.book || 'Loading...';
  const versesPerPage = 16;

  const handleBookmark = (verse) => {
    saveBookmark({ 
      verse: verse.value, 
      reference: `${verse.book} ${verse.chapterNumber}:${verse.verseNumber}` 
    });
  };

  const toggleBookmark = (index) => {
    const newExpanded = new Set(expandedBookmarks);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedBookmarks(newExpanded);
  };

  if (!verses) {
    return <div className="loading">Loading verses...</div>;
  }

  const startIndex = currentPage * versesPerPage;
  const currentVerses = verses.slice(startIndex, startIndex + versesPerPage);
  const leftPageVerses = currentVerses.slice(0, 8);
  const rightPageVerses = currentVerses.slice(8, 16);
  const totalPages = Math.ceil(verses.length / versesPerPage);

  return (
    <div className="app">
      <div className="hero-container">
        <div className="page page-left">
          <div className="page-header">
            {currentPage === 0 && (
                <h2 className="book-title">The Book of {bookName}</h2>
            )}
            <span className="page-number">Page {(currentPage * 2) + 1}</span>
          </div>
          <div className="page-content">
            {leftPageVerses.map((verse, index) => (
              <div key={verse._id || index} className="verse">
                <span className="verse-reference">
                  {verse.chapterNumber}:{verse.verseNumber}
                </span>
                <span className="verse-text">{verse.value}</span>
                <button 
                  className="bookmark-btn"
                  onClick={() => handleBookmark(verse)}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="page page-right">
          <div className="page-header">
            <span className="page-number">Page {(currentPage * 2) + 2}</span>
          </div>
          <div className="page-content">
            {rightPageVerses.map((verse, index) => (
              <div key={verse._id || index} className="verse">
                <span className="verse-reference">
                  {verse.chapterNumber}:{verse.verseNumber}
                </span>
                <span className="verse-text">{verse.value}</span>
                <button 
                  className="bookmark-btn"
                  onClick={() => handleBookmark(verse)}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="navigation">
        <button 
          onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className="nav-btn"
        >
          ← Previous
        </button>
        <span className="page-info">
          {currentPage + 1} of {totalPages}
        </span>
        <button 
          onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
          disabled={currentPage >= totalPages - 1}
          className="nav-btn"
        >
          Next →
        </button>
      </div>

      {bookmarks && bookmarks.length > 0 && (
        <div className="bookmarks-sidebar">
          <h3>Bookmarks ({bookmarks.length})</h3>
          {bookmarks.map((bookmark, index) => {
            const isExpanded = expandedBookmarks.has(index);
            return (
              <div key={index} className="bookmark-item">
                <div 
                  className="bookmark-header"
                  onClick={() => toggleBookmark(index)}
                >
                  <span className="bookmark-reference">{bookmark.reference}</span>
                  <span className="bookmark-toggle">{isExpanded ? '−' : '+'}</span>
                </div>
                {isExpanded && (
                  <div className="bookmark-content">
                   <div className="bookmark-text">{bookmark.verse}</div>
                    <button 
                      className="delete-bookmark-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                          deleteBookmark({ id: bookmark._id });
                      }}
                      title="Delete bookmark"
                    >
                      ❌
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default BibleReader;