import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import carouselImg from "../assets/img/carouselImg";


export default function CarouselPromos() {
    const slides = [
        {
          url: carouselImg[3],
          promo: "Happy Hour todos los viernes hasta las 23:00hs"
          
        },
        {
          url: carouselImg[6],
          promo: "15% off abonando con mercado pago"
        },  
        {
          url: carouselImg[0],
          promo: "2 x 1 abonando con tarjetas adheridas"
          
        }
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
   
    return (
        <>
        <h2 className=" text-4xl tracking-tight  text-center text-white dark:text-white pt-10" data-aos="zoom-in">Promos especiales</h2>
        <div className='max-w-[1200px] h-[500px] w-full m-auto py-7 px-4 relative group' data-aos="zoom-in">
            
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='h-full sm:h-full xl:h-full 2xl:h-full rounded-2xl bg-center bg-cover duration-500'
        ><h2 className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center text-4xl drop-shadow-lg w-full p-8">{slides[currentIndex].promo}</h2></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-60%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      
      </div>
      </>
    );

  }
