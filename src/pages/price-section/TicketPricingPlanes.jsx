import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventId = sessionStorage.getItem('eventId');
        console.log('Retrieved Event ID:', eventId);

        const eventRef = doc(collection(db, 'events'), eventId);
        const eventSnapshot = await getDoc(eventRef);

        if (eventSnapshot.exists()) {
          setEvent(eventSnapshot.data());
        } else {
          setError('Event not found.');
        }
      } catch (err) {
        console.error('Error fetching event details:', err);
        setError('Failed to load event details.');
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, []);

  if (loading) return <div>Loading event details...</div>;
  if (error) return <div>{error}</div>;
  if (!event) return null;

  return (
    <div className='relative'>
      {/* Background decoration */}
      <div className="absolute inset-0 flex flex-col"></div>

      {/* Container for horizontally displayed cards */}
      <div className='flex justify-center px-4 py-24 mx-auto space-x-12 max-w-7xl sm:px-6 lg:px-8'>
        
        {/* First card */}
        <div className='flex justify-center'>
          {event && (
            <div 
              key={event.title} 
              className={'relative flex flex-col p-8 transition duration-700 ease-in-out border rounded-md shadow-2xl border-slate-200 hover:scale-105 bg-green-100 translate-y-2'}
              style={{ width: '24rem', height: '28rem' }}
            >
              <h3 className='text-4xl font-semibold leading-5'>{event.title}</h3>
              
               
              
              <p className='mt-4 text-xl leading-6 text-slate-700'>
                {event.description}
              </p>
              <p className='pt-4 mt-4 text-xl font-semibold leading-6 text-slate-700'>
                On {event.venue}
              </p>
              <p className='mt-4 text-xl font-semibold leading-6 text-slate-700'>
                At {event.date}
              </p>
              <p className='pb-5 mt-4 text-xl font-semibold leading-6 text-slate-700'>
                {event.time} On words.
              </p>
              <div className='p-3 mt-4 -mx-3 rounded-md bg-slate-50'>
                <p className='flex items-center text-sm font-semibold text-slate-500'>
                  <span>{event.currency}</span>
                  <span className='ml-2 text-4xl text-slate-900'>Rs.{event.ticketPrices && event.ticketPrices[0]}</span>
                  <span className='ml-1.5'>{event.frequency}</span>
                </p>
              </div>
              
              {/* Call to action */}
              <a 
                href="#" 
                className={`mt-4 px-6 py-4 text-sm font-semibold leading-4 shadow-md rounded-md text-center
                  ${event.mostPopular 
                    ? 'text-white bg-cyan-500 hover:bg-cyan-600 shadow-md' 
                    : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100' 
                  }`}
              >
                <h1>Book your ticket now</h1>
              </a>
            </div>
          )}
        </div>

        {/* Second card */}
        <div className='flex justify-center'>
          {event && (
            <div 
              key={event.title} 
              className={`relative flex flex-col p-8 transition duration-700 ease-in-out border rounded-md shadow-2xl border-slate-200 hover:scale-105 bg-blue-100 -translate-y-4`}
              style={{ width: '24rem', height: '32rem' }}
            >
              <h3 className='text-lg font-semibold leading-5'>{event.title}</h3>

              
                <p className='absolute top-0 px-2 py-1 text-sm font-semibold tracking-wide text-white -translate-y-1/2 rounded-full shadow-md bg-cyan-500'>
                  Most Popular
                </p>
              
              
              {event.mostPopular && (
                <p className='absolute top-0 px-2 py-1 text-sm font-semibold tracking-wide text-white -translate-y-1/2 rounded-full shadow-md bg-cyan-500'>
                  Most Popular
                </p>
              )}
              
              <p className='mt-4 text-xl leading-6 text-slate-700'>
                {event.description}
              </p>
              <p className='pt-4 mt-4 text-xl font-semibold leading-6 text-slate-700'>
                On {event.venue}
              </p>
              <p className='mt-4 text-xl font-semibold leading-6 text-slate-700'>
                At {event.date}
              </p>
              <p className='pb-5 mt-4 text-xl font-semibold leading-6 text-slate-700'>
                {event.time} On words.
              </p>
              <div className='p-3 mt-4 -mx-3 rounded-md bg-slate-50'>
                <p className='flex items-center text-sm font-semibold text-slate-500'>
                  <span>{event.currency}</span>
                  <span className='ml-2 text-4xl text-slate-900'>Rs.{event.ticketPrices && event.ticketPrices[1]}</span>
                  <span className='ml-1.5'>{event.frequency}</span>
                </p>
              </div>
              
              {/* Call to action */}
              <a 
                href="#" 
                className={`mt-4 px-6 py-4 text-sm font-semibold leading-4 shadow-md rounded-md text-center
                  ${event.mostPopular 
                    ? 'text-white bg-cyan-500 hover:bg-cyan-600 shadow-md' 
                    : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100' 
                  }`}
              >
               <h1>Book your ticket now</h1>
              </a>
            </div>
          )}
        </div>

        {/* Third card */}
        <div className='flex justify-center'>
          {event && (
            <div 
              key={event.title} 
              className={`relative flex flex-col p-8 transition duration-700 ease-in-out border rounded-md shadow-2xl border-slate-200 hover:scale-105 bg-red-100 translate-y-2`}
              style={{ width: '24rem', height: '28rem' }}
            >
              <h3 className='text-lg font-semibold leading-5'>{event.title}</h3>
              
              {event.mostPopular && (
                <p className='absolute top-0 px-2 py-1 text-sm font-semibold tracking-wide text-white -translate-y-1/2 rounded-full shadow-md bg-cyan-500'>
                  Most Popular
                </p>
              )}
              
              <p className='mt-4 text-xl leading-6 text-slate-700'>
                {event.description}
              </p>
              <p className='pt-4 mt-4 text-xl font-semibold leading-6 text-slate-700'>
                On {event.venue}
              </p>
              <p className='mt-4 text-xl font-semibold leading-6 text-slate-700'>
                At {event.date}
              </p>
              <p className='pb-5 mt-4 text-xl font-semibold leading-6 text-slate-700'>
                {event.time} On words.
              </p>
              <div className='p-3 mt-4 -mx-3 rounded-md bg-slate-50'>
                <p className='flex items-center text-sm font-semibold text-slate-500'>
                  <span>{event.currency}</span>
                  <span className='ml-2 text-4xl text-slate-900'>Rs.{event.ticketPrices && event.ticketPrices[2]}</span>
                  <span className='ml-1.5'>{event.frequency}</span>
                </p>
              </div>
              
              {/* Call to action */}
              <a 
                href="#" 
                className={`mt-4 px-6 py-4 text-sm font-semibold leading-4 shadow-md rounded-md text-center 
                  ${event.mostPopular 
                    ? 'text-white bg-cyan-500 hover:bg-cyan-600 shadow-md' 
                    : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100' 
                  }`}
              >
                <h1>Book your ticket now</h1>
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
export default EventDetails;