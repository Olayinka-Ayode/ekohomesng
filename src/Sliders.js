import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import icon from './user-icon.png'
import { useEffect, useState } from 'react'

const Sliders = () => {
    let slides = 3;
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if(window.innerWidth < 720){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    }

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    isMobile ? slides = 1 : slides = 3;

    return (
        <div className='mt-24 md:mx-44 mb-24 md:mb-0' id='referral'>
            <Swiper spaceBetween={50} slidesPerView={slides} autoplay={{delay: 2500, disableOnInteraction: false,}} pagination={{clickable: true,}} navigation={true} modules={[Autoplay, Pagination, Navigation]} loop={true}>
                <SwiperSlide>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={icon} alt="referral" width="15%" className='pb-4' />
                        <p className='text-justify px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae pariatur dignissimos quod, ab delectus odio. Libero amet magnam, nisi nulla ea iure. Vitae laudantium praesentium labore culpa aperiam ducimus.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={icon} alt="referral" width="15%" className='pb-4' />
                        <p className='text-justify px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae pariatur dignissimos quod, ab delectus odio. Libero amet magnam, nisi nulla ea iure. Vitae laudantium praesentium labore culpa aperiam ducimus.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={icon} alt="referral" width="15%" className='pb-4' />
                        <p className='text-justify px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae pariatur dignissimos quod, ab delectus odio. Libero amet magnam, nisi nulla ea iure. Vitae laudantium praesentium labore culpa aperiam ducimus.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={icon} alt="referral" width="15%" className='pb-4' />
                        <p className='text-justify px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae pariatur dignissimos quod, ab delectus odio. Libero amet magnam, nisi nulla ea iure. Vitae laudantium praesentium labore culpa aperiam ducimus.</p>
                    </div>
                </SwiperSlide>
        </Swiper>
        </div>
    );
}
 
export default Sliders;