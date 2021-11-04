import { injectable } from "inversify";
import { ICarOnSaleClient } from "../interface/ICarOnSaleClient";
import fetch from 'node-fetch';
import { AuctionsDto } from "../dto/auctions.dto";
import { AuthDto } from "../dto/auth.dto";

@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {
  getRunningAuctions(): Promise<AuctionsDto>{
     return new Promise( async (resolve, reject) => {
        try {
        // api call login PUT
        // const authObject = should has userId and authtoken
        const responseAuth = await fetch(
          "http://api-core-dev.caronsale.de/api/v1/authentication/buyer-challenge%40caronsale.de",
          {
            method: "PUT",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              password: "Test123.",
              meta: "string",
            }),
          },
        );

        // read json result
        const resultAuth = await responseAuth.json();
        const authDto = resultAuth as AuthDto;

        // api call auctions/buyer GET
        const responseAuctions = await fetch(
          "http://api-core-dev.caronsale.de/api/v2/auction/buyer/?filter=test&count=false",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              userid: authDto.userId,
              authtoken: authDto.token,
            }
          },
        );
          // read json result
          const resultAuctions = await responseAuctions.json();
          const auctionsDto = resultAuctions as AuctionsDto;
          resolve(auctionsDto);
        } catch (error) {
          reject(error);
          // console.log("this is catch error for CarOnSaleClient", error)
        }
      });
  }
}

// (async function (client: ICarOnSaleClient) {
//   try {
//     const runningAuctions = await client.getRunningAuctions();
//     console.log(getRunningAuctions())
//   } catch (error) {
//     console.error(error)
//   }
// })