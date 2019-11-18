import React, { Component } from 'react'

const NavBar = () => {
  return (
    <nav>
      <section className="top-bar">
        <h1>Octodex</h1>
        <ul className="left-bar">
          <li>Home</li>
          <li>FAQ</li>
        </ul>
      </section>
      <ul className="right-bar">
        <li>Follow us on Twitter</li>
        <li className="nav-git">Back to GitHub.com</li>
      </ul>
    </nav>
  )
}

export default NavBar
