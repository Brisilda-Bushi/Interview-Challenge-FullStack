import { AssociatedVehicleDto } from "./associated-vehicle.dto";

export interface AuctionDto {
  id: number;
  label: string;
  endingTime: Date;
  state: number;
  minimumRequiredAsk: number;
  currentHighestBidValue: number;
  numBids: number;
  locationAddress: any;
  locationCity: string;
  locationZip: string;
  startedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  hotBid: boolean;
  originalMinimumRequiredAsk: any;
  allowInstantPurchase: boolean;
  instantPurchasePossibleUntil: any;
  advertisementHtmlContent: any;
  instantPurchasePrice: any;
  locationCountryCode: string;
  startingBidValue: number;
  uuid: string;
  _fk_uuid_vehicle: string;
  _fk_uuid_sellerUser: string;
  _fk_uuid_highestBiddingBuyerUser: string;
  urlToPickupBuyerDocument: any;
  paymentProcess: number;
  type: number;
  _fk_uuid_creatingSellerUser: any;
  isTest: boolean;
  displayMinAsk: boolean;
  isLive: boolean;
  isTransportationDisabledManually: boolean;
  startingBidValueNet: number;
  minimumRequiredAskNet: number;
  originalMinimumRequiredAskNet: any;
  purchasePriceNet: number;
  currentHighestBidValueNet: number;
  highestBidValueAtEndingTimeNet: any;
  instantPurchasePriceNet: any;
  lastOfferBySellerNet: any;
  previousLastOfferBySellerNet: any;
  counterOfferByBuyerNet: any;
  previousCounterOfferByBuyerNet: any;
  renegotiationMidpointValueNet: any;
  pickupInstructions: string;
  thirdPartyVATDepositTransferReference: any;
  thirdPartyVATDepositChargeReference: any;
  thirdPartyVolumeChargeReference: any;
  thirdPartyVatTransferReference: any;
  thirdPartyVATDepositRefundReference: any;
  preventSellerFactoring: boolean;
  amIInvolved: boolean;
  biddingAgentValue: number;
  remainingTimeInSeconds: number;
  remainingTimeForInstantPurchaseInSeconds: any;
  associatedVehicle: AssociatedVehicleDto;
  amIHighestBidder: boolean;
  sellerContact: any;
  rating: any;
  isTransportationAllowedForRegion: boolean;
  isExternalPaymentAllowed: boolean;
  remainingDaysUntilReauctioning: any;
  remainingDaysUntilLatePickup: any;
  latePickupFee: any;
  isTransportationBookingPossible: boolean;
  isExpressPickupAvailable: boolean;
  pickupPossibleInDays: any;
  sellerAccount: any;
  amIRegularBuyer: boolean;
  isCrossBorderNetSale: boolean;
  distanceToVehicleInKms: number;
  buyerPurchaseFee: number;
  buyerSuccessFee: number;
  isMinAskReached: boolean;
  transportationTask: any;
  sellerType: number;
  enforceTransportation: boolean;
  isTransportationAvailable: boolean;
}