import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className="sidebar-footer">
        <Link to="/" className="sidebar-footer-link">
          Home
        </Link>
        <Link to="/about" className="sidebar-footer-link">
         About Me
        </Link>
        <Link to="/contact" className="sidebar-footer-link">
          Contact
        </Link>
        <Link to="/Work" className="sidebar-footer-link">
          Work
        </Link>
      </div>
  )
}
