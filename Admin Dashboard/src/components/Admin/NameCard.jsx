// import React from 'react'

const NameCard = ({empData}) => {
  return (
    <div className="w-full h-14 bg-pink-400 flex justify-evenly items-center mb-3 rounded-lg">
        <h1>{empData.name}</h1>
        <p>{empData.exp}</p>
        <button>View</button>
    </div>
  )
}

export default NameCard