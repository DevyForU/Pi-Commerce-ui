import { XMarkIcon } from "@heroicons/react/24/outline";
import { Car } from "@/interface/car";
import Button from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomForm from "./CustomForm";


interface CarDetailsProps {
    car: Car;
  }
  
const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
    return (
        <div className=" w-[57vw] shadow-xl bg-white hover:shadow-xl">
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
                    hello guys mldjflkjlkfqjl
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button type="button">MAKE AN APPOINTEMENT</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            Hello this is content
                            <CustomForm/>
                        </DialogContent>
                    </Dialog>
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