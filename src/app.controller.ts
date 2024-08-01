import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('jokes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('random')
  getRandomJoke(@Query('type') type?: string): string {
    return this.appService.getRandomJoke(type);
  }

  @Get('types')
  getJokeTypes(): string[] {
    return this.appService.getJokeTypes();
  }
}
