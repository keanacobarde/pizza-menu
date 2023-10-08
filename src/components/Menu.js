import React from 'react'
import { pizzaData } from '../data'
import Pizza from './Pizza'

export default function Menu() {
  return (
    <>
    {pizzaData.map((pizza) => {
      return <Pizza name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} key={pizza.name}/>
    })}
    </>
  )
}
