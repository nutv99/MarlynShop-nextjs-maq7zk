import React, { Component } from 'react'
import Link from 'next/link'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/forum">Forum</Link>
          </li>
        </ul>
      </div>
    )
  }
}