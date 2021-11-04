import { inject, injectable } from "inversify";
import { ILogger } from "./services/Logger/interface/ILogger";
import { DependencyIdentifier } from "./DependencyIdentifiers";
import "reflect-metadata";
import { ICarOnSaleClient } from "./services/CarOnSaleClient/interface/ICarOnSaleClient";
import { AuctionsDto } from "./services/CarOnSaleClient/dto/auctions.dto";

@injectable()
export class AuctionMonitorApp {
    public constructor(
        @inject(DependencyIdentifier.LOGGER) private logger: ILogger,
        @inject(DependencyIdentifier.CAR_ON_SALE_CLIENT)
        private carOnSaleClient: ICarOnSaleClient,
    ) {}

    public async start(): Promise<void> {
        this.logger.log(`Auction Monitor started.`);
        // TODO: Retrieve auctions and display aggregated information (see README.md)
        this.logger.log(`caronsale-coding-challenge-backend v1.0.0 running`);
        try {
            //Number of running Auctions & Number of Bids per Auction & Average Number of Bids per Auction
            this.carOnSaleClient
                .getRunningAuctions()
                .then((auctions: AuctionsDto) => {
                    const noOfAuction = auctions.items.length;
                    const avgNumberOfBidsPerAuction =
                        auctions.items.reduce(
                            (acc, current) => (acc += current.numBids),
                            0,
                        ) / noOfAuction;
                    this.logger.log(
                        "The total number of auctions: " +
                            noOfAuction +
                            " auctions",
                    );

                    this.logger.log(
                        "The average number of bids per auction: " +
                            avgNumberOfBidsPerAuction +
                            " bid(s)",
                    );

                    const avgCurrentHighestBid =
                        auctions.items.reduce(
                            (acc, current) =>
                                (acc += current.currentHighestBidValue),
                            0,
                        ) / noOfAuction;
                    const avgMinimumRequiredAsked =
                        auctions.items.reduce(
                            (acc, current) =>
                                (acc += current.minimumRequiredAsk),
                            0,
                        ) / noOfAuction;
                    let percentage =
                        (avgCurrentHighestBid / avgMinimumRequiredAsked) * 100;
                    this.logger.log(
                        "The average percentage of the auctions progress: " +
                            percentage.toFixed(2) +
                            "%",
                    );

                    // exit with code 0 (no error)
                    process.exit(0);
                });
        } catch (error) {
            console.error(error);

            // exit with error code -1
            process.exit(-1);
        }
    }
}
