/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Application')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiOperation({ summary: 'Get a Hello World message' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved message' })
  getHello(): string {
    return this.appService.getHello();
  }

  // @ApiTags('Schema Registered Events')
  @Get('interactions')
  @ApiOperation({ summary: 'Retrieve all Interactions with Utility Smart Contract' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved interation transactions and events' })
  getInteractions() {
    return this.appService.getInteractions();
  }

  //@ApiTags('Blocks')
  @Get('blocknumber')
  @ApiOperation({ summary: 'Retrieve The Recent Block Number Recorded in MongoDB' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved blocks' })
  getBlockNumber() {
    return this.appService.getBlockNumber();
  }

  //@ApiTags('Contracts')
  @Get('contracts')
  @ApiOperation({ summary: 'Retrieve all Contracts' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved contracts' })
  getContracts() {
    return this.appService.getContracts();
  }

  //@ApiTags('Peers')
  @Get('peers')
  @ApiOperation({ summary: 'Retrieve all Peers' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved Peers' })
  getPeers() {
    return this.appService.getPeers();
  }

  //@ApiTags('Peers')
  @Get('transactioncount')
  @ApiOperation({ summary: 'Obtain total number of Transactions in the network' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved Peers' })
  async getTransactionCount() {
    const contracts = await this.appService.getContracts();
    const interactions = await this.appService.getInteractions();
    const transactioncount = contracts.length + interactions.length
    return (`Total Number of Transactions in the blockchain is ${transactioncount}`);
  }


}
