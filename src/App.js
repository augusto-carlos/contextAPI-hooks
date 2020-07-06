import React from 'react';
import './App.css';
import BookList from './components/BookList';
import Header from './components/Header';
import BookContextProvider from './contexts/BookContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookContextProvider>
          <Header />
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider>
    </div >
  );
}

export default App;
