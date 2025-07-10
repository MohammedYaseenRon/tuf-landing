"use client";

import React from 'react'
import { ContainerScroll } from './ui/ContainerScroll'
import { GradientButton } from './ui/GradientButton'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <ContainerScroll
        titleComponent={
          <div className='relative z-20 flex flex-col items-center md:mb-20 md:pt-10 pt-40'>
            <div className='border pl-4 inline-block text-xs md:text-sm rounded-full py-2 font-jost backdrop-blur-md bg-secondary/30'>
              <span>
                Trusted by over{" "}
                <span className='bg-gradient-to-r from-orange-500 to-orange-400 rounded-full p-1.5'>
                  100,000+ engineers
                </span>
              </span>
            </div>
            <div className='mt-10 max-w-4xl text-center space-y-4'>
              <h1 className='text-3xl lg:text-5xl font-jost font-[400] mx-auto flex flex-col'>
                Accelerate your Growth
                <span> With One Premium SUBSCRIPTION.</span>
              </h1>
              <p className="md:text-base text-sm text-muted-foreground md:max-w-2xl max-w-xs mx-auto">
                The comprehensive platform where engineers build skills,
                practice problems, and land their next big opportunity.
              </p>
            </div>
            <div className='flex space-x-4 mt-10'>
              <GradientButton variant='white' text='Explore Offerings' className='rounded-full md:h-10 md:px-6' />
              <GradientButton variant='orange' text='Buy Now' className='rounded-full md:h-10 md:px-6' />
            </div>
          </div>
        }
      >
          <Image
            src={`/dashboard.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}

          />
      </ContainerScroll>
      
    </div>
  )
}

export default HeroSection