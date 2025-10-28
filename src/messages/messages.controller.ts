import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesRequest } from './dtos/messages.request.dto';
import { MessagesEntity } from './entitty/messages.entity';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() request: MessagesRequest) {
    return this.messagesService.create(request);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<MessagesEntity[]> {
    return await this.messagesService.getAll();
  }
}
