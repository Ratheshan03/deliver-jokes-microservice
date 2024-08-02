import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Jokes } from './jokes.entity';

@Controller('jokes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('random')
  getRandomJoke(@Query('type') type?: string): Promise<string> {
    return this.appService.getRandomJoke(type);
  }

  @Get('types')
  getJokeTypes(): Promise<string[]> {
    return this.appService.getJokeTypes();
  }

  @Post()
  async createJoke(@Body() joke: Jokes): Promise<Jokes> {
    return this.appService.submitJoke(joke);
  }
}
