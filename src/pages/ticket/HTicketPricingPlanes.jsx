import React from 'react';
import { pricingPlans } from './HTicketData';

export default function Pricing() {
  return (
    <div className='relative'>
      <div className="absolute inset-0 flex flex-col"></div>

      <div className='grid gap-12 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        {pricingPlans.map((plan, index) => {
          
          // Define background colors for each card
          const bgColor = index === 0 ? 'bg-green-100' : index === 1 ? 'bg-blue-100' : 'bg-red-100';
          
          // Define width and height for each card using inline styles
          const dimensions = { width: 'auto', height: '195px' };

          return (
            <div 
              key={plan.title} 
              className={`relative flex flex-col p-8 transition duration-700 ease-in-out border rounded-md shadow-2xl border-slate-200 hover:scale-105  ${bgColor}`}
              style={dimensions}
            >
              <div className="flex">
                {/* Render Image */}
                <img 
                  src={plan.image} 
                  alt={``}
                  className='object-cover w-32 h-32 mr-4 rounded-md' 
                />

                <div className="flex-1">
                  {/* Title */}
                  <h3 className='text-lg font-semibold leading-5'>{plan.title}</h3>

                  {plan.mostPopular && (
                    <p className='absolute top-0 px-2 py-1 text-sm font-semibold tracking-wide text-white -translate-y-1/2 rounded-full shadow-md bg-cyan-500'>
                      Most Popular
                    </p>
                  )}

                  <p className='mt-4 text-sm leading-6 text-slate-700'>
                    {plan.description}
                  </p>

                  <div className='flex items-start justify-start mt-4'>
                    {/* Price */}
                    <div className='p-3 rounded-md bg-slate-50 w-[200px] h-[80px] flex items-center justify-center  translate-x-180 -translate-y-13'>
                      <p className='flex items-center text-sm font-semibold text-slate-500'>
                        <span>{plan.currency}</span>
                        <span className='ml-2 text-4xl text-slate-900'>${plan.price}</span>
                        <span className='ml-1.5'>{plan.frequency}</span>
                      </p>
                    </div>
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

                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
