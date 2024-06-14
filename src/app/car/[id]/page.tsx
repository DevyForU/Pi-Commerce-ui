"use client";
import NavBar from "@/components/NavBar";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Car {
    id?: number;
    price: number;
    status: 'pending' | 'validated' | 'rejected' | 'archived';
    type: string;
    brand: string;
    model: string;
    color: string;
    engine: string;
    place_number: number;
    power: number;
    images: { 
      id: string;
      url: string; 
    }[];
  }

function CarDetails() {
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const path: string = usePathname();
  const idPath: string | undefined = path.split("/").pop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://[::1]:3001/cars/${idPath}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Car = await response.json();
        setCar(data);
      } catch (error) {
        setError("Error fetching car data");
      } finally {
        setLoading(false);
      }
    };

    if (idPath) {
      fetchData();
    }
  }, [idPath]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!car) {
    return <div>No car data found</div>;
  }

  return (
    <>
      <div className="bg-[#303841]">
        <NavBar />
      </div>
      <div className="bg-[url('/bg.png')] bg-cover h-screen flex flex-col items-center">
      <div className="z-0 absolute mt-48">
        <p className="font-bold text-9xl text-[#F3F3F3]">{car.model}</p>
      </div>
      <div className="flex z-10 mt-64 pb-12">
        <img src="/R8-nobg.png" alt={car.model} className="w-[39vw]" />
        <p className="mt-40 text-[#303841] font-semibold">{car.price}€</p>
      </div>
      <div className="flex text-[#303841] bg-[#F3F3F3] w-full justify-center gap-20 pb-12">
        <ul className="flex gap-24">
          <li className="flex gap-1">
            <img src="/power.svg" alt="" className="w-8 mb-5" />
            <div>
              <p>Power</p>
              <p className="font-medium text-xl">{car.power} kW</p>
            </div>
          </li>
          <li className="flex gap-1">
            <img src="/type.svg" alt="" className="w-7 mb-5" />
            <div>
              <p>Type</p>
              <p className="font-medium text-xl">{car.type}</p>
            </div>
          </li>
          <li className="flex gap-1">
            <img src="/engine.svg" alt="" className="w-7 mb-5" />
            <div>
              <p>Engine</p>
              <p className="font-medium text-xl">{car.engine}</p>
            </div>
          </li>
          <li className="flex gap-1">
            <UserIcon className="w-7 mb-5" />
            <div>
              <p>Place Numbers</p>
              <p className="font-medium text-xl">{car.place_number} seats</p>
            </div>
          </li>
        </ul>
        <Link href={"/home"}>
          <button className="bg-[#303841] text-[#F3F3F3] py-2 px-4 rounded-full hover:scale-105">Make An Appointment</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default CarDetails;
