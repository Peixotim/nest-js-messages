import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { MessagesEntity } from './entitty/messages.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MessagesEntity])],
  providers: [MessagesService],
  controllers: [MessagesController],
})
export class MessagesModule {}
