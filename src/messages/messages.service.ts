import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MessagesEntity } from './entitty/messages.entity';
import { MessagesRequest } from './dtos/messages.request.dto';
import { v1 as uuidv1 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessagesEntity)
    private readonly messagesRepository: Repository<MessagesEntity>,
  ) {}

  public async create(request: MessagesRequest) {
    const newMessage = this.messagesRepository.create({
      id: uuidv1(),
      name: request.name,
      description: request.description,
      date: new Date(),
      status: 'pending',
      to: request.to,
      from: request.from,
    });

    await this.messagesRepository.save(newMessage);

    if (!request.name || !request.description || !request.to || !request.from) {
      throw new HttpException(
        `Error, fill in all fields!`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async getAll(): Promise<MessagesEntity[]> {
    const findAll = await this.messagesRepository.find();

    if (findAll.length === 0) {
      throw new HttpException(
        `Error, there is no message registered in our database !`,
        HttpStatus.NOT_FOUND,
      );
    }

    return findAll;
  }

  public async deleteMessage(id: string): Promise<MessagesEntity> {
    const message = await this.messagesRepository.findOneBy({ id });

    if (!message) {
      throw new HttpException(
        `Error, the message with ID "${id}" does not exist in our database.`,
        HttpStatus.NOT_FOUND,
      );
    }
    await this.messagesRepository.delete(id);

    return message;
  }
  public async modifyStatus(
    id: string,
    status: string,
  ): Promise<MessagesEntity> {
    const message = await this.messagesRepository.findOneBy({ id });

    if (!message) {
      throw new HttpException(
        `Error, the message with ID "${id}" does not exist in our database.`,
        HttpStatus.NOT_FOUND,
      );
    }

    if (!status) {
      throw new HttpException(
        'Error, enter a new status — it cannot be empty.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const validStatuses = ['pending', 'sent', 'completed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      throw new HttpException(
        `Invalid status "${status}". Valid statuses are: ${validStatuses.join(', ')}`,
        HttpStatus.BAD_REQUEST,
      );
    }

    message.status = status;

    const updated = await this.messagesRepository.save(message);

    return updated;
  }

  public async findByName(name: string): Promise<MessagesEntity> {
    const findByName = await this.messagesRepository.findOneBy({ name });
    if (findByName === null) {
      throw new HttpException(
        `Error, the message with NAME "${name}" does not exist in our database.`,
        HttpStatus.NOT_FOUND,
      );
    }
    return findByName;
  }
}
