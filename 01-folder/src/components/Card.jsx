import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = ({ logo, company, posted, title, type, level, salary, location }) => {
  return (
    <div className="card">
      {/* 🔹 Top Section */}
      <div className="card-top">
        <img src={logo} alt="Company logo" />
        <button className="save-btn">
          <Bookmark size={18} /> Save
        </button>
      </div>

      {/* 🔹 Middle Section */}
      <div className="card-content">
        <h3>
          {company} <span>• {posted}</span>
        </h3>
        <h2>{title}</h2>
        <div className="tags">
          <span>{type}</span>
          <span>{level}</span>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="card-bottom">
        <div className="salary">
          <h3>{salary}</h3>
          <p>{location}</p>
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  )
}

export default Card
