"use client";
import { useEffect, useState } from "react";
import BrandCard from "./components/BrandCard"
import CarCard from './components/CarCard';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar"
import { Car } from "./interface/car";


function landingPage() {
    const useFetchCars = () => {
        const [cars, setCars] = useState<Car[]>([]);
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState<string | null>(null);
    
        useEffect(() => {
            const fetchCars = async () => {
                try {
                    const response = await fetch('http://localhost:8080/car');
                    if (!response.ok) {
                        throw new Error('Failed to fetch cars');
                    }
                    const data = await response.json();
                    setCars(data);
                } catch (err: any) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchCars();
        }, []);
    
        return { cars, loading, error };
    };
    
    const {cars, loading, error} = useFetchCars();

    return (
        <>
        <div className="bg-[url('/car1.jpg')] bg-contain">
            <div className="bg-black bg-opacity-65">
                <NavBar />
                <div className="flex flex-col text-white items-center pt-40 pb-72">
                    <p className="text-sm mb-2">Find cars for sale near you</p>
                    <p className="font-semibold text-4xl">Find Your Perfect Car</p>
                </div>
                <div className="bg-slate-100 pt-16 pb-10 rounded-t-[70px]">
                    <h1 className="text-2xl ml-44 mb-5 font-semibold">Explore Our Premium Brands</h1>
                    <div className="flex justify-center gap-8">
                        <BrandCard name="Mercedes Benz" icon="/mercedes-benz.svg" />
                        <BrandCard name="Ford" icon="/ford.svg" />
                        <BrandCard name="Renault" icon="/renault.svg" />
                        <BrandCard name="Peugeot" icon="/peugeot.svg" />
                        <BrandCard name="Volkswagen" icon="/volkswagen.svg" />
                        <BrandCard name="Citroën" icon="/citroen.svg" />
                    </div>
                </div>
                <div className="flex flex-col pt-12 pb-16 bg-white pl-44 overflow-x-auto">
                    <h1 className="text-2xl mb-9  font-semibold">🔥 Popular cars</h1>
                    <div className="flex gap-5 flex-wrap">
                        {cars.map(car => (
                            <CarCard car={car}/>
                        ))}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
        

    )
}

export default landingPage