import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { Jokes } from './jokes.entity';

@ApiTags('jokes')
@Controller('jokes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('random')
  @ApiOperation({ summary: 'Get a random joke' })
  @ApiQuery({ name: 'type', required: false, description: 'Type of the joke' })
  @ApiResponse({ status: 200, description: 'Returns a random joke' })
  @ApiResponse({ status: 404, description: 'No jokes available' })
  getRandomJoke(@Query('type') type?: string): Promise<string> {
    return this.appService.getRandomJoke(type);
  }

  @Get('types')
  @ApiOperation({ summary: 'Get all joke types' })
  @ApiResponse({ status: 200, description: 'Returns an array of joke types' })
  getJokeTypes(): Promise<string[]> {
    return this.appService.getJokeTypes();
  }

  @Post()
  @ApiOperation({ summary: 'Submit a new joke' })
  @ApiBody({ type: Jokes, description: 'The joke to be submitted' })
  @ApiResponse({ status: 201, description: 'Joke submitted successfully' })
  @ApiResponse({ status: 400, description: 'Joke already exists' })
  async createJoke(@Body() joke: Jokes): Promise<Jokes> {
    return this.appService.submitJoke(joke);
  }
}
