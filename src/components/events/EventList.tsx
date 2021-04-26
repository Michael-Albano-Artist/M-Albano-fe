import React, { useEffect, useState } from 'react'
import { fetchEvents } from '../../api-utils'
import { GalleryItem } from '../../types'

const EventList: React.FC = () => {
  const [events, setEvents] = useState<GalleryItem[]>([]);
  
  useEffect(() => {
    fetchEvents()
    .then(events => setEvents(events))
  })

  return (
    <div>
      
    </div>
  )
}

export default EventList
