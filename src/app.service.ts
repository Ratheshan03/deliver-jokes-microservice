import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private jokes = [
    {
      type: 'general',
      content:
        'Why don’t scientists trust atoms? Because they make up everything!',
    },
    {
      type: 'programming',
      content:
        'Why do programmers prefer dark mode? Because the light attracts bugs!',
    },
    {
      type: 'knock-knock',
      content:
        'Knock, knock. Who’s there? Control Freak. Con… Okay, now you say, “Control Freak who?”',
    },
  ];

  getRandomJoke(type?: string): string {
    const jokes = type
      ? this.jokes.filter((joke) => joke.type === type)
      : this.jokes;
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex].content;
  }

  getJokeTypes(): string[] {
    return [...new Set(this.jokes.map((joke) => joke.type))];
  }
}
