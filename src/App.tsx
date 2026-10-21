import React from 'react'
import './App.css'
import Header from "./components/Header.js";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import Settings from './pages/Settings.js';
import About from './pages/About.js';
import { PostsProvider } from './context/Posts.Context.js';
import { UserProvider } from './context/User.Context.js';
import { ThemeProvider, useTheme } from './context/Theme.Context.js';

function AppContent(): React.JSX.Element {

  const { theme } = useTheme();

  return (
    <div className={`app theme-${theme}`}>
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <UserProvider>
        <PostsProvider>
          <AppContent />
        </PostsProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App;
