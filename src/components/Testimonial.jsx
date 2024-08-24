import React from 'react'
import { BsFillChatQuoteFill } from "react-icons/bs";
import review1 from '../assets/review1.webp'
import review2 from '../assets/review2.webp'

const testimonials = [
  {
    name: 'Jane Doe',
    location: 'New York, NY',
    review: 'This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!',
    image: review1,
  },
  {
    name: 'John Smith',
    location: 'Los Angeles, CA',
    review: 'I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.',
    image: review2,
  },
]

const Testimonial = () => {
  return (
    <div id='testimonial' className='bg-[#f7f8fc] py-12'>
      <div className='container mx-auto px-8 pt-20 pb-12'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl font-bold mb-3'>
            What Our Clients Say
          </h2>
          <p className='text-lg md:w-1/2 mx-auto'>
            Hear from some of our satisfied clients about how our services have positively impacted their lives and well-being.
          </p>
        </div>
        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8'>
          {
            testimonials.map((testimonial, index) => (
              <div key={index} className='bg-white rounded-lg p-6 shadow-lg flex-1 relative'>
                <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                  <BsFillChatQuoteFill className='size-12 text-primary' />
                </div>
                <div className='flex flex-col space-y-3 mb-4'>
                  <p className='text-lg mb-2'>
                    {testimonial.review}
                  </p>
                </div>
                <div className='flex gap-1'>
                  <img src={testimonial.image} alt="Jane Doe's image" className='w-16 h-16 rounded-full object-cover mr-4' />
                  <div>
                    <p className='font-semibold'>
                      {testimonial.name}
                    </p>
                    <p className='text-gray-600'>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Testimonial