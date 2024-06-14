import { ArrowUpRightIcon, BeakerIcon, BoltIcon, UserIcon } from '@heroicons/react/24/outline';
import CarDetails from '../components/CarDetails';
import { Car } from '../interface/car';
import { ReactNode } from 'react';
import Link from 'next/link';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full h-36 object-cover rounded-t-lg" src="R8.jpeg" alt="Car image" />
      <div className="p-4">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">{car.model}</h5>
        <p className="text-gray-700 dark:text-gray-400">{car.brand}</p>
        <ul className="flex gap-7 py-2 justify-center text-xs">
          <li className="flex flex-col items-center gap-1">
            <BoltIcon className="w-4" />
            <p>{car.power} kW</p>
          </li>
          <li className="flex flex-col items-center gap-1">
            <BeakerIcon className="w-4" />
            <p>{car.type}</p>
          </li>
          <li className="flex flex-col items-center gap-1">
            <UserIcon className="w-4" />
            <p>{car.place_number} seats</p>
          </li>
        </ul>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-medium text-gray-900 dark:text-white">{car.price} Ar</p>
          <Link href={`/car/${car.id}`}>
            <button className="text-blue-700 hover:underline flex items-center text-sm">
                  View details <ArrowUpRightIcon className="w-4 h-4 ml-1" />
              </button>
          </Link>
              
        </div>
      </div>
    </div>
  );
};

export default CarCard;
