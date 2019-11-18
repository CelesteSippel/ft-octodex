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
    catNumber: '#111'
  },
  {
    imageUrl: hanukkat,
    imageAlt: 'Hanuk Kat',
    catName: 'Hanukkat',
    catNumber: '#125'
  },
  {
    imageUrl: saintnictocat,
    imageAlt: 'Saint Nic Cat',
    catName: 'Saintnictocat',
    catNumber: '#134'
  },
  {
    imageUrl: saintnicktocat,
    imageAlt: 'Saint Nick Cat',
    catName: 'Saintnicktocat',
    catNumber: '#64'
  },
  {
    imageUrl: snowtocatfinal,
    imageAlt: 'Snow Cat',
    catName: 'Snowtocat',
    catNumber: '#137'
  },
  {
    imageUrl: thanktocat,
    imageAlt: 'Thanksgiving Cat',
    catName: 'Thanktocat',
    catNumber: '#62'
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
          />
        )
      })}
    </ul>
  )
}
export default MakeOctocat
