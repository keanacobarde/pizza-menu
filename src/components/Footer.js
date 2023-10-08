import React from 'react'

export default function Footer() {
  const openHour = 8;
  const closedHour = 22;
  const currHour = new Date().getHours();
  return (
    <>
    <footer> {currHour >= openHour && currHour <= closedHour ?  'We are currently open!' : 'We are currently closed.'} </footer>
    </>
  )
}
