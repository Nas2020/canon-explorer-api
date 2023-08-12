/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Interaction') private InteractionsModel: Model<any>,
    @InjectModel('Block') private blockModel: Model<any>,
    @InjectModel('Contract') private contractModel: Model<any>,
    @InjectModel('Network') private networkModel: Model<any>
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  // Methods for fetching data from each collection:

  // async getCredRegisteredEvents(): Promise<any[]> {
  //   return this.credRegisteredEventModel.find().exec();
  // }

  // async getNYMRegisteredEvents(): Promise<any[]> {
  //   return this.nymRegisteredEventModel.find().exec();
  // }

  async getInteractions(): Promise<any[]> {
    return this.InteractionsModel.find().exec();
  }

  async getBlockNumber(): Promise<any[]> {
    return this.blockModel.find().exec();
  }

  async getContracts(): Promise<any[]> {
    return this.contractModel.find().exec();
  }

  async getPeers(): Promise<any[]> {
    return this.networkModel.find().exec();
  }
}
