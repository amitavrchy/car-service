"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Slider = () => {
    const slideState = useState(0)
    const sliderData = [
        {
            "title": "Complete Car Maintenance",
            "description": "Keep your car in top shape with our comprehensive maintenance services. Book an appointment today!",
            "imageUrl": "assets/images/homeCarousel/1.jpg",
            "buttonText": "Book Now",
            "buttonLink": "/services/maintenance"
        },
        {
            "title": "Engine Repair & Diagnostics",
            "description": "From diagnostics to full engine repairs, our certified mechanics are ready to help you get back on the road.",
            "imageUrl": "assets/images/homeCarousel/2.jpg",
            "buttonText": "Learn More",
            "buttonLink": "/services/engine-repair"
        },
        {
            "title": "Tire Replacement & Alignment",
            "description": "Ensure your safety with tire replacement and wheel alignment services. Visit us for top-quality tires and service.",
            "imageUrl": "assets/images/homeCarousel/3.jpg",
            "buttonText": "Shop Tires",
            "buttonLink": "/services/tires"
        },
        {
            "title": "24/7 Emergency Roadside Assistance",
            "description": "Stuck on the road? Our 24/7 emergency roadside assistance team is just a call away to help you out.",
            "imageUrl": "assets/images/homeCarousel/4.jpg",
            "buttonText": "Get Help",
            "buttonLink": "/services/roadside-assistance"
        }
    ]

    const gotoSlide = (slideId) => {
        const targetSlide = document.getElementById(slideId);
        console.log(targetSlide)
        if (targetSlide) {
            targetSlide.scrollIntoView({
                block: 'center',
            });
        }
    }
    console.log(sliderData.length)

    return (
        <div className="carousel w-full rounded-lg h-[90vh] mt-2 relative">
            {sliderData.map((slide, index) => (
                <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full h-full">
                    <div>
                        <Image
                            layout='fill'
                            objectFit='cover'
                            alt={slide.title}
                            src={`/${slide.imageUrl}`}
                            className="absolute"
                        />
                        <div className='absolute inset-0 bg-black opacity-70'></div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        {/* Previous button */}
                        <button
                            onClick={() => gotoSlide(`slide${index === 0 ? sliderData.length : index}`)}
                            className="btn btn-circle">
                            ❮
                        </button>
                        {/*  */}
                        {/* Next button */}
                        <button
                            onClick={() => gotoSlide(`slide${index === sliderData.length-1 ? 1 : index+2}`)}
                            className="btn btn-circle">
                            ❯
                        </button>
                    </div>
                    <div className="w-full md:w-2/5 mx-16 px-5 flex flex-col items-center justify-center z-10">
                        <h2 className="text-4xl font-bold text-slate-200">{slide.title}</h2>
                        <p className="mt-4 text-lg text-slate-300">{slide.description}</p>
                        <button className="btn bg-primary border-2 border-transparent text-slate-200 w-40 hover:bg-transparent hover:text-slate-300 hover:border-slate-300 self-start mt-3">
                            <a href={slide.buttonLink}>{slide.buttonText}</a>
                        </button>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Slider;
