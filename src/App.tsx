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
import { ThemeProvider } from './context/Theme.Context.js';

function App(): React.JSX.Element {

  return (
    <div className='app'>

      <main>
        <ThemeProvider>
          <UserProvider>
            <PostsProvider>
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </PostsProvider>
          </UserProvider>
        </ThemeProvider>
      </main>
    </div>
  )

}

export default App;
