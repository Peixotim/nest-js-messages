import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesRequest } from './dtos/messages.request.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() request: MessagesRequest) {
    return this.messagesService.create(request);
  }
}
