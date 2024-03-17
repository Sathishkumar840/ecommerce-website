
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { data } from 'autoprefixer';


const BestSellers = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json").then(res => res.json()).then(data => setProducts(data))
    }, []);

    const bestSellers = products.filter((item) => item.status === "Best Selers");
    console.log(bestSellers);

    return (
        <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
            <div>
                <h1 className='title'>Best Sellers</h1>
                <p className='text-black capitalize md:w2/3 mx-auto mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nunc,
                    fermentum quis sapien in, placerat scelerisque risus. Class aptent taciti sociosqu ad litora torquent per
                </p>

            </div>
            {/*  best seller products*/}

            <div className='mb-16'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}


                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        bestSellers.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Link to={`/shop/${product.id}`}>
                                    <img className='mx-auto w-full hover:scale-105 transition-all duration-300' src={product.image} alt="" />
                                </Link>
                                <div className='mt-4 px-4'>
                                    <h4 className='text-base font-semibold mb-2'>{product.title}</h4>
                                </div>

                                <div className='flex justify-between'>
                                    <p className='text-black/50'>{product.category}</p>
                                    <p className='font-semibold'>${product.price}</p>
                                </div>

                            </SwiperSlide>
                        ))
                    }



                </Swiper>
            </div>
        </div>
    )
}

export default BestSellers