import { ArrowUpRightIcon, BeakerIcon, BoltIcon, UserIcon } from '@heroicons/react/24/outline'
import Popup from 'reactjs-popup';
import CarDetails from './CarDetails';
import { Car } from '../app/home/interface/car';
import { ReactNode } from 'react';

interface CarCardProps {
    car: Car;
}
const CarCard: React.FC<CarCardProps> = ({ car }) => {
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

    return (
        <div className="flex flex-col bg-[#050B22] text-white rounded-2xl w-56">
            <img className="w-56 h-36 object-cover rounded-t-2xl" src="R8.jpeg" alt="Car image" />
            <ul className="py-3 px-5">
                <li className="text-xs mb-2">
                    <h4 className="">{car.name}</h4>
                    <p className="">{car.configuration.brand} - {car.configuration.model}</p>
                </li>
                <li>
                    <ul className="flex gap-7 py-1 border-t border-b border-gray-400 justify-center text-xs">
                        <li className="flex flex-col items-center gap-1 mb-0.5">
                            <BoltIcon className="w-4" />
                            <p>{car.configuration.power} kW</p>
                        </li>
                        <li className="flex flex-col items-center gap-1 mb-0.5">
                            <BeakerIcon className="w-4" />
                            <p>{car.type}</p>
                        </li>
                        <li className="flex flex-col  items-center gap-1">
                            <UserIcon className="w-4" />
                            <p>{car.configuration.place_number} seats</p>
                        </li>
                    </ul>
                </li>
                <li className="flex mt-2">
                    <p className="text-sm font-medium">{car.price} Ar</p>
                    
                    <Popup trigger={<button className="flex text-xs mt-0.5 ml-8 hover:underline">View details <ArrowUpRightIcon className="w-3 mt-1 ml-1" /></button>} 
                                position="center center" modal nested closeOnDocumentClick
                                {...{overlayStyle} }
                        >
                            {((close: () => void) => <CarDetails car={car} onClick={close} />) as unknown as ReactNode}
                        </Popup>
                </li>
            </ul>
            <div>
            </div>
        </div>
    )
}

export default CarCard