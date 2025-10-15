import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './components/Card'

const App = () => {
  
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Google",
    logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    posted: "2 days ago",
    title: "Frontend Developer (React)",
    type: "Full Time",
    level: "Mid Level",
    salary: "$150/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    posted: "1 week ago",
    title: "Backend Engineer (Node.js)",
    type: "Remote",
    level: "Junior Level",
    salary: "$100/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
    posted: "3 days ago",
    title: "Product Designer",
    type: "Contract",
    level: "Mid Level",
    salary: "$200/hr",
    location: "Pune, India",
  },
  {
    id: 5,
    company: "Adobe",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968472.png",
    posted: "1 day ago",
    title: "Graphic Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$180/hr",
    location: "Delhi, India",
  },
]

  return (
    <div className="parent">
      {jobs.map((elem)=> {
        return <div key={elem.id}>
          <Card  {...elem}/>
        </div>
      })}
    </div>
  )
}

export default App
