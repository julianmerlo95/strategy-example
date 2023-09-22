import { IWaysToTravel } from './ways.to.travel.interface';
import { Fly } from './fly';
import { Drive } from './drive';
import { ITransport } from '../dto/transport.interface';

// In this example only apply one strategy, the first strategy to apply finished the process
class WaysToTravelStrategy {

    execute(): ITransport | null {

        const waysToTravel: IWaysToTravel[] = [
            new Fly(),
            new Drive(),
        ];

        waysToTravel.forEach(way => {
            if (way.apply()) { // If one apply, execute method and return the value
                return way.execute();
            }
        });

        return null
    }
}