import { IWaysToTravel } from './ways.to.travel.interface';
import { Fly } from './fly';
import { Drive } from './drive';

// In this example execute all strategy to apply
class WaysToTravelStrategy {

    execute(): void {

        const waysToTravel: IWaysToTravel[] = [
            new Fly(),
            new Drive(),
        ];

        waysToTravel.forEach(way => {
            if (way.apply()) { // If one apply, execute method and continue until finished
                way.execute();
            }
        });
    }
}