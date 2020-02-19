import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ProcessClass } from 'azure-devops-node-api/interfaces/WorkItemTrackingProcessInterfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndex() {
    return {
      message: 'Server is running',
      isProduction: process.env.NODE_ENV === 'production',
      hasToken: !!process.env.TOKEN,
      hasCollectionUrl: !!process.env.COLLECTIONURL,
    };
  }

  @Post()
  async postIndex(@Body() devOpsBody: any) {
    return await this.appService.handleDevOpsRequest(devOpsBody);
  }
}
