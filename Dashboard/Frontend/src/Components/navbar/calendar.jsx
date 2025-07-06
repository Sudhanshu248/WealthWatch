import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useState } from 'react'

export default function Calendar() {

 
  return (
    <FullCalendar 
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
  )
}