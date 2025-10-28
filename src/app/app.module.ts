import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from 'src/messages/messages.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      database: 'nest-db',
      password: 'postgres',
      autoLoadEntities: true, //Carrega entidades sem especificar-las
      synchronize: true, //Sincroniza tudo oque fizemos aqui com o banco de dados (Nao devemos utilizar em producao)
    }),
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
