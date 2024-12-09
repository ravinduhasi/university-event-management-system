import React from 'react'
import EventList from './EventList'
import Eventcard from './Eventcard';
import EventHeader from './EventHeader';


export const EventsContent = () => {
  return (
    <div className="w-full h-full">
      <EventHeader />
      <div className="flex flex-col gap-4">
      <Eventcard />
      <EventList />
      </div>
    </div>
  );
};
export default EventsContent;
