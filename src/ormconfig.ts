import { TypeOrmModule } from '@nestjs/typeorm';

export const config: TypeOrmModule = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'qwer1234',
  database: 'teste-crud',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
