/* eslint-disable prettier/prettier */
import * as config from 'config';
import { MongoConfig } from '../config.types';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Import schemas
import { InteractionsSchema } from '../schemas/interactions.schema'
import { BlocksSchema } from '../schemas/recentblocknumber.schema';
import { ContractsSchema } from '../schemas/contracts.schema';
import { NetworkSchema } from '../schemas/network.schema';

const mongoConfig: MongoConfig = config.get('mongo');

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.uri),
    MongooseModule.forFeature([
      { name: 'Interaction', schema: InteractionsSchema },
      { name: 'Block', schema: BlocksSchema },
      { name: 'Contract', schema: ContractsSchema },
      { name: 'Network', schema: NetworkSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
