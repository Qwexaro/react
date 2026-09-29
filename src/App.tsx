import React, { useState } from 'react'
import './App.css'
import Header from "./components/Header.js";
import ProfileCard from "./components/ProfileCard.js";

function App(): React.JSX.Element {
  const [count, setCount] = useState(0)

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