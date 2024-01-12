import React from 'react'
import Card from '../Card/Card';

interface Monster {
  id: number;
  name: string;
  email: string;
}

interface CardListProps {
  monsters: Monster[];
}
const CardList: React.FC<CardListProps> = ({monsters}) => {
  return (
    <div className="flex flex-col items-center justify-end min-h-screen bg-[#071e34]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
          // <div
          //   key={monster.id}
          //   className="rounded-xl bg-[#20354b] p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
          // >
          //   <div className="relative flex items-end overflow-hidden rounded-xl">
          //     <img
          //       src={`https://robohash.org/${monster.id}?set=${monster.email}`}
          //       alt="monster"
          //     />
          //   </div>
          //   <div className="mt-1 p-2">
          //     <h2 className="text-white text-center">{monster.name}</h2>
          //     <h2 className="text-white text-center">{monster.email}</h2>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  )
}

export default CardList