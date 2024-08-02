import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jokes } from './jokes.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Jokes)
    private jokesRepository: Repository<Jokes>,
  ) {}

  async getRandomJoke(type?: string): Promise<string> {
    const jokes = await this.jokesRepository.find({
      where: { type, is_moderated: true },
    });
    if (jokes.length === 0) return 'No jokes available';
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex].content;
  }

  async getJokeTypes(): Promise<string[]> {
    const jokes = await this.jokesRepository.find({
      select: ['type'],
      where: { is_moderated: true },
    });
    return [...new Set(jokes.map((joke) => joke.type))];
  }

  async submitJoke(joke: Jokes): Promise<Jokes> {
    // Check if the joke already exists
    const existingJoke = await this.jokesRepository.findOne({
      where: { content: joke.content },
    });

    if (existingJoke) {
      throw new BadRequestException('Joke already exists');
    }

    // Set the is_moderated field to true
    joke.is_moderated = true;

    const newJoke = this.jokesRepository.create(joke);
    console.log('New joke added:', newJoke);
    return this.jokesRepository.save(newJoke);
  }
}
