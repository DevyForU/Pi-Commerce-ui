import React from 'react';
import Slider from 'react-slick';
import BrandCard from './BrandCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/carousel.css';  // Vous pouvez ajouter des styles personnalisés ici

const BrandCarousel: React.FC = () => {
  const brands = [
    { name: "Mercedes Benz", icon: "/mercedes-benz.svg" },
    { name: "Ford", icon: "/ford.svg" },
    { name: "Renault", icon: "/renault.svg" },
    { name: "Peugeot", icon: "/peugeot.svg" },
    { name: "Volkswagen", icon: "/volkswagen.svg" },
    { name: "Citroën", icon: "/citroen.svg" },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <BrandCard key={index} name={brand.name} icon={brand.icon} />
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
