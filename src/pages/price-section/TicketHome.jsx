import React from 'react';
import Pricing from './TicketPricingPlanes';

const Home = () => {
  return (
    <div>
      
      <div className='px-4 mx-auto bg-white pt-19 max-w-7xl sm:px-6 lg:px-8'>   
        <h2 className='text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight'>
          Pricing plans for teams of all sizes
        </h2>
        <p className='max-w-3xl mt-4 text-lg text-slate-500'>
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>
      <Pricing />
    </div>
  );
}

export default Home;