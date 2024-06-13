import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Car } from "../app/home/interface/car";

interface CarDetailsProps {
    car: Car;
    onClick: () => void;
  }
  
const CarDetails: React.FC<CarDetailsProps> = ({ car, onClick }) => {
    return (
        <div className=" w-[57vw] shadow-xl bg-white hover:shadow-xl">
            <XMarkIcon onClick={onClick} className="w-9 pt-3 pl-3 hover:cursor-pointer" />
            <div className="flex justify-center self-center pl-14 py-6">
                <div className="mr-auto mt-6">
                    <h1 className="text-4xl font-semibold">{car.name}</h1>
                    <div className="flex mt-5 gap-4">
                        <ul className="">
                            <li>Type:</li>
                            <li>Brand:</li>
                            <li>Model:</li>
                            <li>Color:</li>
                            <li>Engine:</li>
                            <li>Place:</li>
                            <li>Power:</li>
                        </ul>
                        <ul className="text-gray-500">
                            <li>{car.type}</li>
                            <li>{car.configuration.brand}</li>
                            <li>{car.configuration.model}</li>
                            <li>{car.configuration.color}</li>
                            <li>{car.configuration.engine}</li>
                            <li>{car.configuration.place_number}</li>
                            <li>{car.configuration.power} kW</li>
                        </ul>
                    </div>
                    <button className="flex text-white bg-black px-4 py-2 mt-8 hover:scale-105">MAKE AN APPOINTMENT <ArrowRightIcon className="w-4 mt-1 ml-1" /></button>
                </div>
                <div className="flex flex-col">
                    <div className="flex text-white bg-black py-2 pl-4 pr-9 ml-auto">
                        <p className="mr-1 mt-0.5">Ar</p>
                        <p className="text-3xl">2000000</p>
                    </div>
                    <img className="w-[30vw] mt-4 mr-5 object-cover" src="/R8-nobg.png" alt="Car image" />
                </div>
            </div>

        </div>
    )
}

export default CarDetails   