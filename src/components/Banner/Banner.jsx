
"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ban1 from '../../../public/ban1.jpg'
import ban2 from '../../../public/ban2.jpg'
import ban3 from '../../../public/ban3.jpg'
import ban4 from '../../../public/ban4.jpg'
import CarouselComponent from "../carousel/CarouselComponent";

export const Banner = () => {

    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
  return (
     <div>
        
        <Slider {...settings}>
          <div>        
            
           <CarouselComponent img={ban1} />
          </div>
          <div>        
            
           <CarouselComponent img={ban2} />
          </div>
          <div>        
            
           <CarouselComponent img={ban3} />
          </div>
          <div>        
            
           <CarouselComponent img={ban4} />
          </div>
         
        </Slider>
      </div>
  )
}
