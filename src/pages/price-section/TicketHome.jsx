import React from 'react';
import Pricing from './TicketPricingPlanes';

const HomeTicket = () => {
  return (
    <div>
      
      <div className='px-4 pt-5 mx-auto bg-white max-w-7xl sm:px-6 lg:px-8'>   
        <h2 className='text-lg font-bold text-black sm:text-5xl sm:leading-tight sm:tracking-tight'>
          Pricing plans for you
        </h2>
        
      </div>
      <Pricing />
    </div>
  );
}

export default HomeTicket;