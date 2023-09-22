
import { Plane } from '../dto/plane';
import { IWaysToTravel } from './ways.to.travel.interface';

export class Fly implements IWaysToTravel {

    apply(): boolean {
        throw new Error('Method not implemented.');
    }

    execute(): Plane {
        return new Plane();
    }

}