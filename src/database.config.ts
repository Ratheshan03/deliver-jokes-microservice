import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Jokes } from './jokes.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Ratheshan@03',
  database: 'jokes_service_db',
  entities: [Jokes],
  synchronize: true, // Set to false in production
};
