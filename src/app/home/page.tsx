"use client";

import { useEffect, useState } from "react";
import BrandCarousel from "../../components/BrandCarousel";
import CarCard from "../../components/CarCard";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { Car } from "../../interface/car";
import BrandCard from "@/components/BrandCard";

const useFetchCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://[::1]:3001/cars');

        if (!response.ok) {
          throw new Error('Failed fetching cars');
        }

        const data = await response.json();
        setCars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return { cars, loading, error };
};

const brands = [
  { name: "Mercedes Benz", icon: "/mercedes-benz.svg" },
  { name: "Ford", icon: "/ford.svg" },
  { name: "Renault", icon: "/renault.svg" },
  { name: "Peugeot", icon: "/peugeot.svg" },
  { name: "Volkswagen", icon: "/volkswagen.svg" },
  { name: "Citroën", icon: "/citroen.svg" },
];

const LandingPage: React.FC = () => {
  const { cars, loading, error } = useFetchCars();

  if (loading) {
    return <div>Loading...</div>; // Peut être remplacé par un spinner ou une indication de chargement
  }

  if (error) {
    return <div>Error: {error}</div>; // Gestion de l'erreur de manière appropriée
  }

  return (
    <>
      <div
        style={{
          backgroundImage: 'url("/car1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
        }}
      >
        <div className="bg-black bg-opacity-65">
          <NavBar />
          <div className="flex flex-col text-white items-center pt-40 pb-72">
            <p className="text-sm mb-2">Find cars for sale near you</p>
            <p className="font-semibold text-4xl">Find Your Perfect Car</p>
          </div>
          <div className="bg-slate-100 pt-16 pb-10 rounded-t-[70px]">
            <h1 className="text-2xl ml-44 mb-5 font-semibold">Explore Our Premium Brands</h1>
            <div className="flex justify-center gap-8">
            {brands.map((brand, index) => (
          <BrandCard key={index} name={brand.name} icon={brand.icon} />
        ))}
            </div>
          </div>
          <div className="flex flex-col pt-12 pb-16 bg-white overflow-x-auto">
            <h1 className="text-2xl mb-9 font-semibold pl-32">🔥 Popular cars</h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {cars.map(car => (
                <CarCard car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
