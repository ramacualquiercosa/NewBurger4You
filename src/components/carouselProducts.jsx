import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import carouselImg from "../assets/img/carouselImg";

export default function CarouselProducts() {
    const slides = [
        {
          url: carouselImg[1],
          name: "Hamburguesas",
          ref: "/Productos?item=Hamburguesas"
        },
        {
          url: carouselImg[4],
          name: "Bebidas",
          ref: "/Productos?item=Bebidas"
        },
        {
          url: carouselImg[5],
          name: "Entradas",
          ref: "/Productos?item=Entradas"
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
        <h2 className=" text-4xl tracking-tight  text-center text-white dark:text-white" data-aos="zoom-in">Proba nuestros productos</h2>
        <div className='max-w-[1200px] h-[500px] w-full m-auto py-7 px-4 relative group' data-aos="zoom-in">
            
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='h-full sm:h-full xl:h-full 2xl:h-full rounded-2xl bg-center bg-cover duration-500'
        ><a href={slides[currentIndex].ref} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-white text-center text-4xl drop-shadow-lg">{slides[currentIndex].name}</a></div>
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

