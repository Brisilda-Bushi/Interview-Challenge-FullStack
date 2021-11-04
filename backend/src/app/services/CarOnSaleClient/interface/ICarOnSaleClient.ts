import { AuctionsDto } from "../dto/auctions.dto";

/**
 * This service describes an interface to access auction data from the CarOnSale API.
 */
export interface ICarOnSaleClient {

    getRunningAuctions(): Promise<AuctionsDto /* TODO: Introduce a type */>

}

