import React from "react";
import Im1 from "../../assets/banner/im1.jpeg";
import Im2 from "../../assets/banner/im2.jpeg";
import Im3 from "../../assets/banner/im3.jpeg";
import Im4 from "../../assets/banner/im4.jpeg";
import Im5 from "../../assets/banner/im5.jpeg";
import Im6 from "../../assets/banner/im6.webp";
import Im7 from "../../assets/banner/im7.webp";
import Im8 from "../../assets/banner/im8.webp";
import Im9 from "../../assets/banner/im9.webp";
import Im10 from "../../assets/banner/im10.jpg";
import Im16 from "../../assets/banner/im16.png";
import Im17 from "../../assets/banner/im17.png";
import Im18 from "../../assets/banner/im18.png";
import Im19 from "../../assets/banner/im19.png";
import Im20 from "../../assets/banner/im20.png";
import Slider from "react-slick";

export default function Banner() {

    const ImageList = [
        {
            id: 1,
            img: Im1,
        },
        {
            id: 1,
            img: Im2,
        },
        {
            id: 1,
            img: Im3,
        },
        {
            id: 1,
            img: Im4,
        },
        {
            id: 1,
            img: Im5,
        },
        {
            id: 2,
            img: Im6,
        },
        {
            id: 2,
            img: Im7,
        },
        {
            id: 2,
            img: Im8,
        },
        {
            id: 2,
            img: Im9,
        },
        {
            id: 2,
            img: Im10,
        },
        {
            id: 3,
            img: Im16,
        },
        {
            id: 3,
            img: Im17,
        },
        {
            id: 3,
            img: Im18,
        },
        {
            id: 3,
            img: Im19,
        },
        {
            id: 3,
            img: Im20,
        },
        
    ];

    const bannerSize = (arr, size) => {
        let result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    {/*Banner size 5 images */}
    const ImageBanners = bannerSize(ImageList, 5); 

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="relative overflow-hidden min-h-[400px] sm:min-h-[400px] bg-purple/30 flex justify-center items-center duration-200">
            {/* banner section */} 
            <div className="container py-4 sm:py-5">
                <Slider {...settings}>  
                    {/* images */}
                    {ImageBanners.map((banner, index) => (
                        <div key={index}>
                            <div className="flex justify-center gap-4 mt-2">
                                {banner.map(image => (
                                    <div key={image.id} className="w-80 h-80 overflow-hidden">
                                        <img src={image.img} alt={image.description} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Slider>            
            </div>
        </div>
    );
}
