import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Image from "next/image";
interface IProps {
  items: any[];
}

function NextArrow(props:any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={
        "shadow bg-transparent p-2 rounded-full border-2 border-white text-white absolute right-5 top-1/2 z-10 cursor-pointer"
      }
    >
      <HiArrowRight size={28} />
    </div>
  );
}

function PrevArrow(props:any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`shadow bg-transparent p-2 rounded-full border-2 border-white text-white absolute left-5  top-1/2 z-10 cursor-pointer`}
    >
      <HiArrowLeft size={28} />
    </div>
  );
}

const CustomSlider = ({ items }: IProps) => {
  const [current, setCurrent] = React.useState(0);
  const sliderRef = React.useRef(null);
  const settings = {
    className: "center flex items-center",
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_:any, index:any) => {
      setCurrent(index);
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden relative">
      <Slider {...settings} ref={sliderRef}>
        {[...items]
          // .filter((_, i) => i === 0)
          .map((item, i) => (
            <div className={`outline-none w-full`} key={`item-${i}`}>
              <section
                className={`p-20 overflow-hidden transform transition-all h-72 lg:h-slider bg-white bg-cover bg-center text-white w-full flex items-center`}
                // style={{
                //   backgroundImage: `url('${item?.cover}')`,
                // }}
              >
                {item?.cover && (
                  <Image
                    src={item?.cover}
                    alt=""
                    className={`object-cover`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    quality={100}
                    placeholder="blur"
                    blurDataURL={item?.cover}
                  />
                )}

                {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-slider" />

                <div className="container mx-auto py-5 px-4 sm:px-6 lg:px-8 relative">
                  <h3 className="hidden font-semibold flex space-x-2 text-md lg:text-2xl mb-5">
                    {item?.types?.map((type) => (
                      <span
                        className="flex space-x-2 items-center"
                        key={`${type._id}`}
                      >
                        {type?.iconUrl && (
                          <img src={type?.iconUrl} className="w-4 h-4" />
                        )}{" "}
                        <span>{type?.ui?.name}</span>
                      </span>
                    ))}
                  </h3>
                  <h1 className="w-full lg:w-8/12 font-bold text-xl lg:text-5xl mb-5">
                    {item?.ui?.name}
                  </h1>
                  <p className="w-full text-sm lg:text-base lg:w-1/2 mb-5">
                    {item?.ui?.description}
                  </p>
                  <Link href={`/events/${item?._id}`}>
                    <a className="border px-10 py-3 rounded inline-block hover:opacity-80 active:opacity-60">
                      Дэлгэрэнгүй
                    </a>
                  </Link>
                </div> */}
              </section>
            </div>
          ))}
      </Slider>

      {/* <>
        <div className="relative z-10">
          {items?.map((item, i) => (
            <div className={`outline-none w-full`} key={`item-${i}`}>
              <section
                className={`p-20 overflow-hidden transform transition-all h-72 lg:h-slider bg-white bg-cover bg-center text-white w-full flex items-center`}
                // style={{
                //   backgroundImage: `url('${item?.cover}')`,
                // }}
              >
                <Image
                  src={item?.cover}
                  alt=""
                  className={`object-cover`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  quality={100}
                  placeholder="blur"
                  blurDataURL={item?.cover}
                />
              </section>
            </div>
          ))}

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="mouse transform scale-0 lg:scale-50"></div>
          </div>
        </div>
      </> */}
    </div>
  );
};

export default CustomSlider;
