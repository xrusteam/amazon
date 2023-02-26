import React from 'react';
import Slider from 'react-slick';
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
  bannerImgFive,
} from '../../assets';

const Banner = () => {
  const [dotActive, setDotActive] =
    React.useState(0);
  const banners = [
    bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive,
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          top: '70%',
          left: '0',
          right: '0',
          margin: '0 auto',
          transform: 'translate(-50% -50%)',
          width: '210px',
        }}
      >
        <ul
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: '30px',
                color: 'white',
                border: '1px solid #f3a847',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                background: '#131921',
                padding: '8px 0',
                cursor: 'pointer',
                alignItems: 'center',
              }
            : {
                width: '30px',
                color: 'white',
                border: '1px solid #f3a847',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                background: 'gray',
                padding: '8px 0',
                cursor: 'pointer',
                alignItems: 'center',
              }
        }
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: 'absolute',
                top: '70%',
                left: '0',
                right: '0',
                margin: '0 auto',
                transform:
                  'translate(-50%, -50%)',
                width: '150px',
              }}
            >
              <ul
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      background: '#131921',
                      padding: '8px 0',
                      cursor: 'pointer',
                      border: '1px solid #f3a847',
                      fontSize: '12px',
                    }
                  : {
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#232F3E',
                      color: 'white',
                      padding: '8px 0',
                      cursor: 'pointer',
                      border: '1px solid white',
                      fontSize: '12px',
                    }
              }
            >
              {i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <div className="w-full h-full">
        <Slider {...settings}>
          {banners.map((banner, i) => (
            <div key={i}>
              <img src={banner} alt="banner" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
