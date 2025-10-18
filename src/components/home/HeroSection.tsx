import React from 'react'
import Search from '@/components/home/Search'
import heroBg from "@/assets/img/hero-bg.png";
import graplicSlider1 from "@/assets/img/graplic-slider-1.png";
import Image from '@/components/ui/Images/Image';
const HeroSection = () => {
  return (
    <section className="bg-aztec-light h-[800px] w-full relative">
      <Image
        src={graplicSlider1}
        alt="Main"
        className="absolute left-0 bottom-0"
      />
      <div
        className="w-full h-full flex justify-end place-items-right text-center"
      >
        <div className="w-full md:w-2/3 lg:w-1/2 flex mx-auto px-6 py-10 md:py-20 max-w-7xl">

        </div>
        <div className="md:w-1/3 lg:w-1/2 h-full hidden md:block">
          <Image
            src={heroBg}
            alt="Hero Bg"
            className="w-full h-full !rounded-none object-cover"
          />
        </div>
      </div>
      <section className='absolute top-0 left-0 w-full h-full flex'>
        <div className="mx-auto md:my-auto px-6 py-10 md:py-20 max-w-7xl w-7xl">
          <h1 className="text-4xl text-left md:text-5xl mb-4 max-w-3xl">
            Find A Home That
          </h1>
          <h1
            className="relative flex leading-none text-4xl md:text-5xl text-left size-fit font-bold mb-6 max-w-3xl"
          >
            Fits Dream Home
            <div
              className="animate-blink ml-2 h-[1.2em] bg-aztec w-[4px]"
            ></div>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-left max-w-lg">
            We are a real estate agency that will help you find <br className='hidden md:block'/>the best
            residence you dream of.
          </p>
          <Search />
        </div>
      </section>
    </section>
  )
}

export default HeroSection