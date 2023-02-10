import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('seed')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSeed(): Object {
    return this.appService.getSeed();
  }
}
