import { ITransport } from '../dto/transport.interface';

export interface IWaysToTravel {
    apply(): boolean;
    execute(): ITransport;
}