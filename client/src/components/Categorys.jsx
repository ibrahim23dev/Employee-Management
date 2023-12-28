import React from 'react'
import Carousel from 'react-multi-carousel'
import  'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
function Categorys() {
    const category = [
    'CACIO',
    'Sports',
    'Smartwatch',
    'Dress',
    'Analog',
    'Chronograph',
    'Aviator',
    'Quartz'
  ]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mdtablet: {
            breakpoint: { max: 991, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 3
        },
        smmobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2
        },
        xsmobile: {
            breakpoint: { max: 440, min: 0 },
            items: 1
        }
    }
  return (
      <div className='w-[87%] mx-auto relative'>
          <div className='w-[85%]  lg:w-[90%] mx-auto'>
              <div className='w-full flex flex-wrap md-lg:gap-8'>
                  <div className='w-full'>
                      <div className='my-8'>
                          <Carousel
                              autoPlay={true}
                              infinite={true}
                              arrows={true}
                              
                              responsive={responsive}
                              transitionDuration={500}
                          >
                              {
                                category.map((c,i)=>  <Link className='h-[185px] border block' key={i} to='#'>
                                    <img src={`http://localhost:3001/images/products/${i+1}.jpg`} alt='' />
                                    <div className='absolate bottom-6 w-full mx-auto font-bold left-0 flex justify-center items-center'>
                                        <span className='py-[2px] px-6 bg-[#33305d] text-white'>{c}</span>
                                    </div>
                              </Link>)}
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
      
    </div>
  )
}

export default Categorys
