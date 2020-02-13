import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndex() {
    return {
      message: 'Server is running',
      hasToken: !!process.env.TOKEN,
      hasCollectionUrl: !!process.env.COLLECTIONURL,
    };
  }

  @Post()
  postIndex() {
    return 'bla';
  }
}
