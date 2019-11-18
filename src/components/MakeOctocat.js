import React, { Component } from 'react'
import Octocat from './Octocat'

import grinchtocat from '../images/grinchtocat.gif'
import hanukkat from '../images/hanukkat.png'
import saintnictocat from '../images/saint_nictocat.jpg'
import saintnicktocat from '../images/saint-nicktocat.jpg'
import snowtocatfinal from '../images/snowtocat_final.jpg'
import thanktocat from '../images/thanktocat.png'

const cats = [
  {
    imageUrl: grinchtocat,
    imageAlt: 'Grinch Cat',
    catName: 'Grinchtocat',
    catNumber: '#111',
    userName: 'Celeste'
  },
  {
    imageUrl: hanukkat,
    imageAlt: 'Hanuk Kat',
    catName: 'Hanukkat',
    catNumber: '#125',
    userName: 'Celeste'
  },
  {
    imageUrl: saintnictocat,
    imageAlt: 'Saint Nic Cat',
    catName: 'Saintnictocat',
    catNumber: '#134',
    userName: 'Celeste'
  },
  {
    imageUrl: saintnicktocat,
    imageAlt: 'Saint Nick Cat',
    catName: 'Saintnicktocat',
    catNumber: '#64',
    userName: 'Celeste'
  },
  {
    imageUrl: snowtocatfinal,
    imageAlt: 'Snow Cat',
    catName: 'Snowtocat',
    catNumber: '#137',
    userName: 'Celeste'
  },
  {
    imageUrl: thanktocat,
    imageAlt: 'Thanksgiving Cat',
    catName: 'Thanktocat',
    catNumber: '#62',
    userName: 'Celeste'
  }
]

const MakeOctocat = () => {
  return (
    <ul className="cat-list">
      {cats.map(cat => {
        return (
          <Octocat
            imageUrl={cat.imageUrl}
            imageAlt={cat.imageAlt}
            catName={cat.catName}
            catNumber={cat.catNumber}
            userName={cat.userName}
          />
        )
      })}
    </ul>
  )
}
export default MakeOctocat
