import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { UserEntity } from './users/entities/user.entity';
import { FileEntity } from './files/entities/file.entity';

@Module({
  imports: [
    UsersModule,
    FilesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'john.db.elephantsql.com',
      port: 5432,
      username: 'hwhxwtvd',
      password: 'Enp6hpuiU2EBgV-OgY_GItoHA73a9AcA',
      database: 'hwhxwtvd',
      entities: [UserEntity, FileEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
