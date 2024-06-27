import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";


export default class TypeOrmConfig{
  static getOrmConfig(configService : ConfigService): TypeOrmModuleOptions{
    return {
      type:'postgres',
      host: configService.getOrThrow('DB_HOST'), 
      port: configService.getOrThrow('DB_PORT'),
      username: configService.getOrThrow('DB_USERNAME'),
      password: configService.getOrThrow('DB_PASSWORD'),
      database: configService.getOrThrow('DB_NAME'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      // entities: [Quiz, Question],
      synchronize: true,
      logging: true,
    }
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async(configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService]

  
  
}