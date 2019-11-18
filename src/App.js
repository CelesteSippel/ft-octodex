import React, { Component } from 'react'
import MakeOctocat from './components/MakeOctocat'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <section>
      <NavBar />
      <main>
        <MakeOctocat />
      </main>
    </section>
  )
}

export default App
