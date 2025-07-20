import React from 'react'
import { CardProps } from '@/interfaces'

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Card
