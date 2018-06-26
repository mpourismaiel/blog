import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          من <strong>مهدی پوراسماعیل</strong>، برنامه‌نویس فرانت‌اند با علاقه فراوان به SASS و React هستم و سعی دارم با آموزش برنامه‌نویسی فرانت‌اند به جامعه برنامه‌نویسی کمک کنم که یه مقدار تخصصی‌تر بشه و افراد تازه بتونن راحت‌تر وارد این دنیا بشن.
        </p>
      </div>
    )
  }
}

export default Bio
