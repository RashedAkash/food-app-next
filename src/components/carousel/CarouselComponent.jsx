import Image from 'next/image';
import React from 'react';

const CarouselComponent = ({img}) => {
  return (
    <div className=' relative'>
      <Image src={img} alt="banner img"  sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: 'auto',
        }}></Image>
      
      <div className=' absolute space-y-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
        <p className=' uppercase text-yellow-300'>amazing a delicious</p>
        <h1 className=' text-white font-semibold md:text-6xl'>Where every flavor  <br />
          tells a story
        </h1>
        <p className=' text-white'>Come with family & feel the joy of mouthwatering food</p>
        <button>

        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;