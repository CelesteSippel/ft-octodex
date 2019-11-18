import React, { Component } from 'react'

const Octocat = props => {
  return (
    <>
      <li>
        <img src={props.imageUrl} alt={props.imageAlt} />

        <section>
          <p>
            {props.catNumber} <span>{props.catName}</span>
            {props.userName}
          </p>
        </section>
      </li>
    </>
  )
}
export default Octocat
