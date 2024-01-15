import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.scss'

export default () => {
    return (
        <div className='slider'>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><div className='mountain'><div className='mountainText'><h2 className='head'>Markup: HTML Tags and Formatting</h2><p className='about'>Headings Header one Header two Header three Header four Header five Header six Blockquotes Single line blockquote: Stay hungry. Stay foolish. Multi line blockquote with a cite reference: People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to</p></div></div></SwiperSlide>
                <SwiperSlide><div className='sea'><div className='seaText'><h2 className='head'>Markup: Image Alignment</h2><p className='about'>Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let’s get started.</p></div></div></SwiperSlide>
                <SwiperSlide><div className='forest'><div className='forestText'><h2 className='head'>Markup: Title With Special Characters</h2><p className='about'>Markup: Title With Special Characters ~`!@#$%^&*()-_=+{ }[]/;:'”?,. Putting special characters in the title should have no adverse effect on the layout or functionality. Special characters in the post title have been known to cause issues with JavaScript when it is minified, especially in the admin when editing the post itself ie. issues with metaboxes, media upload</p></div></div></SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};