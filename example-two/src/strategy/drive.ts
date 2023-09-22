import { Car } from '../dto/Car.dto';
import { IWaysToTravel } from './ways.to.travel.interface';

export class Drive implements IWaysToTravel {

    apply(): boolean {
        throw new Error('Method not implemented.');
    }

    execute(): void {
        new Car();
        // Doing other task
    }

}