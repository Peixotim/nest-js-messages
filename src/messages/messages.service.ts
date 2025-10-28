import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MessagesEntity } from './entitty/messages.entity';
import { MessagesRequest } from './dtos/messages.request.dto';
import { v1 as uuidv1 } from 'uuid';
@Injectable()
export class MessagesService {
  private arrayMessages: MessagesEntity[] = [];

  public create(request: MessagesRequest) {
    const newUser: MessagesEntity = {
      id: uuidv1(),
      name: request.name,
      description: request.description,
      date: new Date(),
      status: 'pending',
      to: request.to,
      from: request.from,
    };

    this.arrayMessages.push(newUser);

    if (
      request.name == null ||
      request.description === null ||
      request.to === null ||
      request.from === null
    ) {
      throw new HttpException(
        `Error, fill in all fields!`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public getAll(): MessagesEntity[] {
    if (this.arrayMessages.length === null) {
      throw new HttpException(
        `Error there is no task registered in our database`,
        HttpStatus.NOT_FOUND,
      );
    }
    return this.arrayMessages;
  }
}
