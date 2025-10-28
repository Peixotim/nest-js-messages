import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesRequest } from './dtos/messages.request.dto';
import { MessagesEntity } from './entitty/messages.entity';
import { MessagesUpdateStatus } from './dtos/messages.updateStatus.dto';

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

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  public async modifyName(
    @Param('id') id: string,
    @Body() body: MessagesUpdateStatus,
  ): Promise<MessagesEntity> {
    return await this.messagesService.modifyStatus(id, body.status);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: string): Promise<MessagesEntity> {
    return this.messagesService.deleteMessage(id);
  }
}
