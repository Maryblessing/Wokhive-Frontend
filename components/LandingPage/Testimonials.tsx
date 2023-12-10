'use client';

import Testimony from './Testimony';
import { testimonies } from './testimonies';
import { NextPage } from 'next';

const Testimonials: NextPage = () => {
  return (
    <>
      <section className='py-32 max-w-[2540px] m-auto'>
        <div className='pb-20'>
          <h2 className='text-primary-purple-60 text-4xl font-medium text-center'>Customer Testimonials</h2>
          <p className='text-secondary text-center w-[500px] m-auto text-xl'>
            Join thousand of freelancers who have found success using WokHive
          </p>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex relative overflow-x-hidden w-full gap-6'>
            <div className='testimonial-scroll flex gap-6 items-stretch'>
              {testimonies.map((testimony) => (
                <Testimony
                  key={testimony.id}
                  testimony={testimony.testimony}
                  name={testimony.name}
                  role={testimony.role}
                />
              ))}
            </div>
            <div className='testimonial-scroll flex gap-6 items-stretch'>
              {testimonies.map((testimony) => (
                <Testimony
                  key={testimony.id}
                  testimony={testimony.testimony}
                  name={testimony.name}
                  role={testimony.role}
                />
              ))}
            </div>
          </div>

          <div className='flex relative overflow-x-hidden w-full gap-6'>
            <div className='testimonial-scroll-reverse flex gap-6 items-stretch'>
              {testimonies.map((testimony) => (
                <Testimony
                  key={testimony.id}
                  testimony={testimony.testimony}
                  name={testimony.name}
                  role={testimony.role}
                />
              ))}
            </div>
            <div className='testimonial-scroll-reverse flex gap-6 items-stretch'>
              {testimonies.map((testimony) => (
                <Testimony
                  key={testimony.id}
                  testimony={testimony.testimony}
                  name={testimony.name}
                  role={testimony.role}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
