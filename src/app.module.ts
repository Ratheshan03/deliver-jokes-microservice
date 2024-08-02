import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Jokes } from './jokes.entity';
import { typeOrmConfig } from './database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Jokes]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
