import { Module } from '@nestjs/common';

import { config } from 'dotenv';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import configuration from './configuration';

config();

const SYNC = true;

export const pgConfig: TypeOrmModuleOptions = {
  url: configuration.pg.url,
  type: configuration.pg.name,
  entities: [],
  synchronize: SYNC,
} as TypeOrmModuleOptions;

@Module({
  imports: [TypeOrmModule.forRoot(pgConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
