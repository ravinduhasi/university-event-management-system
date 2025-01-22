import React from 'react';
import { pricingPlans } from './TicketData';

export default function Pricing() {
  return (
    <div className='relative'>
      {/* Background decoration */}
      <div className="absolute inset-0 flex flex-col"></div>
      
      {/* Main three cards with position variations */}
      <div className='grid gap-12 px-4 py-24 mx-auto lg:gap-8 lg:grid-cols-3 max-w-7xl sm:px-6 lg:px-8'>
        {pricingPlans.map((plan, index) => {
          
          // Define background colors for each card
          const bgColor = index === 0 ? 'bg-green-100' : index === 1 ? 'bg-blue-100' : 'bg-red-100';
          
          // Define width and height for each card using inline styles
          const dimensions = index === 0 
            ? { width: '24rem', height: '28rem'} 
            : index === 1 
            ? { width: '24rem', height: '32rem' } 
            : { width: '24rem', height: '28rem' };

          // Define position adjustments
          const positionAdjustment = index === 0 
            ? 'translate-y-2'       // Lower left card slightly
            : index === 1 
            ? '-translate-y-4'      // Raise middle card slightly
            : 'translate-y-2';      // Lower right card slightly
          
          return (
            <div 
              key={plan.title} 
              className={`relative flex flex-col p-8 transition duration-700 ease-in-out border rounded-md shadow-2xl border-slate-200 hover:scale-105 ${bgColor} ${positionAdjustment}`}
              style={dimensions}
              >
              <h3 className='text-lg font-semibold leading-5'>{plan.title}</h3>
              
              {plan.mostPopular && (
                <p className='absolute top-0 px-2 py-1 text-sm font-semibold tracking-wide text-white -translate-y-1/2 rounded-full shadow-md bg-cyan-500'>
                  Most Popular
                </p>
              )}
              
              <p className='mt-4 text-sm leading-6 text-slate-700'>
                {plan.description}
              </p>
              <div className='p-3 mt-4 -mx-3 rounded-md bg-slate-50'>
                <p className='flex items-center text-sm font-semibold text-slate-500'>
                  <span>{plan.currency}</span>
                  <span className='ml-2 text-4xl text-slate-900'>${plan.price}</span>
                  <span className='ml-1.5'>{plan.frequency}</span>
                </p>
              </div>
              
              {/* Features */}
              <ul className='flex-1 mt-2 space-y-2'>
                {plan.features.map(feature => (
                  <li key={feature} className='flex items-center text-sm leading-6 text-slate-700'>
                    <svg className='w-4 h-4 mr-2 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Call to action */}
              <a 
                href="#" 
                className={`mt-4 px-6 py-4 text-sm font-semibold leading-4 shadow-md rounded-md text-center
                  ${plan.mostPopular 
                    ? 'text-white bg-cyan-500 hover:bg-cyan-600 shadow-md' 
                    : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100' 
                  }`}
              >
                {plan.cta}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}