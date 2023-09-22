import { Car } from '../dto/car.dto';
import { IWaysToTravel } from './ways.to.travel.interface';

export class Drive implements IWaysToTravel {

    apply(): boolean {
        throw new Error('Method not implemented.');
    }

    execute(): Car {
        return new Car();
    }

}