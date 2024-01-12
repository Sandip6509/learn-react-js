import React from 'react'

interface CardProps {
  monster: {
    id: number,
    name: string,
    email: string
  };
}
const Card: React.FC<CardProps> = ({monster}) => {
  return (
    <div 
      key={monster.id}
      className="rounded-xl bg-[#20354b] p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
    >
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <img
          src={`https://robohash.org/${monster.id}?set=${monster.email}`}
          alt="monster"
        />
      </div>
      <div className="mt-1 p-2">
        <h2 className="text-white text-center">{monster.name}</h2>
        <h2 className="text-white text-center">{monster.email}</h2>
      </div>
    </div>
  )
}

export default Card
