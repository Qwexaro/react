import React from 'react'
import './App.css'
import Header from "./components/Header.js";
import ProfileCard from "./components/ProfileCard.js";

function App(): React.JSX.Element {

  return (
    <div className='app'>
      <Header />
      <main>
        <ProfileCard />
      </main>
    </div>
  )
}

export default App;
