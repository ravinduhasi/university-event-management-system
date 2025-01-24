import React from 'react';
import { useLocation } from 'react-router-dom';
import HTicketPricin from './HTicketPricingPlanes';

const Home = () => {
  const location = useLocation();
  const eventId = location.state?.eventId; // Access eventId from location.state

  console.log("Received event ID in Home:", eventId); // Log the event ID

  return (
    <div>
      <HTicketPricin />
      {eventId && <p>Event ID: {eventId}</p>} {/* Display event ID */}
    </div>
  );
};

export default Home;
