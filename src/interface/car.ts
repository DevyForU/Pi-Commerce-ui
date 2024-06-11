
interface Car {
    name: string;
    price: number;
    status: string;
    type: string;
    configuration: {
        brand: string;
        model: string;
        color: string;
        engine: string;
        place_number: number;
        power: number;
    };
    imageList: { 
        id: string;
        url: string; 
    }[];
}

export type { Car };